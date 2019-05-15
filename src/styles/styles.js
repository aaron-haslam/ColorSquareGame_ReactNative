import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  startScreen:{
    display:'flex',
    flex: 1,
    backgroundColor: '#000000',
    alignItems:'stretch',
    justifyContent:'space-around',
  },
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#000000',
    alignItems:'stretch'
  },
  gameScreen:{
    flex: 1,
    backgroundColor: '#000000',
    alignItems:'stretch',
    justifyContent:'space-around',
  },
  infoBar:{
    flex:0.1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  gameBoard:{
    flex: 4,
    alignItems: 'stretch',
    flexDirection:'column',
    justifyContent: 'space-evenly',
  },
  buttonRow:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  count: {
    fontSize: 30,
    textAlign: 'center',
    color: 'lightblue',
    margin: 2,
    padding: 3,
    fontFamily: 'casual',
  },
  button: {
    flex:1,
    backgroundColor: 'black',
    padding: 2,
    margin: 2,
    borderRadius: 8,
  },
  theButton: {
    flex:1,
    backgroundColor: 'lightblue',
    padding: 2,
    margin: 2,
    borderRadius: 8,
  },
  randomColorButton: {
    flex:1,
    padding: 2,
    margin: 2,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'casual',
    fontSize:50,
  },
  title:{
    fontFamily:'casual',
    fontSize:100,
    color:'white',
    textAlign:'center',
  },
  gameInfo:{
    fontFamily:'casual',
    color: 'white',
    textAlign:'center',
    fontSize:20,
  },
  startButton: {
    backgroundColor: '#5e5e5e',
    padding: 2,
    margin: 2,
    borderRadius: 20,
  },
});