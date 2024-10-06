import React, { useState } from 'react'
const Weather = () => {
    let [search,setSearch]=useState("");
    let [data,setData]=useState({});
    let [error,setError]=useState("");
    let api={
        key: "3199ac3691e31f45707e8107e05930b4",
        url: "https://api.openweathermap.org/data/2.5/weather",
    };
    function weathersearching(){
        fetch(`${api.url}?q=${search}&appid=${api.key}&units=metric`).then(x=>x.json())
        .then(x=>{
            // console.log(x);
            setError(x.message);
            setData(x);
        })
        .catch(e=>console.log("Api failed",e))
    }
    let eventing=(e)=>{
        if(e.key==="Enter"){
            weathersearching();
            setError("...Loading");
        }
    }
    // console.log(setData);
    
  return (
    <div>
        <section>
        <input onKeyPress={eventing} type="text" onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={weathersearching}>Search</button>
        </section>
        {/* <h1>{data.name}</h1> */}
        {/* {api.url.map}  */}
        {(data.main !== undefined) ? 
        (<>
                <h3>City name: {data.name.toLowerCase()}</h3>
                <p>Temperature : {data.main.temp} &deg;</p>
        </>) : 
        (<h1>{error}</h1>)}
    </div>
  )
}

export default Weather
