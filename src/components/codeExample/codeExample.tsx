import React from 'react'
import Highlight from 'react-highlight'
import './style.scss'

interface Props {
    code: string,
    lang: string,
    example: React.ReactChildren,
    desc?: string
}

const CodeExample: React.FunctionComponent<Props> = (props) => {
    const { code, example, lang, desc } = props
    return (
        <div className="happy-ui-code-eg-container">
            <div className="happy-ui-desc">
                {desc}
            </div>
            <div className="happy-ui-example">
                {example}
            </div>
            <Highlight className={lang}>
                {code}
            </Highlight>
        </div>

    )
}

CodeExample.defaultProps = {
    lang: "tsx"
}

export default CodeExample