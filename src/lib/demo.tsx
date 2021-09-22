import React from 'react'
import Highlight from 'react-highlight'

interface Props {
    code: string,
    lang?: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
    const { code } = props
    return (
        <div>
            {props.children}
            <Highlight className={props.lang}>
                {code}
            </Highlight>
        </div>

    )
}

Demo.defaultProps = {
    lang: "javascript"
}

export default Demo