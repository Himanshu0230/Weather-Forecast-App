import React, { Component } from "react";
import { View, Text } from 'react-native';

class WeatherScreen extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.tempStyle}>{this.props.temp.toFixed(0)}°C</Text>
                <Text style={{ fontSize: 40 }}>{this.props.city}</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        margin: 30,
        alignItems: 'center',
    },
    tempStyle: {
        fontSize: 80,
        marginTop: 70,
    },
};

export default WeatherScreen;