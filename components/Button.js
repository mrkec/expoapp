import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ btnName }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          fontSize: 23,
          paddingHorizontal: 42,
          paddingVertical: 6,
          marginVertical: 30,
          backgroundColor: "teal",
          borderRadius: 4,
          color: "white",
          width: 200,
          textAlign: "center",
          // margin: "auto",
        }}
      >
        {btnName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default Button;
