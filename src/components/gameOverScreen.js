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


export default class GameOverScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
    
          <View style={styles.startScreen}>

              <Text style={styles.title}>GAME OVER</Text>
              <Text style={styles.gameInfo}>( I hope you do better next time )</Text>

              <TouchableOpacity
                      onPress={() => this.props.goToStartScreen()}
                      style = {styles.startButton}
                  >

                  <Text style={styles.buttonText}>Try Again</Text>

              </TouchableOpacity>

          </View>

      </View>
    );
  }
}


