import {Card, Col, Row, Table} from "react-bootstrap";
import {useState} from "react";
import UserItem from "./UserItem";
import UserAdd from "./UserAdd";
import Container from "react-bootstrap/Container";

const data = [
    {id: 1, firstName: "John", lastName: "Doe", username: "@johndoe", active: true},
    {id: 2, firstName: "Jane", lastName: "Smith", username: "@janesmith", active: true},
    {id: 3, firstName: "Bob", lastName: "Johnson", username: "@bobjohnson", active: false},
    {id: 4, firstName: "Alice", lastName: "Williams", username: "@alicewilliams", active: false},
    {id: 5, firstName: "David", lastName: "Brown", username: "@davidbrown", active: false},
    {id: 6, firstName: "Sarah", lastName: "Davis", username: "@sarahdavis", active: true},
]

function UserList() {

    const [title, setTitle] = useState("User list 1")
    const [users, setUsers] = useState(data)

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this user")) {
            const newData = data.filter(user => user.id !== id);
            setUsers(newData);
        }
    }

    const editHandler = (id) => {
        alert("Edit")
    }

    const changeTitleHandler = (event) => {
        const text = event.target.value;
        setTitle(text);
    }

    const addUserHandler = (newUser) => {
        const newID = users[users.length - 1].id + 1;
        newUser.id = newID;
        const newUsers = [...users, newUser];
        setUsers(newUsers);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={4}>
                        <UserAdd actionAddUser={addUserHandler}/>
                    </Col>
                    <Col xs={8}>
                        <Card>
                            <Card.Header>{title}</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {users.map((user, index) => (
                                        <>
                                            <UserItem item={user} actionDelete={deleteHandler}/>
                                        </>
                                    ))}

                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default UserList;