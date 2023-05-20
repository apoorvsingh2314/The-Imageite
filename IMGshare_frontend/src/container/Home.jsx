import {React,useState,useEffect} from 'react';


import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import {client} from '../client';
import Pins from './Pins';
import { userQuery } from '../utils/data';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();

  const userInfo = localStorage.getItem('user') !== 'undefined' ?  JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) =>{
      setUser(data[0]);
    });
  }, []);
  

  return (
    <div className='flex bg-slate-600 md:flex-row flex-col h-screen ease-out duration-75'>
      <div className='hidden md:flex flex-initial'>
      <Sidebar/>
      </div>
      <div className='flex md:hidden flex-row'>

      </div>
      <UserProfile/>
      <Pins/>
      Home
    </div>
  );
}

export default Home