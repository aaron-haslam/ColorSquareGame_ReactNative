import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native';

import styles from '../../styles/styles';

import GameButton from './gameButton';



export default class Level1 extends Component {
    constructor(props){
        super(props);

        this.colors = [];
        this.randomColors = [];
    }

    render() {
        return (
            <View style={styles.container}>
              {this.createGameBoard()}         
            </View>
          );
    }

    createGameBoard(){   
      this.randomColors = JSON.parse(JSON.stringify(this.colors));

        return(
          <View style={styles.gameBoard}>
              {this.createRow()}
              {this.createRow()}
              {this.createRow()}
              {this.createRow()}
              {this.createRow()}
              {this.createRow()}
              {this.createRow()}
              {this.createRow()}
          </View>
        );
    }
    
    createRow() {
      let results = [];
    
      for(let i = 0; i < 5; i++) {
        let tempColor = this.randomColors.pop();

        results.push(<GameButton key={i} color={tempColor} add={()=>this.props.addToScore()} shuffle={()=>this.createArray()}/>); //only use the index as a key if list will not change
      }
  
      return (<View style={styles.buttonRow}>{results}</View>);
    }

    createArray(){
      this.colors = [];

      for(let i = 0; i < 40;i++){
        this.colors.push(i);
      }
      this.colors = this.shuffleArray(this.colors);

      this.forceUpdate();
    }
    // Got this code to randomize array from
    // https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
    shuffleArray(array){
        let ctr = array.length;
        let temp;
        let index;

        // While there are elements in the array
        while (ctr > 0) {
        // Pick a random index
            index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
            ctr--;
          // And swap the last element with it
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }

    componentWillMount() {
      this.createArray();
    }

    componentDidMount(){
    }
}