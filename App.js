import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');

  function calculateCylinderSurfaceArea(radius, height) {
    const baseArea = Math.PI * radius * radius; 
    const surfaceArea = 2 * Math.PI * radius * (radius + height); 
    return surfaceArea;
  }

  function calcArea() {
    const res = calculateCylinderSurfaceArea(parseFloat(radius), parseFloat(height));
    setArea(res.toFixed(2));
    setRadius('');
    setHeight('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <Text style={styles.headerText}>Henger felszín számoló</Text>
      </View>


      <View style={styles.body}>
        <Text style={styles.label}>Sugár</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setRadius(text)}
          value={radius}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Magasság</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setHeight(text)}
          value={height}
          keyboardType="numeric"
        />
        <Pressable onPress={calcArea} style={styles.button}>
          <Text style={styles.buttonText}>számolás :D</Text>
        </Pressable>
        <Text style={styles.label}>Felszín</Text>
        <TextInput
          style={styles.input}
          value={area}
          editable={false}
        />      
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Szeri Bendegúz, 2024</Text>
      </View>
  
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 3,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
      color: 'white',
      fontSize: 14,
      textTransform: 'uppercase',
  },
  input: {
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    fontSize: 18,
    paddingHorizontal: 8,
  },
  header: {
    backgroundColor: 'darkgrey',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',        
  },
  headerText: {
    fontSize: 28,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  label: {
    marginTop: 10,
    fontSize: 22,
  },
  footer: {
    backgroundColor: 'gray',
    width: '100%',
    padding: 5,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
});
