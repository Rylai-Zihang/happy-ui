import * as React from "react"
import * as ReactDOM from "react-dom"
import * as PropTypes from "prop-types"

interface Props {
    firstName: string,
    lastName: string
}

interface State{
    n: number
}

class App extends React.Component<Props, State> {
    // 默认值
    static defaultProps = {
        message: "default message"
    }
    static propTypes = {
        message: PropTypes.string
    }
    static displayName = "ReactUI"
    // object getter & setter
    get name() {
        return this.props.firstName + this.props.lastName
    }
    constructor(props) {
        super(props)
        this.state = {
            n: 1
        }
    }
    click() {
        console.log('click')
        this.setState({
            n: 2
        })
    }
    // 不使用 bind 则：
    // click = () => {
    //     this.setState({
    //         n: this.state.n + 1
    //     })
    // }
    // 问题在于语法糖，不是声明在原型上的，而是在实例上的
    render() {
        return (
            <div>
                {/*<div>{this.props.message}</div>*/}
                {/*<div>{this.state.n}</div>*/}
                {/*<button onClick={this.click.bind(this)}> +1 </button>*/}
                {this.name}
            </div>

        )
    }
}

const rootElement = document.getElementsByTagName("body")[0]
ReactDOM.render(<App firstName="zh" lastName="he"></App>, rootElement)

// export default App
