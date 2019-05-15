import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native';

import styles from '../../styles/styles';

import GameButton from './gameButtonLevel2';



export default class Level1 extends Component {
    constructor(props){
        super(props);

        this.state={
            
        }

        this.colors = [];
        this.randomColors = [];
        this.moreButtonColors = [];
        this.buttonColors = [];
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
        this.moreButtonColors = JSON.parse(JSON.stringify(this.buttonColors));
        

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
        let otherColors = this.moreButtonColors.pop();

        results.push(<GameButton 
            key={i} 
            color={tempColor} 
            add={()=>this.props.addToScore()} 
            shuffle={()=>this.createArray()} 
            gameOver={()=>this.props.gameOver()}
            otherColors={otherColors}
            />);
      }
  
      return (<View style={styles.buttonRow}>{results}</View>);
    }

    createArray(){
      this.colors = [];
      this.buttonColors = [];
        

      for(let i = 0; i < 40;i++){
        this.colors.push(i);
        this.buttonColors.push(this.getRandomColor());
        
      }
      this.colors = this.shuffleArray(this.colors);
      this.buttonColors = this.shuffleArray(this.buttonColors);

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

    getRandomColor(){
        var CSS_COLOR_NAMES = ['#ADFF2F','#FFD700','#FF00FF','#4B0082','#800000','#00FA9A','#FF0000','#0000FF','#FF8C00','#7CFC00','#FFA500'];
        
        let ctr = CSS_COLOR_NAMES.length;

        let index = Math.floor(Math.random()* ctr);


        return CSS_COLOR_NAMES[index];
    }


    componentWillMount() {
      this.createArray();
    }

    componentDidMount(){
    }
}