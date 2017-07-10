import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

/*Need to import list view*/

export default class SearchResults extends Component {
    static navigationOptions = {
        title: 'Search Results',
        headerTitleStyle: {
            color: '#000'
        },
        headerStyle: {
            backgroundColor: '#CA0000'
        },
        headerTintColor: '#FFF'
    };
    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
    }
});
