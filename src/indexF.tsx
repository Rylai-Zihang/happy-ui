import * as React from "react"
import * as ReactDOM from "react-dom"
// import * as PropTypes from "prop-types"
import {useEffect, useState} from "react"

interface Props {
    message?: string
}

const App: React.FunctionComponent<Props> = (props) => {
    const [n, setN] = useState(1)
    const [m, setM] = useState(1)
    const addN = () => {
        setN(n + 1)
    }
    const addM = () => {
        setM(m + 1)
    }

    useEffect(() => {
        console.log("mounted or updated")
        return () => {
            console.log("我死了")
        }
    }, [])

    props.message!.split(" ")
    return (
        <div>
            <span>{props.message}</span>
            <div>{n}</div>
            <button onClick={ addN }> n加一 </button>

            <div>{m}</div>
            <button onClick={ addM }> m加一 </button>
        </div>
    )
}

App.defaultProps = {
    message: "default message"
}

const rootElement = document.getElementsByTagName("body")[0]
ReactDOM.render(<App></App>, rootElement)

// export default App
