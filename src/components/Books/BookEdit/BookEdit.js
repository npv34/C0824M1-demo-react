import {useParams} from "react-router";

function BookEdit() {
    const {id} = useParams();

    return (
        <>
            <h1>Book edit: {id}</h1>
        </>
    )
}

export default BookEdit;