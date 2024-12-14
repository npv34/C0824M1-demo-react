import {Component} from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 10,
        };
    }

    componentDidMount = () => {
        let x = setInterval(() => {
            console.log(this.state.time)
            if (this.state.time <= 0) {
                clearInterval(x);
            }else{
                this.setState({time: this.state.time - 1})
            }
        }, 1000)
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (this.state.time === 0) {
            alert("Time out")
        }
    }

    componentWillUnmount = () => {
        console.log("component Timer will unmount");
    }

    render() {
        return (
            <div>
                <h1>Timer: {this.state.time} seconds</h1>
            </div>
        )
    }
}

export default Timer;