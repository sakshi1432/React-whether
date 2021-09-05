import React,{useState,useEffect} from 'react'
import "./Style.css";
import {  FiX } from 'react-icons/fi'
 
function Ny() {

    const data = [
        {imageSr : "https://media1.giphy.com/media/3ohuPfjYLAOx60KiQg/giphy.gif"},
        {imageSr : "https://i.pinimg.com/originals/ae/3d/e0/ae3de08e3a20510a2bdc40b12b13c286.gif"},
         {imageSr : "https://64.media.tumblr.com/4f462ee147c52783b7ebf39f148188d6/tumblr_mjdf1rsjTY1rih10jo1_500.gifv"},
         {imageSr : "https://thumbs.gfycat.com/ImmenseShimmeringChimneyswift-size_restricted.gif"},
         {imageSr : "https://media3.giphy.com/media/FiZU8iTIRexPBuPfgQ/giphy.gif"},
         {imageSr : "https://static.wixstatic.com/media/ddf0df_0caad172cdce45f19c9c45306f4e0b8d~mv2.gif"},
        {imageSr : "https://c.tenor.com/Emingua8vd4AAAAC/playground-playing.gif"},
        {imageSr :"https://media1.giphy.com/media/fGI4pHRtw9Ig1n4gmn/giphy.gif"},
        {imageSr :"https://c.tenor.com/2ICIb2MbQxMAAAAd/youve-got-something-on-your-face-bob-the-minion.gif"},
        {imageSr :"https://64.media.tumblr.com/c41035ddb2eb612e53649324fdc1a75d/413a65c8cfce3d3f-b0/s540x810/e0335ae627eb1b9ebac0a2b913cf10e5649cf7af.gifv"},
        {imageSr :"https://acegif.com/wp-content/gifs/hamster-63.gif"},
        {imageSr :"https://media.giphy.com/media/n25gao1zAaLio/giphy.gif"},
        {imageSr :"https://static.wixstatic.com/media/227b96_e92735098e074aafb6eca36be3b112d6~mv2.gif"},
        {imageSr : "https://images.news18.com/ibnlive/uploads/2016/04/holi3.gif?impolicy=website&width=0&height=0"}
    ];
   
    const [city,setCity] = useState("Mumbai");
    const [te,setTe] = useState(null);
    
useEffect(() => {
         const  fetchApi = async () =>{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=081cd00848d70ac82d86270a169f8db6`;
                const response = await fetch(url);
                const resjson = await response.json();
                // console.log(resjson);

                setTe(resjson.main);
                console.log(te);
         }

         fetchApi();
     }, [city]);
     
    useEffect( () =>{
        setTimeout(() =>{
            if(m < data.length-1)
            {
                setM(m+1);
                
            }
            if(m === data.length-1)
            {
                setM(data.length-1 - m);
                
            }
            
                
         },5000)
       

});

  

    let [m,setM] =useState(0);
    return (
        <div >
            
         <div class="main">
  <div className = "two"><img src = {data[m].imageSr}  />
  <div class="text-block">
  <div className = "type-city" >
       <input type="text" value = {city} class="rounded" 
          onChange = {(e) => setCity(e.target.value)} />
             <button><FiX onClick = {() => setCity(" ")}/></button>
           </div>  
             {!te ? (
            <div className = "co">
               <h2>No data</h2> 
               <h3><i class="fas fa-undo-alt"></i>No data to show you</h3>
                
             </div>
             ):
             (
             <div className = "info">
                <h3 className = "location">
                  <span className = "k"><i class="fas fa-street-view "></i> </span> {city}
                </h3>
             <div>
            <h3 className = "tem">{te.temp}&deg;cel</h3>
             <span className= "te">humidity {te.humidity}</span><br></br>
             <span className ="tempmin_max">Min:{te.temp_min}&deg;Cel | Max: {te.temp_max}&deg;Cel </span>
         </div>
 
            </div>)
            }
    
  </div>
  </div>
   
</div>
        </div>
    )
}

export default Ny

