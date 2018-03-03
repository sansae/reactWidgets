import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: [] };
    this.getCurrentCoordinates = this.getCurrentCoordinates.bind(this);
  }

  getCurrentCoordinates() {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = [position.coords.latitude, position.coords.longitude];
      this.setState({ location });
    });
  }

  componentDidMount() {

  }

  requestAPI() {
    this.getCurrentCoordinates();
    var lat = this.state.location[0];
    var lon = this.state.location[1];
    var url = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      var json = JSON.parse(xhttp.responseText);
      var state = json.sys.country;
      var city = json.name;
      var temp = json.main.temp;
      var fahrenheit = (((temp * 9) / 5) + 32).toFixed(2);
      var info = city + ", " + state + "<br>" + fahrenheit + " degrees";
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('api').innerHTML = info;
      }
    }
    xhttp.send();
  }

  render() {
    return (
      <div>
        <div id="weather">
          <div class="title">
            <p>Weather</p>
          </div>
          <div onLoad={this.requestAPI()} id="api">
          </div>
        </div>
      </div>
    );
  }
}
