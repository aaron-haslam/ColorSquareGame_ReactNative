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
    }


    componentWillMount() {
        
    } 

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {
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
                style={styles.theButton}
                onPress={()=>this.pressedTheCorrectButton()}
            />
            );
        }
        else{
            return(
                <TouchableOpacity 
                style={styles.button}
                disabled={true}
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