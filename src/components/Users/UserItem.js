function UserItem({item, actionDelete}) {


    const deleteUser = (id) => {
        actionDelete(id);
    }

    return (
        <>
            <tr>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.username}</td>
                <td>{item.active === true ? "Active" : "Disable"}</td>
                <td>
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
            </tr>
        </>
    )
}

export default UserItem;