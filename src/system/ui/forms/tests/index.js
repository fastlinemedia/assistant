import React from 'react'
import { __ } from '@wordpress/i18n'
import { Control, Form } from 'ui'
import './style.scss'

export const Test = () => {
	return (
		<>
			<Form>

				<Form.Section label={ __( 'Basic Inputs' ) }>
					<Form.Item>
						<p>{__( 'This is a testing sheet for different form controls and scenarios. This is intended to serve as an exhaustive testing tool.' )}</p>
					</Form.Item>

					<Form.Item label={ __( 'Name' ) } labelFor="name" isRequired={ true }>
						<input
							id="name"
							type="text"
							required={ true }
							placeholder="Type Something!"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Email Address' ) } labelFor="email" placement="beside" isRequired={ true }>
						<input
							id="email"
							type="email"
							required={ true }
							placeholder="john@example.com"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Enter New Password' ) } labelFor="pw" placement="beside">
						<input
							id="pw"
							name="pw"
							type="password"
							placeholder={ __( 'Password123:)' ) }
						/>
					</Form.Item>

					<Form.Item label={ __( 'Search Me' ) } labelFor="search">
						<input
							id="search"
							name="search"
							type="search"
							placeholder="Enter Your Search"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Phone Number' ) } labelFor="phone">
						<input
							id="phone"
							name="phone"
							type="tel"
							placeholder="(xxx) xxx-xxxx"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Website Address (URL)' ) } labelFor="url">
						<input
							id="url"
							name="url"
							type="url"
							placeholder="https://www.yoursite.com"
						/>
					</Form.Item>
				</Form.Section>

				<Form.Section label={ __( 'More Input Types' ) }>

					<Form.Item label={ __( 'A Text Area' ) } labelFor="area">
						<textarea id="area" rows="5"></textarea>
					</Form.Item>

					<Form.Item label={ __( 'Select Something!' ) } labelFor="selector" isRequired={ true }>
						<select id="selector" name="selector">
							<option>Select Me!</option>
							<option>Something Else</option>
						</select>
					</Form.Item>

					<Form.Item label={ __( 'Multiple Choice (select)' ) } labelFor="multi-selector">
						<select id="multi-selector" name="multi-selector" multiple={ true }>
							<option>Red</option>
							<option>Blue</option>
							<option>Green</option>
						</select>
					</Form.Item>

					<Form.Item label={ __( 'Text Field with Suggestions' ) } labelFor="suggestions">
						<input
							id="suggestions"
							name="suggestions"
							type="text"
							placeholder="Type for suggestions"
							list="mySuggestion"
						/>
						<datalist id="mySuggestion">
							<option>Apple</option>
							<option>Banana</option>
							<option>Blackberry</option>
							<option>Blueberry</option>
							<option>Lemon</option>
							<option>Lychee</option>
							<option>Peach</option>
							<option>Pear</option>
						</datalist>
					</Form.Item>

					<Form.Item label={ __( 'Text field with min/max length' ) } labelFor="length" isRequired={ true }>
						<input
							type="text"
							required
							minLength="6"
							maxLength="24"
							id="length"
							name="length"
							placeholder="Between 6 and 24 characters"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Number Field' ) } labelFor="number" placement="beside">
						<input
							type="number"
							id="number"
							name="number"
							min="0"
							max="500"
							step="10"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Range Field' ) } labelFor="range" placement="beside">
						<input
							type="range"
							id="range"
							name="range"
							min="0"
							max="500"
							step="10"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Color Field' ) } labelFor="color" placement="beside">
						<input
							type="color"
							id="color"
							name="color"
						/>
					</Form.Item>

					<Form.Item label={ __( 'File Uploader' ) } labelFor="file" placement="beside">
						<input type="file" name="file" id="file" accept="image/*" multiple />
					</Form.Item>

					<Form.Item label={ __( 'Date Time' ) } labelFor="datetime" placement="beside">
						<input type="datetime-local" name="datetime" id="datetime" />
					</Form.Item>

					<Form.Item label={ __( 'Progress (read only)' ) } placement="beside">
						<progress max="100" value="75">75/100</progress>
					</Form.Item>

					<Form.Item label={ __( 'Meter (read only)' ) } placement="beside">
						<meter min="0" max="100" value="75" low="33" high="66" optimum="50">75</meter>
					</Form.Item>

					<Form.Item label={ __( 'Toggle Control' ) } placement="beside">
						<Control.Toggle />
					</Form.Item>

				</Form.Section>

				<Form.Section label={ __( 'Form Section' ) }>
					<Form.Item label={ __( 'Phone Number' ) } labelFor="phone2" placement="beside">
						<input
							id="phone2"
							name="phone2"
							type="tel"
							placeholder="(xxx) xxx-xxxx"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Website Address (URL)' ) } labelFor="url2" placement="beside">
						<input
							id="url2"
							name="url2"
							type="url"
							placeholder="https://www.yoursite.com"
						/>
					</Form.Item>
					<Form.Item label={ __( 'Name' ) } labelFor="name2" isRequired={ true }>
						<input
							id="name2"
							name="name2"
							type="text"
							required={ true }
							placeholder="Type Something!"
						/>
					</Form.Item>
					<Form.Item label={ __( 'Number Field' ) } labelFor="number2" placement="beside">
						<input
							type="number"
							id="number2"
							name="number2"
							min="0"
							max="500"
							step="10"
						/>
					</Form.Item>
				</Form.Section>

				<Form.Section label={ __( 'Another Section' ) }>
					<Form.Item label={ __( 'Phone Number' ) } labelFor="phone3" placement="beside">
						<input
							id="phone3"
							name="phone3"
							type="tel"
							placeholder="(xxx) xxx-xxxx"
						/>
					</Form.Item>

					<Form.Item label={ __( 'Website Address (URL)' ) } labelFor="url3" placement="beside">
						<input
							id="url3"
							name="url3"
							type="url"
							placeholder="https://www.yoursite.com"
						/>
					</Form.Item>
				</Form.Section>
				<Form.Footer>
					Footer contents.
				</Form.Footer>
			</Form>
		</>
	)
}

export const ValuesTable = ( { fields } ) => {
	return (
		<table className="fl-asst-values-table">
			<tbody>
				{ Object.keys( fields ).map( key => {
					const field = fields[key]
					let value = field.value

					if ( Array.isArray( field.value ) ) {
						value = '[Array]'
					}
					if ( 'undefined' === typeof field.value ) {
						value = 'undefined'
					}
					if ( null === field.value ) {
						value = 'null'
					}

					return (
						<tr key={ key }>
							<td>{key}</td>
							<td>{ typeof field.value }</td>
							<td>{value}</td>
						</tr>
					)
				} ) }
			</tbody>
		</table>
	)
}
