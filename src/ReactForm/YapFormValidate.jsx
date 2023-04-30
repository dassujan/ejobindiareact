import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const YapFormValidate = () => {
    const formik = useFormik({
        initialValues:{
            uName:'',
            email:'',
            pass:'',
            cPass:'',
        },
        validationSchema:Yup.object({
            uName: Yup.string()
                .required('Required')
                .min(4,'Atleast 4 Character Required')
                .max(8,'Max 8 Chracter Required'),
            email: Yup.string()
                .email('Invalid Email')
                .required('Required'),
            pass: Yup.string()
                .required("Required")
                .min(6, 'Minimum 6 chracter length Required')
                .matches(/[A-Z]/, 'Atleast One UpperCase')
                .matches(/[a-z]/, 'Atleast One LowerCase')
                .matches(/[0-9]/, 'Atleast One Number')
                .matches(/[^\w]/, 'Atleast One Special Character'),
            cPass: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('pass'),null],'Password Not Matched')
        }),
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <table>
                <tr>
                    <td>
                        UserName:-
                    </td>
                    <td>
                        <input type='text' name='uName' onChange={formik.handleChange} value={formik.values.uName}/>
                        {formik.touched.uName && formik.errors.uName?<em>{formik.errors.uName}</em>:null}
                    </td>
                </tr>
                <tr>
                    <td>
                        Email:-
                    </td>
                    <td>
                        <input type='text' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                        {formik.errors.email?<em>{formik.errors.email}</em>:null}
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:-
                    </td>
                    <td>
                        <input type='text' name='pass' onChange={formik.handleChange} value={formik.values.pass}/>
                        {formik.errors.pass?<em>{formik.errors.pass}</em>:null}
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm Password:-
                    </td>
                    <td>
                        <input type='text' name='cPass' onChange={formik.handleChange} value={formik.values.cPass}/>
                        {formik.errors.cPass?<em>{formik.errors.cPass}</em>:null}
                    </td>
                </tr>
                <tr>
                    <th colSpan={2}>
                        <button type="submit">Submit</button>
                    </th>
                </tr>
            </table>
        </form>
        </>
    )
}

export default YapFormValidate