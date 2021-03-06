import React , {Component} from 'react';
import {View , Text ,} from 'react-native';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import HomeScreen from './components/HomeScreen';

class App extends Component {

    render() {
        return(
            <Provider store={createStore(reducers)}>
                <HomeScreen />
            </Provider>
        );
    }
}

export default App;