import React from 'react'
import Highlight from 'react-highlight'

interface Props {
    code: string,
    lang: string,
    example: React.ReactChildren,
    desc?: string
}

const Code: React.FunctionComponent<Props> = (props) => {
    const { code, example, lang } = props
    return (
        <div>
            <div className="happy-ui-example">
                {example}
            </div>
            <Highlight className={lang}>
                {code}
            </Highlight>
        </div>

    )
}

Code.defaultProps = {
    lang: "tsx"
}

export default Code