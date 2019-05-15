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

import Level1 from './levels/level1';


export default class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state={
      timeToGo: 10,
      score: 0,
    }

    this.scoreToBeat = 15;
  }

  render() {
    {this.checkCounter()}
    return (
      <View style={styles.gameScreen}>
        <View style={styles.infoBar}>
          <Text style={styles.count}>Score: {this.state.score}</Text>
          <Text style={styles.count}>Time: {this.state.timeToGo}</Text>
        </View>

          <Level1 addToScore={()=>this.addToScore()}/>

      </View>
    );
  }

  

  countDown(){
    this.setState(prevState => ({
      timeToGo: prevState.timeToGo - 1
    }))

    this.checkCounter(this.state.timeToGo);
  }

  checkCounter(time){
    if(time == 0){
      if(this.state.score < this.scoreToBeat){
        this.gameOver();
      }else{
        this.levelPassed();
      }
    }
  }

  addToScore(){
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }

  gameOver(){
    this.props.goToGameOverScreen();
  }

  levelPassed(){
    this.props.goToGameScreenLevelPassed();
  }

  componentDidMount(){
    this.interval = setInterval(
        () => {
          if(this.state.timeToGo > 0) {
            this.countDown()
          } else {
            clearInterval(this.interval)
          }
        },
        1000
      )
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}
