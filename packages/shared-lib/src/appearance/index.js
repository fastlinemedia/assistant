import React, { createContext, useState } from 'fl-react'
import classname from 'classnames'
import './style.scss'

export const Appearance = ({
        className,
        brightness = 'light',
        size = 'normal', // or compact
        ...rest,
    }) => {

    const classes = classname({
        'fl-asst-appearance' : true,
        [`fl-asst-brightness-${brightness}`] : brightness,
        [`fl-asst-size-${size}`] : size,
    }, className )

    const context = {
        brightness,
    }
    return (
        <Appearance.Context.Provider value={context}>
            <div className={classes} {...rest} />
        </Appearance.Context.Provider>
    )
}

Appearance.defaults = {
    brightness: 'light',
    contrast: 'normal',
    color: 'normal',
}

Appearance.Context = createContext( Appearance.defaults )
Appearance.Context.displayName = 'Appearance.Context'

Appearance.useAppearance = ( options = defaults ) => {
    const [appearance, setAppearance] = useState({ ...defaults, ...options })

    const setAttribute = ( key = '', value = '' ) => {
        if ( key in defaults ) {
            setAppearance({
                ...appearance,
                [key] : value,
            })
        }
        return false
    }

    const toggleBrightness = () => {
        const attr = 'brightness'
        if ( 'light' === appearance.brightness ) {
            setAttribute( attr, 'dark' )
        } else {
            setAttribute( attr, 'light' )
        }
    }

    return {
        set: options => setAppearance({ ...appearance, ...options }),
        setAttribute,
        AppearanceContext,
        appearance,
        toggleBrightness,
    }
}