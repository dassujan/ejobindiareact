import React from 'react'
import { useFormik } from 'formik';


const FormikFormHandle = () => {
    // const [name, setName] = useState('');
    // const [Add, setAdd] = useState('');
    // const [email, setemail] = useState('');
    // const [pass, setpass] = useState('');
    const formik = useFormik({
        initialValues:{
            name:'',
            add:'',
            email:'',
            pass:'',
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <legend>React Form</legend>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" onChange={formik.handleChange} placeholder="Enter Name" 
                                // value={formik.values.name} 
                                name='name'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" onChange={formik.handleChange} placeholder="Enter Address" 
                                name='add'
                                // value={formik.values.add}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                            <input type="email" onChange={formik.handleChange} placeholder="Enter Email" 
                            name='email'
                            // value={formik.values.email}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>Create Password</td>
                            <td> <input type="password" onChange={formik.handleChange} placeholder="Enter Password" 
                            name='pass'
                            // value={formik.values.pass}
                            /> </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </div>
    )
}

export default FormikFormHandle;