"use strict"

async function getWeather(city){
     try { const weather = await fetch (" https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY")
     let key = ("a926813f6b23cbc20194c8cdf982f553")
        const options = await fetch
            method: "GET",
            headers: {"Content-Type": "application/json",
            },
            body: JSON.stringify,
        }
    } catch (error) {
        console.error(Error)
    }
};