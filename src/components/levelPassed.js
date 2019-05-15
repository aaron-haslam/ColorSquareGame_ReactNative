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
        
        <Text style={styles.title}>Level 1 Passed</Text>
        <Text style={styles.gameInfo}>Good job! You passed the first level. I think my grandma did that with her eyes closed.</Text>
        <Text style={styles.gameInfo}>I bet you can't beat the next one</Text>

        <TouchableOpacity
                onPress={() => this.props.goToGameScreenLevel2()}
                style = {styles.startButton}
            >
        
            <Text style={styles.buttonText}>Start Level 2</Text>
                
        </TouchableOpacity>
      </View>
    )
  }
}
