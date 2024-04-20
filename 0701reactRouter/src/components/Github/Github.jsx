import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(){
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/justabhiabhi')
    //   .then(response => response.json())
    //   .then(data =>{ 
        //     console.log(data) 
        //     setData(data)
        // })
        // }, [])
        const data=useLoaderData();
        console.log('Data:', data);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Github Profile" />
    </div>
  );
}

export default Github

export const githubInfoLoader = async() => {
    const response= await fetch('https://api.github.com/users/justabhiabhi')
    return response.json()
    }