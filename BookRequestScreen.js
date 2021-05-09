import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert, TouchableOpacity } from 'react-native';
import db from './config.js'
import firebase from 'firebase'
import MyHeader from '../'
export default class BookRequestScreen extends React.Component{
  render(){
    return(
     <View>
         <Text>Book Request Screen</Text>
     </View>
    )
  }
}