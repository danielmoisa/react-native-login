import React from 'react';
import  { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function WelcomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
          <LinearGradient
            colors={['#01a1fe', '#0184eb']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%'
            }}
          />  
          <Text style={styles.title}>Hello!</Text>
          <Image source={require('../assets/welcome.png')} style={styles.img} />
          <Text style={styles.description}>
            This application will help you to simplify interation with your team and increase benefits in your work
          </Text>
          <View style={styles.dots}>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
          </View>
          <View style={styles.login}>
            <TouchableOpacity>
              <Text style={styles.loginText} onPress={ () => navigation.navigate('Login') }>
                Login To Your Account
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 36,
    color: '#fff',
  },
  img: {
    height: 250,
    width: 265,
    resizeMode:'cover',
    marginTop: 30,
    marginBottom: 30
  },
  description: {
    color: '#fff',
    paddingLeft: 60,
    paddingRight: 60,
    fontSize: 15,
    letterSpacing: 0.5,
    textAlign: 'center'
  },
  dots: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30
  },
  dot: {
    height: 7,
    width: 7,
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 5
  },
  login: {
    backgroundColor: '#fff',
    width: '100%',
    height: 100,
    borderTopEndRadius: 50,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16
  }
});