/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import {StackNavigator}
from 'react-navigation';
import {Button} from 'native-base';
import UnderlineTextEntry from './components/UnderlineTextEntry.js';
import SearchResults from './screens/SearchResults.js';

export default class HomeScreen extends Component {
  
  constructor(props) {
    super(props);
    this.storeSearchQuery =
    this.storeSearchQuery.bind(this);
  }

  storeSearchQuery (searchTerm) {
    this.state = {searchTerm: searchTerm}
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={styles.header}>
          {/*Icons made by http://www.freepik.com
          http://www.flaticon.com" is licensed by http://creativecommons.org/licenses/by/3.0/ 
          title="Creative Commons BY 3.0*/}
          <Image source={require ('./images/box-of-popcorn.png')}
          style={styles.header_img} />
        </View>
        <View style={styles.search}>
          <UnderlineTextEntry search={this.storeSearchQuery} />
        </View>
        <View style={styles.search}>
          <Button light block
          style={
            StyleSheet.flatten(styles.searchBtn)}
            onPress={() =>
            this.props.navigation.navigate('Results',
            {searchTerm: this.state.searchTerm})}>
              <Text>Search</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const FlixSearchNav = StackNavigator({
  Home: {screen: HomeScreen},
  Results: {screen: SearchResults},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CA0000',
  },
  header: {
    height: 170
  },
  header_img: {
    resizeMode: 'contain',
    height: 170
  },
  search: {
    height: 100,
    padding: 40,
    flexDirection: 'row'
  },
  instructions: {
    marginTop: 30,
    color: '#FFF'
  },
  btnContainer: {
    flexDirection: 'row'
  },
  searchBtn: {
    flex: 1,
    margin: 40
  }
});

AppRegistry.registerComponent('FlixSearch', () => FlixSearchNav);
