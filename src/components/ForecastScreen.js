import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native';
import moment from "moment";

class ForecastScreen extends Component {

    constructor(props) {
        super(props);
    }

    getSortedArray(list) {
        let array = [];
        let currentDate = '';
        list.map(item => {
            if (new Date(item.dt_txt).getDate() !== currentDate) {
                array.push({
                    date: moment(item.dt_txt).format('dddd'),
                    temp: item.main.temp
                })
            }
            currentDate = new Date(item.dt_txt).getDate();
        });
        return array;
    }



    renderItems(item) {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.dayStyle}>{item.item.date}</Text>
                <Text style={styles.tempStyle}>{item.item.temp.toFixed(0)}°C</Text>
            </View>
        );
    }

    render() {
        const Data = this.getSortedArray(this.props.list).splice(1);
        return (
            <View>
                <FlatList
                    data={Data}
                    renderItem={this.renderItems}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderTopWidth: 2,
        borderColor: 'black',
        flexDirection: 'row',
    },
    dayStyle: {
        fontSize:20,
        flex:1,
        margin: 17,
    },
    tempStyle: {
        fontSize:20,
        margin: 17,
    }
};

export default ForecastScreen;