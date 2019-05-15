/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/styles';


export default class startScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.startScreen}>
        
        <Text style={styles.title}>Tapit</Text>
        <Text style={styles.gameInfo}>Tap the blue button as many times as you can before time expires. If you score at least 10 points, you get to go to Level 2!</Text>
        <Text style={styles.gameInfo}>GOOD LUCK!</Text>

        <TouchableOpacity
                onPress={() => this.props.goToGameScreen()}
                style = {styles.startButton}
            >
        
            <Text style={styles.buttonText}>Start Level 1</Text>
                
        </TouchableOpacity>
      </View>
    )
  }
}
