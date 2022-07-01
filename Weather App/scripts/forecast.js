const key = '7WlwpWAA8dVEg85h9KIxvxjIw6RrNYpD';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const conditions = 'http://dataservice.accuweather.com/currentconditions/v1/';


// gets weather data
const getWeather = async(id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// gets city data
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};


