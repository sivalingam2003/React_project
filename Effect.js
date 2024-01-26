import React from 'react'
import {useState , useEffect} from "react"
export default function Effect() {
    const [data, setData]=useState(null)
    useEffect(() =>{

    })
  return (
    <div>
        {data ?(
            <p>Data:</p>       
            ):(
                <p>Loading....</p>
            )}
    </div>
  )
}
