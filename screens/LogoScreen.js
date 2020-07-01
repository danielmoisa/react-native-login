import React, { useEffect, useRef } from 'react';
import  { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current 
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
        }
      ).start();
    }, [])
  
    return (
      <Animated.View                 
        style={{
          ...props.style,
          opacity: fadeAnim,
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default function LogoScreen({ navigation }) {
    React.useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Welcome')
        }, 3000)
      }, []);

    return (
        <View style={ styles.container }>
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
            <View style={styles.line1}></View>
            <View style={styles.line2}></View>
            <FadeInView>
            <Text style={styles.logo}>LOGO</Text>
      </FadeInView>
            <View style={styles.circle}></View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0095f6',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 45,
        color: '#fff',
        zIndex: 10
    },
    line1: {
        position: 'absolute',
        top: '30%',
        left: '15%',
        height: 2,
        width: 50,
        backgroundColor: '#1ea5f9',
        transform: [{ rotate: '-50deg'}],
        marginTop: 10
    },
    line2: {
        position: 'absolute',
        top: '31%',
        left: '22%',
        height: 2,
        width: 50,
        backgroundColor: '#1ea5f9',
        transform: [{ rotate: '-50deg'}],
        marginTop: 10
    },
    circle: {
        position: 'absolute',
        bottom: '25%',
        right: '15%',
        height: 70,
        width: 70,
        borderStyle: 'solid', 
        borderWidth: 2,
        borderColor: '#249cf1',
        borderRadius: 50
    },
  });