import { useReducer, useState } from 'react'
import classname from 'classnames'

const initReducer = ( { fields, defaults } ) => {
	const state = {}

	Object.entries( fields ).map( ( [ key, field ] ) => {
		const { alwaysCommit, sanitize } = field
		const value = sanitize( defaults[ key ] )
		state[ key ] = {
			value,
			lastCommittedValue: value,
		}
	} )

	return state
}

export const useFormData = ( {
	fields = {},
	defaults = {},
	shouldHighlightChanges = true,
	onSubmit = () => {},
	onChange = () => {},
	onReset = () => {},
} ) => {
	const [ isSubmitting, setIsSubmitting ] = useState( false )

	Object.entries( fields ).map( ( [ key, field ] ) => {
		fields[ key ] = {
			alwaysCommit: false,
			disabled: false,
			id: null,
			isVisible: true,
			label: null,
			onChange: () => {},
			required: false,
			sanitize: v => v,
			...field,
		}
	} )

	const [ state, dispatch ] = useReducer( ( state, action ) => {
		switch ( action.type ) {
		case 'SET_VALUE':
			if ( state[ action.key ].value === action.value ) {
				return state
			}
			let value = fields[ action.key ].sanitize( action.value )
			let alwaysCommit = fields[ action.key ].alwaysCommit
			return {
				...state,
				[ action.key ]: {
					value: value,
					lastCommittedValue: alwaysCommit ? value : state[ action.key ].lastCommittedValue
				}
			}

		case 'SET_VALUES':
			for ( let key in action.values ) {
				if ( undefined !== state[ key ] ) {
					state[ key ].value = action.values[ key ]
					if ( action.shouldCommit ) {
						state[ key ].lastCommittedValue = action.values[ key ]
					}
				}
			}
			return { ...state }

		case 'COMMIT_VALUE':
			return {
				...state,
				[ action.key ]: {
					...state[ action.key ],
					lastCommittedValue: state[ action.key ].value
				}
			}

		case 'COMMIT_ALL':
			for ( let key in state ) {
				state[ key ].lastCommittedValue = state[ key ].value
			}
			return { ...state }

		case 'REVERT_VALUE':
			return {
				...state,
				[ action.key ]: {
					...state[ action.key ],
					value: state[ action.key ].lastCommittedValue
				}
			}

		case 'REVERT_ALL':
			for ( let key in state ) {
				state[ key ].value = state[ key ].lastCommittedValue
			}
			return { ...state }

		default:
			return state
		}
	}, { fields, defaults }, initReducer )

	const setValue = ( key, value, shouldCommit = false ) => {
		dispatch( {
			type: 'SET_VALUE',
			key,
			value,
		} )
		if ( shouldCommit ) {
			dispatch( {
				type: 'COMMIT_VALUE',
				key,
			} )
		}
	}

	const setValues = ( values = {}, shouldCommit = true ) => {
		dispatch( {
			type: 'SET_VALUES',
			values,
			shouldCommit,
		} )
	}

	const valueHasChanged = ( fieldState ) => {
		let value = fieldState.value
		let lastValue = fieldState.lastCommittedValue
		if ( 'object' === typeof value ) {
			value = JSON.stringify( value )
		}
		if ( 'object' === typeof lastValue ) {
			lastValue = JSON.stringify( lastValue )
		}
		return value !== lastValue
	}

	const selectValues = () => {
		const values = {}
		for ( let key in state ) {
			values[ key ] = state[ key ].value
		}
		return values
	}

	const selectChangedValues = () => {
		const changed = {}
		for ( let key in state ) {
			if ( valueHasChanged( state[ key ] ) ) {
				changed[ key ] = state[ key ].value
			}
		}
		return changed
	}

	const getFieldIDs = () => {
		const ids = {}
		for ( let key in fields ) {
			ids[ key ] = fields[ key ].id ? fields[ key ].id : key
		}
		return ids
	}

	const getFieldConfig = () => {
		const values = selectValues()
		const config = {}

		Object.entries( fields ).map( ( [ key, field ] ) => {
			config[ key ] = {
				...field,
				hasChanges: valueHasChanged( state[ key ] ),
				value: state[ key ].value,
				onChange: value => {
					const args = {
						key,
						value,
						values,
						setValue,
					}
					setValue( key, value )
					field.onChange( args )
					onChange( args )
				}
			}

			if ( undefined !== field.options ) {
				const options = field.options
				config[ key ] = Object.defineProperty( config[ key ], 'options', {
					get() {
						if ( 'function' === typeof options ) {
							return options( {
								key,
								values,
								setValue,
							} )
						}
						return options
					}
				} )
			}

			delete config[ key ].sanitize
			delete config[ key ].lastCommittedValue
			delete config[ key ].alwaysCommit
		} )

		return config
	}

	const callbackArgs = {
		ids: getFieldIDs(),
		changed,
		values,
		setValue,
		setValues,
		state,
	}

	const resetForm = () => {
		dispatch( {
			type: 'REVERT_ALL'
		} )
		onReset( callbackArgs )
	}

	const submitForm = () => {
		if ( isSubmitting ) {
			return
		}
		setIsSubmitting( true )
		dispatch( {
			type: 'COMMIT_ALL'
		} )
		onSubmit( callbackArgs )
	}

	const values = selectValues()
	const changed = selectChangedValues()
	const fieldConfig = getFieldConfig()

	return {
		form: {
			onSubmit: e => e.preventDefault(),
			additionalClasses: classname( {
				'fl-asst-highlight-changes': shouldHighlightChanges
			} ),
			context: {
				values,
				fields: fieldConfig
			},
		},
		fields: fieldConfig,
		hasChanges: 0 < Object.keys( changed ).length,
		values,
		changed,
		resetForm,
		submitForm,
		isSubmitting,
		setIsSubmitting,
		setValues,
	}
}
