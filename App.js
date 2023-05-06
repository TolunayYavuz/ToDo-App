import React, { Component } from "react";
import { Text, View,TouchableOpacity, Alert, StyleSheet, TextInput } from "react-native/";
import ItemList from "./itemlist";


export default class App extends Component{
  constructor(){
    super();
    this.state = {
      text:'',
      data:[],
    }
  }

  handlesave = () =>{
    const {text,data} = this.state;
    data.push({text})
    this.setState({data,text:""});
    console.log(this.state.data);
  }

   
    render(){

      const {text,data} = this.state;

       
      return(
        <View style={style.container}>
          <View style={style.header}><Text style={style.font}>To-Do Aplication</Text></View>
          <View style={{backgroundColor:'#ccc',padding:10,flexDirection:'row'}}>
            <TextInput style={style.textinput}
              value = {text}
            
              onChangeText={(text) => {this.setState({text})}}
            
            
            />

            <TouchableOpacity onPress={this.handlesave} style={style.button}><Text style={style.font}>Ekle</Text></TouchableOpacity>
          </View>

          <View>
            {
              data.map((item) => {
                return <ItemList text={item.text} />
              })
            }
          </View>
          
        </View>
        
      )
    }


    
}


const style = StyleSheet.create({
  container: {flex:1,paddingTop:0},
  header: {backgroundColor:'blue'},
  font :{fontSize:20,color:"white",textAlign:'center'},
  textinput :{backgroundColor:'white',borderRadius:10,flex:1},
  button: {padding:10,backgroundColor:'blue',borderRadius:10,marginLeft:10}
  
  
})



