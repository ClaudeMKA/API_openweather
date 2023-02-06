console.log('meteo');
let apiCall = function(city){

    const api = '5487b4231123bacd67a6dc77a263c66b\n';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=fr`;
    fetch(url).then(response=>response.json().then(data=>{console.log(data)
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = `<i class="fas fa-thermometer-half"></i>` + data.main.temp + '°';
            document.querySelector('#humidity').innerHTML = `<i class="fas fa-tint"></i>` + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = `<i class="fas fa-wind"></i>` + data.wind.speed +'km/h';
        }
    )).catch(err=>console.log('Erreur : ' + err));

}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    ville = document.querySelector('#inputCity').value;
    apiCall(ville);
})
// Appel par default au chargement de la page
apiCall('Paris')

