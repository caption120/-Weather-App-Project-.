
let valuesearch = document.getElementById("valuesearch");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.querySelector(".description");
let cloud = document.querySelector("#cloud");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let form = document.querySelector("form");
let main=document.querySelector("main");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (valuesearch.value !== "") {
        searchWeather();
    }
});

let apiKey = '9505fd1df737e20152fbd78cdb289b6a';

let searchWeather = () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${valuesearch.value}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(deta => {
            console.log(deta);
            if (deta.cod == 200) {
                city.querySelector('figcaption').innerText = deta.name;
                city.querySelector('img').src = 'https://flagsapi.com/' + deta.sys.country + '/shiny/32.png';
                let temperature = document.querySelector(".temperature");
                temperature.querySelector('figcaption span').innerText = deta.main.temp;
                let desscripiton = document.querySelector(".desscripiton");
                desscripiton.innerText=deta.weather[0].description;
                

                cloud.innerText = deta.clouds.all + "%";
                humididty.innerText = deta.main.humidity + "%";
                pressure.innerText = deta.main.pressure + " hPa";
                    
            } else {
                main.classList.add('error');
                setTimeout(()=>{
                    main.classList.remove('error');
                },2000);    
            }

            valuesearch.value="";
        })
        // .catch(error => console.error("Error fetching weather:", error));
};

let initApp =()=>{
     valuesearch.value="america";
     searchWeather();
}

initApp();