import React , { useState } from "react";
import { StyleSheet,SafeAreaView, Text } from "react-native";
import SignInScreen from "./scr/screen/SignInScreen";

const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor : '#e8e8e8',
  }
})

export default App;