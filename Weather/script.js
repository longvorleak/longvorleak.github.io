// Search bar and Enter event
let input = document.querySelector('#city');

input.addEventListener('keyup', (e) => {
    if ( e.keyCode === 13 ) {
        console.log(input.value);
        getWeather(input.value);
    }
});

let city =  input.value
console.log(city);

// Return the weekdays as a name
const days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];

function getWeather(city = "seoul") {

    let API_URL = (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=78b6c6237b63ef07ebc569c057c8dea1&units=metric
    `);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', API_URL);

    xhr.addEventListener('readystatechange', function(){
        if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 ){

            let data = JSON.parse(xhr.responseText);
            console.log(data);

            let today = document.querySelector('.today');
            today.innerHTML="";
            
            let cityName = document.createElement('div');
            cityName.textContent = data.city.name;
            cityName.style.fontSize = "2.2em";
            cityName.style.color = "#03A9F4";
            cityName.style.fontWeight = "bold";

            let day = document.createElement('div');
            const d = new Date(data.list[0].dt*1000);
            let dayText = days[d.getDay()];
            day.textContent = dayText;
            day.style.fontWeight = "bold";
            day.style.textTransform = "uppercase";
            day.style.marginTop = "15px";


            let temp = document.createElement('div');
            temp.textContent = data.list[0].main.temp + '°C';
            temp.style.fontSize = "1.5em";
            temp.style.fontWeight = "bold";
            temp.style.color = "#03A9F4";

            let img = document.createElement('img');
            img.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

            let desc = document.createElement('div');
            desc.textContent = data.list[0].weather[0].description;
            desc.style.fontWeight = "bold";
            desc.style.marginTop = "10px";

            let humidity = document.createElement('div');
            humidity.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';

            let pressure = document.createElement('div');
            pressure.textContent = 'Pressure: ' + data.list[0].main.pressure + ' hPa';

            let feels = document.createElement('div');
            feels.textContent = 'Feels like: ' + data.list[0].main.feels_like + '°C';

            let wind = document.createElement('div');
            wind.textContent = 'Wind: ' + data.list[0].wind.deg + '%';

            let clouds = document.createElement('div');
            clouds.textContent = 'Wind: ' + data.list[0].clouds.all + ' m/s';

            today.appendChild(cityName);
            today.appendChild(day);
            today.appendChild(img);
            today.appendChild(temp);
            today.appendChild(desc);

            let todaySub = document.createElement('div');
            today.appendChild(todaySub);
            todaySub.classList="todaySub";

            let todayRight = document.createElement('div');
            todaySub.appendChild(todayRight);

            todayRight.appendChild(feels);
            todayRight.appendChild(humidity);
            todayRight.appendChild(pressure);

            let todayLeft = document.createElement('div');
            todaySub.appendChild(todayLeft);

            todayLeft.appendChild(wind);
            todayLeft.appendChild(clouds);

            let notToday = document.querySelector('.not-today');

            notToday.innerHTML = "";
    
            for ( let i = 8 ; i < 40 ; i+=8 ) {
                
                let subDiv = document.createElement('div');
                subDiv.classList="subDiv";
            
                let day = document.createElement('div');
                const d = new Date(data.list[i].dt*1000);
                let dayText = days[d.getDay()];
                day.id = "day";
                day.textContent = dayText;
                day.style.fontWeight = "bold";
                day.style.textTransform = "uppercase";

                let temp = document.createElement('div');
                temp.textContent = data.list[i].main.temp + '°C';
                temp.id = "temp";
                temp.style.fontSize = "1.5em";
                temp.style.fontWeight = "bold";
                temp.style.color = "#03A9F4";

                let img = document.createElement('img');
                img.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;

                let desc = document.createElement('div');
                desc.textContent = data.list[i].weather[0].description;
                desc.id = "desc";
                desc.style.fontWeight = "bold";
                desc.style.marginTop = "10px";

                subDiv.innerHTML = "";

                subDiv.appendChild(day);
                subDiv.appendChild(img);
                subDiv.appendChild(temp);
                subDiv.appendChild(desc);
               
                notToday.appendChild(subDiv);          
            }

        } else if ( xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200 ){

            alert(`There is an error.
            Code: ${xhr.status}
            City: ${xhr.statusText}`);
        }

    });
    xhr.send(null);
};

getWeather();

