import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc';
import jwt_decode from "jwt-decode";



import { GiPhotoCamera } from "react-icons/gi";
import login_video from '../assets/Videos/login_video2.mp4'
import { GoogleLogin } from '@react-oauth/google';
import { client } from '../client';



// import { FcOldTimeCamera } from "react-icons/fc";
// import {TfiCamera} from 'react-icons/tfi'
// import { AiOutlineCamera } from "react-icons/ai";

const Login = () => {
  
  const [user, setUser ] = useState(true);

  const navigate = useNavigate();
  const responseGoogle = (response) => {
    const userResponse = jwt_decode(response.credential);

    localStorage.setItem("user", JSON.stringify(userResponse));
    const { name, sub, picture } = userResponse;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={login_video}
          type="video/mp4"
          loop
          controls={false}
          autoPlay
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/60">
          <h1 className="mb-3 flex flex-row text-white font-serif text-3xl font-bold  border rounded p-4 text-white/75">
            <span className=''>T H E</span>
            <GiPhotoCamera className="mx-5 -mt-3" size={50} fill="grey" />
            <span>I M A G E I T E</span>
          </h1>

          { user ? 
           (
              <button onClick={()=>setUser(!user)} className="bg-black/50 p-2 rounded-lg flex flex-row text-white/70  border-slate-800 border hover:bg-black/80 hover:text-white ">
            <FcGoogle size={25} className="mr-2" />
            Sign in with google
          </button>)
          :
          (<GoogleLogin 
              onSuccess={responseGoogle}
              onError={()=>console.log("error")}
              theme='filled_black'
              />)
          }

        </div>
      </div>
    </div>
  ); 
}

export default Login