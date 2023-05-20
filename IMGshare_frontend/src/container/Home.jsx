import {React,useState,useEffect} from 'react';
import { color, motion } from "framer-motion";

import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import {client} from '../client';
import Pins from './Pins';
import { userQuery } from '../utils/data';
import {RxCross2} from 'react-icons/rx'
import { GiPhotoCamera } from 'react-icons/gi';


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
    <div className='bg-slate-900'>
      <div >
        <motion.img
          initial={{ x: "-1000px" }}
          animate={{ x: "0px" }}
          transition={{ type: "spring", stiffness: 50, duration: 3 }}
          className="w-full h-80 object-cover relative "
          src="https://images.pexels.com/photos/7194619/pexels-photo-7194619.jpeg"
          alt=""
        />
        <h1 className="text-3xl font-extrabold font-mono text-white absolute top-60 left-1/4">
          Live, Share and Enjoy the Beautiful Moments
        </h1>
      </div>

      <motion.div
        className="bg-black"
        initial={{ y: "-100px" }}
        animate={{ y: "0px" }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="absolute flex right-0 left-0 bottom-60 justify-center bg-black/60">
          <div className=" absolute top-[82px] h-max left-0 w-72 bg-black/50">
            <Sidebar />
          </div>
          <h1 className="mb-3 flex flex-row text-white font-serif text-3xl font-bold p-4 text-white/75 cursor-pointer w-fit">
            <span className="">T H E</span>
            <motion.button whileHover={{ scale: 1.1 }}>
              <GiPhotoCamera className="mx-5 -mt-3" size={50} fill="grey" />
            </motion.button>
            <motion.span>I M A G E I T E</motion.span>
          </h1>
        </div>
      </motion.div>
      <motion.div
        className=""
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: "-300px", opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <RxCross2 />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Home