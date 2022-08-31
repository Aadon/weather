window.addEventListener('load', () => {
  let long;
  let lat;

  let temperatureDegree = document.querySelector('.temperature-degree');
  
  let temperatureDesc = document.querySelector('.temperature-description');

  const locationTimezone = document.querySelector('.location-timezone')
  

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)

      long = position.coords.longitude;
      lat = position.coords.latitude;

      const apikey = 'fddbb08b60ad30fa842c320fd0da53bd';
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apikey}`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data)
        const { temp, summary } = data.current;
        //data for summary is unavailable in the api 
        temperatureDegree.textContent = temp;
        temperatureDesc.textContent = summary;
        locationTimezone.textContent = data.timezone
      });
    });
  };
});