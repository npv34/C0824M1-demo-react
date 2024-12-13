import {useState} from "react";

function UserAdd({actionAddUser}) {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        active: true
    });

    const getFirstName = (e) => {
        const firstName = e.target.value;
        setData({...data, firstName: firstName})
    }

    const getLastName = (e) => {
        const lastName = e.target.value;
        setData({...data, lastName: lastName})
    }

    const getUsername = (e) => {
        const username = e.target.value;
        setData({...data, username: username})
    }

    const getActive = (e) => {
        const active = e.target.value;
        setData({...data, active: active === "1"})
    }

    const handleSubmit = (e) => {
        // chan submit len server cua form
        e.preventDefault();
        actionAddUser(data);
        setData({
            firstName: "",
            lastName: "",
            username: "",
            active: true,
        })
    }

    return (
        <form>
            <input type="text" value={data.firstName} onChange={(event) => getFirstName(event)} name="firstName" placeholder="First name"/>
            <input type="text" value={data.lastName}  onChange={(event) => getLastName(event)} name="lastName" placeholder="Last name"/>
            <input type="text" value={data.username} onChange={(event) => getUsername(event)} name="username" placeholder="Username"/>
            <select name="active" onChange={(event) => getActive(event)}>
                <option value="1">Active</option>
                <option value="0">Disable</option>
            </select>
            <button onClick={(event) => handleSubmit(event)} type="submit">Add User</button>
        </form>
    );
}

export default UserAdd;