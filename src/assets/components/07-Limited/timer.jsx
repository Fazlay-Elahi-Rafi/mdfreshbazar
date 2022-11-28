import React, { Component } from "react";

export default class Timer extends Component {
  state = {
    remaining: {
      days: 0,
      hour: 0,
      mins: 0,
      sec: 0,
    },
    isExpired: false,
  };
  timer;
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      now = new Date().getTime(),
      countDownDate = new Date(targetDate + " " + targetTime).getTime();

    this.distance = countDownDate - now;

    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hour: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          mins: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          sec: Math.floor((this.distance % (1000 * 60)) / 1000),
        },
        isExpired: false,
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
      { targetDate, targetTime } = this.props;

    return (
      <>
        {!isExpired && targetDate && targetTime ? (
          <>
            <div className="limited__card-count d-flex justify-content-center align-items-center">
              {Object.entries(remaining).map((el, i) => (
                <div key={i} className="limited__card-count--div">
                  <span key={el[1]} className="limited__card-count--time">
                    {el[1]}
                  </span>
                  <span className="limited__card-count--text">{el[0]}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="limited__card-count d-flex justify-content-center align-items-center">
            <div className="limited__card-count--div">
              <span className="limited__card-count--time">00</span>
              <span className="limited__card-count--text">days</span>
            </div>
            <div className="limited__card-count--div">
              <span className="limited__card-count--time">00</span>
              <span className="limited__card-count--text">hour</span>
            </div>
            <div className="limited__card-count--div">
              <span className="limited__card-count--time">00</span>
              <span className="limited__card-count--text">mins</span>
            </div>
            <div className="limited__card-count--div">
              <span className="limited__card-count--time">00</span>
              <span className="limited__card-count--text">sec</span>
            </div>
          </div>
        )}
      </>
    );
  }
}
