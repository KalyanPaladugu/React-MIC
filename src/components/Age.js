import React ,{useState,useEffect} from 'react'
import '../App.css'
export default function Age() {
     let [age,setAge]=useState(26)
     useEffect(() => {
         document.title= `Your age is  ${age}`;
     })
    return (
        <div className="App">
            <h1>Age is : {age}</h1>
            <button onClick=
            {()=> setAge(age +5) }>Change age by increment 5</button>
            <br/>
            <br />
            <button onClick=
            {()=> setAge(age - 5) }>Change age by decrement 5</button>
        </div>
    )
}
