import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity , Alert} from 'react-native';

export default class App extends React.Component{


  constructor(){
    super();
    this.state={
      uri :require("./src/img/dice1.png")
    }
  }

  getRandom  =() =>{
    
   return Math.floor(Math.random()*6)+1;

  }
 
  gbutton =() =>{
   // Alert.alert("" + this.getRandom());

   var rNo=this.getRandom();
   switch(rNo){
      case 1 :
       this.setState({ uri :require("./src/img/dice1.png")})
       break;
      case 2 :
          this.setState({ uri :require("./src/img/dice2.png")})
      break;
      case 3 :
       this.setState({ uri :require("./src/img/dice3.png")})
       break;
       case 4 :
       this.setState({ uri :require("./src/img/dice4.png")})
       break;
       case 5 :
       this.setState({ uri :require("./src/img/dice5.png")})
       break;
       case 6 :
       this.setState({ uri :require("./src/img/dice6.png")})
       break;   
    

    default:
          this.setState({ uri :require("./src/img/dice1.png")})
      break;
   }
  };
  render()
 {
  
 
  return (
    <View style={styles.container}>
      <Image 
      style={{width : 250 , height : 250}}
      source={this.state.uri}
      />

      <View>
        <TouchableOpacity
        onPress={this.gbutton}
        >
        <Text
        style={styles.butoon1}
        >Click Me</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

 butoon1 :{

  marginTop : 100 ,
  fontSize :20 ,
  color : "#ffffff",
  backgroundColor :"#f1c40f",
  padding : 10,
  borderWidth : 2,
  borderRadius : 5,
  borderColor : "#ffffff",
 },

});
