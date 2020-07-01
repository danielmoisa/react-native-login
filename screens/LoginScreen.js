import React from 'react';
import  { View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
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
          <View style={styles.login}>
            <TextInput style={styles.input} autoCompleteType="email" placeholder="Email address" placeholderTextColor="#000" />
            <TextInput style={styles.input} autoCompleteType="password" placeholder="Password" placeholderTextColor="#000" secureTextEntry={true} />
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>Login</Text>
            </TouchableOpacity>
            <View style={styles.social}>
              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="google" size={20} color="#ef291a" /><Text style={{paddingLeft: 5}}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Entypo name="facebook-with-circle" size={20} color="#3b5998" /><Text style={{paddingLeft: 5}}>Sign in</Text>
              </TouchableOpacity>
            </View>
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
    marginTop: 20,
    marginBottom: 20
  },
  login: {
    backgroundColor: '#fff',
    width: '100%',
    borderTopEndRadius: 50,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 30,
    paddingBottom: 20
  },
  loginText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16
  },
  input: {
    height: 40,
    backgroundColor: '#edf6ff',
    borderRadius: 30,
    paddingLeft: 15,
    letterSpacing: 0.3,
    marginBottom: 15
  },
  btn: {
    marginBottom: 10,
    borderColor: '#f3f5f7',
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#0090f2',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 15
  },
  socialBtn: {
    minWidth: 110,
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f3f5f7',
    borderWidth: 2,
    borderRadius: 50,
    padding: 10
  }
});