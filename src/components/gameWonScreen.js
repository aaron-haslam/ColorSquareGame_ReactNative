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


export default class GameWonScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.startScreen}>
        
        <Text style={styles.title}>You Win</Text>
        <Text style={styles.gameInfo}>I'll be honest, I didn't think you were going to make it.</Text>
        <Text style={styles.gameInfo}>GOOD JOB!</Text>

        <TouchableOpacity
                onPress={() => this.props.goToStartScreen()}
                style = {styles.startButton}
            >
        
            <Text style={styles.buttonText}>Restart Game</Text>
                
        </TouchableOpacity>
      </View>
    )
  }
}
