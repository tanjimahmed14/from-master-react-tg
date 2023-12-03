import { useEffect, useRef } from "react";


const RefFrom = () => {
    const nameRaf = useRef('')
    const emailRef = useRef('')
    const passwoedRef = useRef('')

    useEffect(() => {
        nameRaf.current.focus(); /* auto focus hobe */
    } ,[])

    const handelClicktheree = (event) => {
        event.preventDefault();
        console.log(nameRaf.current.value);
        console.log(emailRef.current.value);
        console.log(passwoedRef.current.value);
        

    }
    return (
        <div>
            <form onSubmit={handelClicktheree}>
                <input ref={nameRaf} type="text" name="name" /><br />
                <br />
                <input ref={emailRef} defaultValue={'tanu@tanus.com'} type="email" name="email" id="" /><br />
                <br />
                <input ref={passwoedRef} type="password" name="password" /><br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;