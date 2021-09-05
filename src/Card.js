 import React,{useState, useEffect} from "react";
import {  FiX } from 'react-icons/fi'
 import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

 const Card = () => {
     const [city,setCity] = useState("Mumbai");
    const [te,setTe] = useState(null);
    
useEffect(() => {
         const  fetchApi = async () =>{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=081cd00848d70ac82d86270a169f8db6`;
                const response = await fetch(url);
                const resjson = await response.json();
                // console.log(resjson);

                setTe(resjson.main);
                console.log(te);
         }

         fetchApi();
     }, [city]);

     return (
 <div>
    <div className ="main">
        <div  className="two" >
          <div className = "type-city" >
               <input type="text" value = {city} class="rounded" 
               onChange = {(e) => setCity(e.target.value)} />
               <button><FiX onClick = {() => setCity(" ")}/></button>
           </div>  
             {!te ? (<h2>No data</h2>):
             (
             <div className = "info">
                <h2 className = "location">
                  <span className = "k"><i class="fas fa-street-view "></i> </span> {city}
                </h2>
             <div>
            <h3>{te.temp} cel</h3>
             <span>humidity {te.humidity}</span><br></br>
             <span className ="tempmin_max">Min:{te.temp_min} Cel | Max: {te.temp_max} Cel </span>
         </div>
 
            </div>)
            }
        </div>
     </div>
  </div>
    )
}
export default Card;