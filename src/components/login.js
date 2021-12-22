import { React,useEffect,useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Footer from "./footer";
import Header from "./header";
import {setUserSession} from "../utils/common";
import {useSelector,useDispatch} from 'react-redux';
import {login} from '../store/authenticate';


function Login(){

    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate();
    const loginState = useSelector(state=>state.auth)
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(login({username:username,password:password}))
    }

    useEffect(()=>{
        if(loginState.isLoggedIn){
            navigate("/dashboard");
        }
    })

    return (
        <div class="container">     
            <div class="row justify-content-center align-items-center">
            <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3 my-auto">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  
                        value={username} onChange={(e)=>(setUserName(e.target.value))} />
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                        value={password} onChange={(e)=>(setPassword(e.target.value))}
                        />
                        <label for="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" onClick={handleSubmit} type="submit">Sign in</button>
                    </form>
                    </div></div>
            
            <Footer></Footer>
        </div>
    );
}

export default Login