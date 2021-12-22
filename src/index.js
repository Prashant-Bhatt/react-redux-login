
import {React,useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import {Provider} from 'react-redux';
import Login from './components/login';
import ProtectedRoute from './components/protectedRoutes';
import {LoginData, LoginMsg1,LoginMsg2} from './components/loginMsg';
import Store from './store/store';
import App from './App';
import './index.css';


ReactDOM.render(
  <Provider store={Store}> 
  <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Navigate replace to="/" />} />      
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<App />}>
              <Route path="login1" element={<LoginMsg1 />} />
              <Route path="login2" element={<LoginMsg2 />} >
                <Route path=":loginId" element={<LoginData />} />
              </Route>
          </Route>
        </Route>
    </Routes>
</Router>
</Provider>,
  document.getElementById('root')
);


