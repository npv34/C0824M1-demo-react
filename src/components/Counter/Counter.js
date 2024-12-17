import {Component} from "react";

class Counter extends Component {

    // Mounting
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleIncrementCounter = () => {
        this.setState({counter: this.state.counter + 1})
    }

    componentDidMount = () => {
        console.log("Component Counter Did Mount")
    }

    componentDidUpdate = () => {
        console.log("Component Counter Did Update")
    }

    componentWillUnmount = () => {
        console.log("Component Counter Will Unmount")
    }

    render() {
        return (
            <>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.handleIncrementCounter}>+</button>
            </>
        )
    }
}

/* mounting:
    constructor(): khoi tao state, props -> render() -> componentDidMount -> ket thuc mounting
    Khi state, props thay doi -> chuyen qua updating: render() -> componentDidUpdate
    Khi khong su dung component -> unmounting: componentWillUnmount -> Xoa khoi DOM -> khong nhin thay component
*/

export default Counter;