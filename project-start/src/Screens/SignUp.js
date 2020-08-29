import React, { Component } from "react";
import { useFormik } from "formik";
import MySwitch from "../components/MySwitch";
import MyTextInput from "../components/MyTextInput";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Yup from "yup";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const SignUp = () => {
  const axios = require("axios").default;
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formikProps = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgree: false,
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(15, "must be less than or equal to 15")
        .required("Required"),

      lastName: Yup.string()
        .max(15, "must be less than or equal to 15")
        .required("Required"),

      mobileNumber: Yup.string().matches(
        phoneRegExp,
        "Mobile number is not valid"
      ),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .required("Required")
        .min(2, "very short password")
        .max(20, "We prefer a medium sized password"),

      confirmPassword: Yup.string()
        .test("passwords-matching", "Passwords must match", function (value) {
          return this.parent.password === value;
        })
        .required("Required"),

      isAgree: Yup.boolean().test(
        "isAgreed",
        "Please Agree to erms and conditions",
        (value) => value === true
      ),
    }),

    /*
    https://b35ecf089e42004cee17e338d728bb4a.m.pipedream.net
    */

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // axios
      //   .post("http://192.168.43.174:8080/user", values)
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log("error is ", error));
    },
  });
  // console.log(formikProps);
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View>
        <MyTextInput
          placeholder="First Name"
          name="firstName"
          {...formikProps}
        />
        {formikProps.errors.firstName && (
          <Text style={{ color: "red" }}>{formikProps.errors.firstName}</Text>
        )}
      </View>

      <View>
        <MyTextInput placeholder="Last Name" name="lastName" {...formikProps} />
        {formikProps.errors.lastName && (
          <Text style={{ color: "red" }}>{formikProps.errors.lastName}</Text>
        )}
      </View>

      <View>
        <MyTextInput
          placeholder="Mobile Number"
          name="mobileNumber"
          {...formikProps}
        />
        {formikProps.errors.mobileNumber && (
          <Text style={{ color: "red" }}>
            {formikProps.errors.mobileNumber}
          </Text>
        )}
      </View>
      <View>
        <MyTextInput placeholder="Email" name="email" {...formikProps} />
        {formikProps.errors.email && (
          <Text style={{ color: "red" }}>{formikProps.errors.email}</Text>
        )}
      </View>
      <View>
        <MyTextInput placeholder="Password" name="password" {...formikProps} />
        {formikProps.errors.password && (
          <Text style={{ color: "red" }}>{formikProps.errors.password}</Text>
        )}
      </View>

      <View>
        <MyTextInput
          placeholder="Confirm Password"
          name="confirmPassword"
          {...formikProps}
        />
        {formikProps.errors.confirmPassword && (
          <Text style={{ color: "red" }}>
            {formikProps.errors.confirmPassword}
          </Text>
        )}
      </View>

      <View>
        <Text style={styles.textStyle}>I accept the terms and conditions</Text>
        <MySwitch name="isAgree" {...formikProps} />
        {formikProps.errors.isAgree && (
          <Text style={{ color: "red" }}>{formikProps.errors.isAgree}</Text>
        )}
      </View>

      <View>
        <Button
          title="Sign Up"
          style={styles.btnStyle}
          onPress={formikProps.handleSubmit}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
  },
  btnStyel: {
    backgroundColor: "tomato",
    color: "black",
  },
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 80,
  },
});
