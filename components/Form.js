import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Button from "./Button";

const Form = ({ name }) => {
  return <TextInput style={styles.inputBox} placeholder={name} />;
};

const styles = StyleSheet.create({
  inputBox: {
    paddingHorizontal: 102,
    width: "100%",
    paddingVertical: 16,
    elevation: 5,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 20,
  },
});

export default Form;
