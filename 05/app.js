import React from 'react';
import ReactDOM from 'react-dom';
import Api from './Api'


class Weather extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {

        return(
          <div>
            <h1> lalalal </h1>
          </div>
      )
  }

  componentDidMount() {

      const { lat , lon } = this.props;
      const api = new Api( lat , lon );

      console.log( 'lat' , lat)
      console.log( 'lng' , lon)
      console.log(api)

      console.log( api.getWeatherData() );

  }
}




ReactDOM.render(
    <Weather lat = {50.061389} lon = {19.938333} />,
    document.querySelector('#root')
);