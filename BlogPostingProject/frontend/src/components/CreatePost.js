import React, { useState } from 'react'
import Navbar from './navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {


    const navigate= useNavigate()

    


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [message, setMessage]= useState("")

  

    const handleSubmit = () => {
        const payload = {
            title: title,
            description: description,
            content: content
        }

        const token = JSON.parse(localStorage.getItem('token'));
            const header = {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }

        // Handle form submission logic here
        axios.post('http://localhost:8080/api/post', payload, header)
            .then(response => {
                console.log('post create successful:', response.data)
                // You can redirect the user or show a success message here
                setMessage(response.data);
                navigate("/")
                
            })
            .catch(error => {
                console.error('There was an error in post!', error)
                
                navigate("/login")
                setMessage('There was an error creating the post. Please try again.')

                // You can show an error message to the user here
            });
            
    }
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Create Post</h2>
                {message && <div className='text- bg-green-500'>  {message}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            id='title'
                            value={title}
                           
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <input
                            type="text"
                            name='description'
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <textarea
                            name='content'
                            id='content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
        </>

    )
}

export default CreatePost