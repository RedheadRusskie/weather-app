const key = 'S6eH2JSYg5i2C2fsXQCKagG2TkKGKf9V';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const conditions = 'http://dataservice.accuweather.com/currentconditions/v1/';

class Forecast {
  constructor() {
    this.citySearch = citySearch;
    this.conditions = conditions;
    this.key = key;
  }

  async getWeather (id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.conditions + query);
    const data = await response.json();

    return data[0];
  }

  async getCity (city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.citySearch + query);
    const data = await response.json();
  
    return data[0];
  } 
  
  async updateCity (city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    
    return { cityDetails, weather };
  }
}
