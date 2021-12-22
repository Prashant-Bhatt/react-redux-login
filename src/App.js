import './App.css';
import Login from './components/loginMsg';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Footer from './components/footer';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Sidebar></Sidebar>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
