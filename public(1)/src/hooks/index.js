import {useState} from "react"
import history from "history/browser"; 
export const History = () => {
    return history;
}
export const useToggle = (intialState = false) => {
    const [toggle,setToggle] = useState(intialState);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return [
        toggle, handleToggle
    ]
}