import { useState } from "react"

const customeHook = (defaultValue = null) =>{
    const [value, setValue] = useState(defaultValue);

    // const handelchange = e => {
    //     setValue(e.target.value)
    // }
    const onChange = e => {
        setValue(e.target.value)
    }
    return {value, onChange};
}

export default customeHook;