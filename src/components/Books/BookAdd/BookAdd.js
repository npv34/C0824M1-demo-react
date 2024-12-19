import {useFormik} from "formik";
import * as Yup from 'yup';


const validateFormAdd = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    pages: Yup.number().required("Pages is required").positive().integer(),
    star: Yup.number().required("Star is required").positive().integer(),
    public: Yup.bool(),
})

function BookAdd() {

    const formAddBook = useFormik({
        initialValues: {
            title: "",
            author: "",
            pages: "",
            star: "",
            public: false,
        },
        validationSchema: validateFormAdd,
        onSubmit: values => {
            console.log(values);

            // code logic

            // Reset form
            formAddBook.resetForm();
        }
    })


    return (
        <>
            <h1>Form add book</h1>
            <form onSubmit={formAddBook.handleSubmit}>
                Title: <input onChange={formAddBook.handleChange} value={formAddBook.values.title} type="text" name="title"/>
                {formAddBook.errors.title && <span>{formAddBook.errors.title}</span>}
                <br/>
                Author: <input onChange={formAddBook.handleChange} value={formAddBook.values.author} type="text" name="author"/>
                {formAddBook.errors.author && <span>{formAddBook.errors.author}</span>}
                <br/>
                Pages: <input onChange={formAddBook.handleChange} value={formAddBook.values.pages} type="number" name="pages"/>
                <br/>
                Star: <input onChange={formAddBook.handleChange} value={formAddBook.values.star} type="number" name="star"/>
                <br/>
                Public: <input onChange={formAddBook.handleChange} type="checkbox" name="public"/>
                <button type="submit">Add book</button>
            </form>
        </>
    )
}

export default BookAdd;