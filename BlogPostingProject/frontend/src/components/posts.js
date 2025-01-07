import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate , Link} from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err))
    },[])



  return (
    <>
    {posts.map(post => (
        <div key={post.id} className="card">
           <div className="flex flex-col shadow-lg shadow-gray-400 dark:shadow-gray-800/60">
        <img className="sm:w-[20rem] w-[16rem] object-cover rounded-t-lg"
            src="https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjBsb2dvfGVufDB8MHx8fDE3MzYxNTM3NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Card Image" />

        <div className="flex flex-col font-semibold rounded-b-lg dark:text-white bg-white dark:bg-gray-800">
            <li className="w-full flex items-center gap-2 pl-4 py-2  dark:border-gray-700">
                
                <h1> {post.title}</h1>
            </li>
            <div className="w-full flex items-center gap-2 pl-4 py-2  text-gray-500">
            
                <p> {post.description}</p>
            </div>
            <div className="w-full flex items-center gap-2 pl-4   text-gray-400">
            
                <p>date</p>
            </div>
            <div className="w-full flex items-center gap-2 pl-4  text-gray-300">
        
                <p>username</p>
            </div>
            
            <div className="w-full flex items-center justify-center pl-4 py-2">
            <Link to={`post/${post.id}`} className="flex gap-2 items-center justify-center px-4 py-1 rounded text-white font-semibold bg-blue-500 transition ease-in-out delay-150 hover:bg-blue-600">
             read more
            </Link>
            </div>
        </div>
    </div>
        </div>
    ))}
    </>
  )
}

export default Posts;