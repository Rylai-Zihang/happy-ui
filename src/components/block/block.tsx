import React from 'react'

interface Props {
    children: string
}

export default (props: Props) => {
    return (
        <div className="happy-ui-block-container">
            {props.children}
        </div>
    )
}
