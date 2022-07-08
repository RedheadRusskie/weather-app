const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.weather-icon');

const forecast = new Forecast();

const updateUI = data => {
  const { cityDetails, weather } = data;

  // updates details template
  details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
      <h5 class="my-3">${cityDetails.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
      </div>
    </div>
  `;

  // toggles card visibility
  if (card.classList.contains('d-none'))
    card.classList.remove('d-none');

  // toggles icon depending on value provided by AccuWeather
  const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  // update day/time
  let timeSrc = weather.IsDayTimne ? './img/day.svg' : './img/night.svg';
  time.setAttribute('src', timeSrc);
};

//acquires user input and sends to AccuWeather
cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if (localStorage.getItem('city'))
  forecast.updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
