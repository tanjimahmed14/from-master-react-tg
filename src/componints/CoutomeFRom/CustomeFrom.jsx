import customeHook from "../CustomeHook/CustomeHook";


const CustomeFrom = () => {

    // const [name, handelname] = customeHook('Tanu')

    const emailFil = customeHook('tanh@g.c')

    const handelClick = (e) => {
        console.log('gfsdgfgsuifina', emailFil.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handelClick}>
                {/* <input value={name} onChange={handelname} type="text" name="name" /><br /> */}
                <br />
                <input {...emailFil} type="email" name="email" id="" /><br />
                <br />
                <input type="text" name="phone" /><br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomeFrom;