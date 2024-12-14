import {Component} from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        };
    }

    componentDidMount = () => {
        this.setState({tasks: [
            {name: 'Task 1', description: 'Description 1'},
            {name: 'Task 2', description: 'Description 2'},
            {name: 'Task 3', description: 'Description 3'},
        ]});
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log("Component Task Did Update")
        console.log("Component Task rendered");
    }

    handleDeleteTask = (index) => {
        console.log("Delete Task", index)
        this.state.tasks.splice(index, 1);
        const newTask = this.state.tasks;
        this.setState({ tasks: [...newTask] });
    }

    render() {
        return (
            <>
                <h1>Tasks</h1>
                {this.state.tasks.map((task, index) => (
                    <div key={index}>
                        <h2>{task.name}</h2>
                        <p>{task.description}</p>
                        <button onClick={() => this.handleDeleteTask(index)}>Delete</button>
                    </div>
                ))}
            </>
        )
    }
}

export default Task;