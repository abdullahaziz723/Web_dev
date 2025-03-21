const apikey="474eb95b5dbcb7c1293e783eff77fcaa";

const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button"); 
const wicon=document.querySelector(".w-icon");



async function checkweather(city) {
    const response=await  fetch(apiurl +city+`&appid=${apikey}`);
    var data =await response.json();
   
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round( data.main.temp)  +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"% ";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h" ;

    if(data.weather[0].main=="Clouds"){
        wicon.src="images/clouds.png"; 
    }
    else if (data.weather[0].main=="Clear"){
        wicon.src="images/clear.png";
    }
    else if (data.weather[0].main=="Rain"){
        wicon.src="images/rain.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        wicon.src="images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        wicon.src="images/mist.png";
    }
    else if (data.weather[0].main=="Snow"){
        wicon.src="images/snow.png";
    }

    document.querySelector(".weather").style.display="block";
    
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value); 
})
