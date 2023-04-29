import React from 'react';
import { useFormik } from 'formik';

const validate = (values) =>{
    const errors = {};
    if(!values.uName){
        errors.uName = "Required"
    } else if(values.uName.length<4){
        errors.uName = "Abby! 4 chracter to Dal..."
    } else if(values.uName.length>8){
        errors.uName = "Abby! 8 se jada Mat de..."
    }
    if(values.email){
        errors.email="Required"
    } else if(!/^[A-Z0-9._%+-]@[A-Z0-9.-]{2,4}$/i.test(values.email)){ //RegExp(/[]/)
        errors.email = "Sahi Se Email Likh..."
    }
    return errors;
}

const FormikFormValidate = () => {
    const formik = useFormik({
        initialValues:{
            uName:'',
            email:'',
        },
        validate,
        onSubmit:(values) => {
            console.log(values)
            document.getElementById('f1').value = values.uName
            document.getElementById('f2').value = values.email
        }
    })
    return (
        // <React.Fragment></React.Fragment>    // Here, don't need import anything
        // <Fragment></Fragment>    //We ned to import: import React, {Fragment} from "react"; 

        <>
            <h1>Formik Validatation</h1>
            <form onSubmit={formik.handleSubmit}>
                <table>
                    <tr>
                        <td>UserName:-</td>
                        <td>
                            <input type='text' name='uName' onChange={formik.handleChange} value={formik.values.uName}/>
                            {formik.errors.uName?<em>{formik.errors.uName}</em>:null}
                        </td>
                    </tr>
                    <tr>
                        <td>Email:-</td>
                        <td>
                            <input type='text' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                            {formik.errors.email ? <em>{formik.errors.email}</em>:null}
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <button type="submit">Submit</button>
                        </th>
                    </tr>
                </table>
                <table border={2} height='150' width='200'>
                    <tr>
                        <td>UserName:-</td>
                        <td>
                            <input type='text' readOnly id="f1"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Email:-</td>
                        <td>
                            <input type='text' readOnly id="f2"/>
                        </td>
                    </tr>
                </table>
            </form>
        </>
        
    )
}

export default FormikFormValidate;