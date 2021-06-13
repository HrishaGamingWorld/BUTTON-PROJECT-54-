import React, { Component } from 'react';
import { Text, View, Button, Alert, Button2, Button3, Button4, Button5 } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ width: 200, height: 100, marginTop: 80 }}>
        <Button
          title="sound 1"
          color="red"
          onPress={() => Alert.alert('Play Sound 1')}/>
      </View>
    );
  }}