import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from '../../styles/styles';

export default class GameButton extends Component {

    constructor(props) {
        super(props);

        this.state={
            color: ''
        }
    }

    



    componentWillMount() {
        
    } 

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.color != 0){
            this.setState(prevState => ({
                color: this.props.otherColors
              }))
        }else{
            this.setState(prevState => ({
                color: 'lightblue'
              }))
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    render() {
        if(this.props.color == 0){
            return(
                <TouchableOpacity 
                style={[styles.randomColorButton,{backgroundColor: this.state.color}]}
                onPress={()=>this.pressedTheCorrectButton()}
            />
            );
        }
        else{
            return(
                <TouchableOpacity 
                style={[styles.randomColorButton,{backgroundColor: this.state.color}]}
                onPress={()=>this.props.gameOver()}
            />
            );
        }
    }

    pressedTheCorrectButton(){
        this.props.add();
        this.props.shuffle();
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}