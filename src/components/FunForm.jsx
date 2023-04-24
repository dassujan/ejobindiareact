import React, {useState} from "react";

const FunForm = () => {
    const [name, setName] = useState('')
    const [add, setAdd] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleAddChange = (e) => {
        setAdd(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, add, email, pass);
        document.getElementById('f1').value = name;
        document.getElementById('f2').value = add;
        document.getElementById('f3').value = email;
        document.getElementById('f4').value = pass;
    }
    return(
        <div>
            <h1>React Functional Forms</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>React Form</legend>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" onChange={handleNameChange} placeholder="Enter Name" value={name} name='name'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" onChange={handleAddChange} placeholder="Enter Address" value={add}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                            <input type="email" onChange={handleEmailChange} placeholder="Enter Email" value={email}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Create Password</td>
                            <td> <input type="password" onChange={handlePassChange} placeholder="Enter Password" value={pass}/> </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </table>
                </fieldset>
            </form>
            <h3>React Output</h3>
            <table>
                <tr>
                    <td>Name</td>
                    <td>
                        <input type="text" readOnly id="f1"/>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <input type="text" readOnly id="f2"/>
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input type="text" readOnly id="f3"/>
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type="text" readOnly id="f4"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default FunForm