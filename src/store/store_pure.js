import {createStore} from 'redux';

const myReducer = (state = {counter:0,myname:"Prashant"},action) => {
    if(action.type=="increment"){
        return {
            myname:action.name,
            counter:state.counter+1
        }
    };
    if(action.type=="decrement"){
        return {
            myname:action.user.name,
            age:action.user.age,
            counter:state.counter-1,
            pp:action.pp
        }
    };

    return state;

}

const Store = createStore(myReducer);

export default Store;