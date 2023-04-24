import React, {useState} from "react";

const ReactFromCheck = () => {
    const [dob, setDob] = useState();
    const [gen, setGen] = useState('');
    const [lang, setLang] = useState([]);
    const [course, setCourse] = useState('');

    const handleGenChange = (e)=>{
        setGen(e.target.value);
    }
    const handleCheckBoxChange = (e) => {
        const value = e.target.value;
        const check = e.target.checked;
        check?setLang([...lang,value]):setLang(lang.filter((e)=>e!==value));
        // if(check){
        //     setLang([...lang, value])
        // }else{
        //     setLang(lang.filter((e)=>e!=value))
        // }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('f1').innerHTML = dob
        document.getElementById('f2').innerHTML = gen
        document.getElementById('f3').innerHTML = lang
        document.getElementById('f4').innerHTML = course;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                DOB:-
                <input type="date" onChange={(e)=>setDob(e.target.value)}/>
                <br/>
                Gender:-
                <input type="radio" name='gen' value='Male' onChange={handleGenChange}/>Male
                <input type="radio" name='gen' value='Female' onChange={handleGenChange}/>Female
                <input type="radio" name='gen' value='Others' onChange={handleGenChange}/>Others
                <br/>
                Language:-
                <input type='checkbox' value='English' onChange={handleCheckBoxChange}/>English
                <input type='checkbox' value='Hindi' onChange={handleCheckBoxChange}/>Hindi
                <input type='checkbox' value='Bengali' onChange={handleCheckBoxChange}/>Bengali 
                <br/>
                Course:-
                <select onChange={(e)=>setCourse(e.target.value)}>
                    <option>Select</option>
                    <option value='BCA'>BCA</option>
                    <option value='BTECH'>BTECH</option>
                    <option value='MCA'>MCA</option>
                    <option value='MTECH'>MTECH</option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <fieldset>
                <legend>Output</legend>
                DOB:- <em id="f1"></em><br/>
                Gen:- <em id="f2"></em><br/>
                Lang:- <em id="f3"></em><br/>
                Course:- <em id="f4"></em><br/>
            </fieldset>
        </div>
    )
}

export default ReactFromCheck;