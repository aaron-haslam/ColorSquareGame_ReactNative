/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


import styles from './styles/styles';

import StartScreen from './components/startScreen';
import GameOverScreen from './components/gameOverScreen';
import GameScreen from './components/gameScreen';
import LevelPassed from './components/levelPassed';
import GameScreenLevel2 from './components/gameScreenLevel2';
import GameWonScreen from './components/gameWonScreen';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      screenToShow: 'startScreen',
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }

  renderScreen(){
    if(this.state.screenToShow == 'gameOverScreen'){
      console.log("Render GameOverScreen");
      return(
        <GameOverScreen goToStartScreen={() => this.goToStartScreen()}/>
      );
    }
    else if(this.state.screenToShow == 'startScreen'){
      console.log("Render Start Screen");
      return(
        <StartScreen goToGameScreen={()=>this.goToGameScreen()}/>
      );
    }
    else if(this.state.screenToShow == 'gameScreen'){
      console.log("Render Game Screen");
      return(
        <GameScreen 
        goToGameOverScreen={()=>this.goToGameOverScreen()}
        goToGameScreenLevelPassed={()=>this.goToGameScreenLevelPassed()}
        />
      );
    }
    else if(this.state.screenToShow == 'levelPassed'){
      console.log("Render Level Passed Screen");
      return(
        <LevelPassed goToGameScreenLevel2={()=>this.goToGameScreenLevel2()}/>
      );
    }
    else if(this.state.screenToShow == 'level2'){
      console.log("Render Level 2 Screen");
      return(
        <GameScreenLevel2 
        goToGameOverScreen={()=>this.goToGameOverScreen()}
        goToGameWonScreen={()=>this.goToGameWonScreen()}
        />
      );
    }
    else if(this.state.screenToShow == 'gameWon'){
      console.log("Render Game Won Screen");
      return(
        <GameWonScreen goToStartScreen={() => this.goToStartScreen()}/>
      );
    }
    else{
      console.log("Error: I don't know what screen to show");
      console.log("this.state.screenToShow: " + this.state.screenToShow );
      return(
        <Text style={styles.title}>Error 001: this.state.screenToShow isn't getting the right input</Text>
      );
    }
    
  }

  goToStartScreen(){
    this.setState((prevState)=>{return {screenToShow: 'startScreen'}});
  }
  goToGameScreen(){
    this.setState((prevState)=>{return {screenToShow: 'gameScreen'}});
  }
  goToGameOverScreen(){
    this.setState((prevState)=>{return {screenToShow: 'gameOverScreen'}});
  }
  goToGameScreenLevelPassed(){
    this.setState((prevState)=>{return {screenToShow: 'levelPassed'}});
  }
  goToGameScreenLevel2(){
    this.setState((prevState)=>{return {screenToShow: 'level2'}});
  }
  goToGameWonScreen(){
    this.setState((prevState)=>{return {screenToShow: 'gameWon'}});
  }
}
