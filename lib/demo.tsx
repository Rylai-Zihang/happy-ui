import React from 'react'
import Highlight from 'react-highlight'

interface Props {
    code: string
}

const Content: React.FunctionComponent<Props> = (props) => {
    const { code } = props
    return (
        <div>
            {props.children}
            <Highlight className='javascript'>
                {code}
            </Highlight>
        </div>

    )
}

export default Content