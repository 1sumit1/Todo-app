import React,{useState,useEffect} from 'react'
import "./Style.css";
import { WeatherInfo } from './WeatherInfo';

export const Temp = () => {
    const[searchValue,setSearchValue]=useState("Rohtak");
    const[tempInfo,setTempInfo]=useState("");

    const getWeatherInfo = async () => {
        try{
             let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8460491467a2b20d2378c1c1a007ef89`;

             const res= await fetch(url);
             const data= await res.json();
            // console.log(data);

            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const{name}=data;
            const{speed}=data.wind;
            const{country,sunset}=data.sys;

            const myNewWeatherinfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            
            setTempInfo(myNewWeatherinfo);
         
            // console.log(temp);
        }catch(error){
                console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])
    return (
        <>
            <div className="wrap">
                <div className="search">
                  <input type="text" placeholder="search" autoFocus id="search" className="searchTerm"
                  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                  <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
             </div>
                <WeatherInfo tempInfo={tempInfo}/>
        </>
    )
}
