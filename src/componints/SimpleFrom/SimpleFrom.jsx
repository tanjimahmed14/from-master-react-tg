
const SimpleFrom = () => {

    const handelClick = (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.phone.value)
        console.log('ti sbutton is click')
    }
    return (
        <div>
            <h1>Example no : 1 </h1>
            <form onSubmit={handelClick}>
                <input type="text" name="name" /><br />
                <br />
                <input type="email" name="email" id="" /><br />
                <br />
                <input type="text" name="phone" /><br /> <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <hr />
        </div>
    );
};

export default SimpleFrom;