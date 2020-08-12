import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CustomButton({ text, onPress , btnColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
              margin: 4,
              borderRadius: 8,
              paddingVertical: 14,
              paddingHorizontal: 10,
              backgroundColor: btnColor,
      }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});