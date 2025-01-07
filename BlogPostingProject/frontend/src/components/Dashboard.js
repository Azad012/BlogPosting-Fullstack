import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleSubmit = ()=> {
    localStorage.removeItem("token");
    
    navigate("/");
  }


  return (
    <>
      <div>Dashboard</div>

      <button
        onClick={handleSubmit}

        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
        Logout
      </button>
    </>

  )
}

export default Dashboard