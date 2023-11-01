// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a5ba461a48msh65b08831653c3e7p1507abjsnde9624eacb69',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

async function fetchData(city) {
    console.log(city);
  try {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    const result = await response.json();
    const t = result.temp;
    //changing the vector image according to the temprature 
    if(t<=15){
      document.getElementById('cold').style.display = 'block';
      document.getElementById('hot').style.display = 'none';
    }
    else{
      document.getElementById('hot').style.display = 'block';
      document.getElementById('cold').style.display = 'none';
    }
    document.getElementById('name-city').innerHTML = city;
    document.getElementById('temp').innerHTML = result.temp;
    document.getElementById('humidity').innerHTML = result.humidity;
    document.getElementById('wind-speed').innerHTML = result.wind_speed;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData("Ahmedabad");
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    event.preventDefault();
    const cityInput = document.getElementById('city');
    const city = cityInput.value;
    fetchData(city);
  });