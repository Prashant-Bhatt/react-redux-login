import {useSelector,useDispatch} from 'react-redux';
import {counterActions} from '../store/counterSlice';

const Counter = () => {
    const counterState = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const incrementHandler = (name) => {
        console.log(name);
        dispatch(counterActions.increment({name:name}))
    }  
    const decrementHandler = (user) => {
        dispatch(counterActions.decrement(user)) //passing object and multiple data
    }    

    const user = {
        name:"kanchan",
        age:29
    }

    return (
        <div className="row">
            <div className="row">
            <div className="col-12">Hello {counterState.counter} {counterState.myname}</div>
            </div>
            <div className="row">
            <div className="col-6"><button onClick={()=>incrementHandler("prashant")} className="btn btn-primary">Increment</button></div>
            <div className="col-6"><button onClick={()=>decrementHandler(user)} className="btn btn-primary">Decrement</button></div>
            </div>
        </div>
    )
}

export default Counter;