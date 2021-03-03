import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class Settings extends Component{
  constructor(props){
    super(props);
    this.state = {
        emailId: firebase.auth().currentUser.email,
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
        docId:''
    }
  }
  getDetails = () =>{

    db.collection('users').where('email_id','==',this.state.emailId).get()
    .then(s=>{
        s.forEach(d=>{
            var data = d.data()
            this.setState({
                emailId:data.email_id,
                firstName:data.first_name,
                lastName:data.last_name,
                address:data.address,
                contact:data.contact,
                docId:d.id
            })
        })
    })
  }
 updateDetails = () =>{
     db.collection("users").doc(this.state.docId).update({
         first_name:this.state.firstName,
         last_name:this.state.lastName,
         contact:this.state.contact,
         address:this.state.address,

     })
    Alert.alert("User details update successfully")
 }
componentDidMount(){
    this.getDetails();
} 
render(){
    return(
        <View>
            <MyHeader navigation={this.props.navigation} title="Settings" />
            <TextInput
          style={style.input}
          placeholder ={"First Name"}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        />
            <TextInput
          style={style.input}
          placeholder ={"Last Name"}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value={this.state.lastName}
        />
            <TextInput
          style={style.input}
          placeholder ={"Address"}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value={this.state.address}
        />
            <TextInput
          style={style.input}
          placeholder ={"Contact"}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />
            <TextInput
          style={style.input}
          placeholder ={"Email"}
          onChangeText={(text)=>{
            this.setState({
              email: text
            })
          }}
          value={this.state.email}
        />         
        <TouchableOpacity onPress={()=>{
            this.updateDetails();
        }}> 
        <Text>Update</Text>
        </TouchableOpacity>                       
        </View>
    )
}
}
const style = StyleSheet.create({
  input: {
      marginTop: '6%',
      width: '80%',
      alignSelf: 'center',
      textAlign: 'center',
      borderWidth: 4,
      height: 50,
  },
})
