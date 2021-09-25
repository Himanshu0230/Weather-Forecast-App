import React, { PureComponent } from 'react';
import { View, Text, Platform, PermissionsAndroid, ToastAndroid , Image } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { connect } from 'react-redux';
import * as actions from '../actions';
import WeatherApi from '../api/WeatherApi';
import WeatherScreen from './WeatherScreen';
import ForecastScreen from './ForecastScreen';
import LoderScreen from './LoderScreen';
import ErrorScreen from './ErrorScreen';

class HomeScreen extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {errorFlag : false};
  }

  hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  componentDidMount() {
    const hasPermission = this.hasLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        async (position) => { 
          const currentWeather = await WeatherApi.get(`/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=5605c48d01ce39f69f3f9d0ecc37afb4`)
          const forecast = await WeatherApi.get(`/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=5605c48d01ce39f69f3f9d0ecc37afb4`)
          this.props.saveCurrentWeather(currentWeather);
          this.props.saveForecast(forecast);
          if(!currentWeather.ok || !forecast.ok) {
            this.setState({errorFlag : true});
          }
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  render() {
    if(this.state.errorFlag) {
      return <ErrorScreen />;
    }
    else if ((this.props.currentWeather !== null && this.props.currentWeather.ok) && (this.props.forecast !== null && this.props.forecast.ok)) {
      console.log(this.props.currentWeather);
      const temp = this.props.currentWeather.data.main.temp;
      const city = this.props.currentWeather.data.name;
      return (
        <View style={{justifyContent: 'space-between' , flex:1}}>
          <WeatherScreen temp={temp} city={city} />
          <ForecastScreen list={this.props.forecast.data.list}/>
        </View>
      );
    }
    return <LoderScreen />;
  }
}

const mapStateToProps = state => {
  return { location: state.location, currentWeather: state.currentWeather, forecast: state.forecast };
};

export default connect(mapStateToProps, actions)(HomeScreen);