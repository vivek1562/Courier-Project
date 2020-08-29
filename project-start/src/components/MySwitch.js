import React, { Component, useState } from "react";
import { Switch } from "react-native-paper";
import { View } from "react-native";
const MySwitch = ({ name, ...formikProps }) => {
  const formikprops = { ...formikProps };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      formikprops.setFieldValue(name, !previousState);
      return !previousState;
    });
  };
  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        value={isEnabled}
        onValueChange={toggleSwitch}
        style={{ marginRight: 200 }}
      />
    </View>
  );
};

export default MySwitch;
