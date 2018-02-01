import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  checkTime(number) {
    return number < 10 ? (number = "0" + number) : number;
  }

  render() {
    var thisState = this.state.time;
    var hour = thisState.getHours();
    var minute = thisState.getMinutes();
    var second = thisState.getSeconds();
    minute = this.checkTime(minute);
    second = this.checkTime(second);
    var amPm = hour >= 12 ? "PM" : "AM";
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour = hour % 12;
    }

    return (
      <div>
        <div id="clock">
          <div class="title">
            <p>Clock</p>
          </div>
          <div id="timeAndDate">
            <div id="time">
              <p>Time:</p>
              <p>{hour}:{minute}:{second} {amPm} PST</p>
            </div>
            <div id="date">
              <p>Date:</p>
              <p>{this.state.time.toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
