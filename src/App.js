import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTop from "./components/HeaderTop";
import UserList from "./components/Users/UserList";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import {useState} from "react";
import Task from "./components/Task/Task";

function App() {
  const [show, setShow] = useState(true)

    const showComponentTimer = () => {
      setShow(false);
    }

    const showComponentCounter = () => {
      setShow(true);
    }
  return (
      <>
          <button onClick={showComponentTimer}>Show Component Timer</button>
          <button onClick={showComponentCounter}>Show Component Counter</button>
          {/*<HeaderTop/>*/}
          {/*<UserList/>*/}
          { show ?  <Counter/> : <Timer/>}
          {/*<Task/>*/}
      </>
  );
}

export default App;
