import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  }
});