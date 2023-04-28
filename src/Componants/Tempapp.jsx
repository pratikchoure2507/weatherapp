import React, { useEffect, useState } from 'react'
import "./Style/style.css";
// import moment from 'moment';

// const Boxcolor = (value) => {
//     let weathercard = document.getElementById("card");
//     if (value <= 10) {
//         weathercard.style.background = 	"#87CEEB";
//     }
//     else if (value <= 20) {
//         weathercard.style.background = "Pink";
//     }
//     else {
//         weathercard.style.background = "Yellow";
//     }
// }

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");
    // const [sunrise1,setSunrise]=useState(0);
    // const [sunset1,setSunset]=useState(0);


    useEffect(() => {
        const fetchApi = async () => {
            // const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?key=MFZ3BYNHP3D4TYZ6MKSSYDLFZ`;
               const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=72b2522827526dfaa00446e4702f3a78`;
            const response = await fetch(url)
            const resJSON = await response.json();
            setCity(resJSON);


            // console.log("City is "+resJSON.name);
            // console.log("Weather is "+resJSON.weather[0].main);

            // let DateTimeEpoch = resJSON.dt;
            // let mydate = new Date(DateTimeEpoch * 1000);
            // let time = moment(mydate).hours();
            // setSunrise(moment(city.sys.sunrise*1000).hour());
            // setSunset(moment(city.sys.sunset*1000).hour());
            // console.log("Time is " + time);
            // Boxcolor(time);



        }
        fetchApi();
    }, [search]);

    return (
        <>
            <div className="box" id="card">
                <div className="inputData">
                    <input type="search" className='inputFeild'
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>
                {!city ? (<p>No Data Found</p>) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                {search}
                            </h2>
                            <h1 className="temp">
                                <span> Temp is </span>
                                    {city.main&&city.main.temp}
                                   <br />
                            </h1>
                            <h3 className="tempmin_max">
                            Humidity {city.main&&city.main.humidity}
                                {/* Sun Rise {sunrise1} */}
                                <br />
                                
                                {/* Sun Set {sunset1} */}
                                <p> temp min {city.main&&city.main.temp_min} <br/>  temp max {city.main&&city.main.temp_max}</p>
                                
                            </h3>
                        </div>
                    </div>
                )}

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        </>
    )
}

export default Tempapp
