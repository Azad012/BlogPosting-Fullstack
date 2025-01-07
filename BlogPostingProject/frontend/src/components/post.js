import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import Navbar from './navbar';

const Post = () => {
    const [post, setPost] = useState([]);
    const navigate = useNavigate()

    const {id} =useParams();

    

    useEffect(() => {

      const token = JSON.parse(localStorage.getItem('token'));
            const header = {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
        axios.get('http://localhost:8080/api/post/' +id ,header)
        .then(res => {
          
          setPost(res.data)
        })
        .catch(err =>{
          console.log(err)
          navigate("/login")
        } )
    },[])



  return (
    <>
    <Navbar></Navbar>
    
        <div className="w-full md:h-screen h-full flex gap-6 flex-wrap  justify-center py-10 px-4 bg-white dark:bg-black">
            <div className="bg-slate-300 p-20">
                <h5 className=" font-bold text-3xl ">{post.title}</h5>
                <p className="">{post.description}</p>
                <p className="">{post.content}</p>
                
            </div>
        </div>
    
    </>
  )
}

export default Post;