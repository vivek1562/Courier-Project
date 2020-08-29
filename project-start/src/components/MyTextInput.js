import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const MyTextInput = ({ placeholder, name, ...formikProps }) => {
  const formikprops = { ...formikProps };
  //console.log("checking for formikprops");
  //console.log(formikprops);

  return (
    <View>
      <Text>{placeholder}</Text>
      <TextInput
        style={styles.textInputStyle}
        name={name}
        placeholder={placeholder}
        onChangeText={formikprops.handleChange(name)}
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: "black",
    borderRadius: 4,
    backgroundColor: "#e0fffa",
    height: 40,
    width: 250,
  },
});

export default MyTextInput;
