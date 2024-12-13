import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTop from "./components/HeaderTop";
import UserList from "./components/Users/UserList";

function App() {
  return (
      <>
          <HeaderTop/>
          <UserList/>
      </>
  );
}

export default App;
