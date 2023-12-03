import { useState } from "react";

const SimpleFrom2 = () => {

    const [name, setName] = useState('tanjim');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, seterror] = useState('')


    const onSubmitTo = (e) => {
        e.preventDefault();
        if(error < 6){
            seterror('please provide the 6 passwoed');
        }
        else{
            seterror('')
            console.log(name, email, password)
        }
    }
    const handelName = (e) => {
        setName(e.target.value)
    }
    const handelEmail = (e) => {
        setEmail(e.target.value);
    }
    const handelPassword = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <h1>Example no : 2</h1>
            <form onSubmit={onSubmitTo}>
                <input value={name} onChange={handelName} type="text" name="name" /><br /><br />
                <input onChange={handelEmail} type="email" name="email" /><br /><br />
                <input onChange={handelPassword} type="password"  name="password" id="" required /><br /><br />
                {
                    error && <p>please provide the 6 cerecter passwoed</p>
                }
                <input type="submit" value="Submit" />
            </form>
            <br /><hr />
        </div>
    );
};

export default SimpleFrom2;