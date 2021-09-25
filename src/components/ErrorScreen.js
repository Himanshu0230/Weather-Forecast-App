import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

class ErrorScreen extends Component {

    onPressRetry() {
        console.log("retry pressed");
    }

    render() {
        return (
            <View>
                <Text style={styles.errorMessageStyle}>Something Went Wrong At Our End</Text>
                <TouchableOpacity onPress={this.onPressRetry.bind(this)}>
                    <View style={styles.buttonContainerStyle}>
                        <Text style={styles.buttonStyle}>Retry</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorMessageStyle: {
        fontSize: 60,
        marginTop: 200,
        marginBottom: 80,
        marginLeft: 20,
    },
    buttonStyle: {
        fontSize: 30,
        margin: 10,
    },
    buttonContainerStyle: {
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
        marginLeft: 120,
        marginRight: 120,
    }
});

export default ErrorScreen;