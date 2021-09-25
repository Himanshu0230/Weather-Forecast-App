import React from 'react';
import { Text, View, Dimensions , StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

const Loader = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}>
            <LottieView
                style={[styles.genericLoaderStyle, { aspectRatio: 3, flexGrow: 0.3 }]}
                source={require('../assets/loader.json')}
                resizeMode="contain"
                autoPlay
            />
        </View>
    );
};

const styles = StyleSheet.create({
    genericLoaderStyle: {
        width: SCREEN_WIDTH * 0.1,
        aspectRatio: 2,
        flexGrow: 1,
        alignSelf: 'center',
    },
});

export default Loader;