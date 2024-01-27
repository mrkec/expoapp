import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";

const BottomTab = ({}) => {
  return (
    <View style={[styles.bottom]}>
      <View style={[styles.bottomContainer]}>
        <Pressable onPress={() => {}}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <AntDesign name="notification" size={24} color="dodgerblue" />
            <Text>Notification</Text>
          </View>
        </Pressable>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialIcons name="switch-account" size={24} color="dodgerblue" />
          <Text>Account</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo name="login" size={23} color="dodgerblue" />
          <Text>Login</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Feather name="log-out" size={24} color="dodgerblue" />
          <Text>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    // flexDirection: "column",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: "white",
    // elevation: 4,
    // borderColor: "red",
    borderTopWidth: 0.34,
  },
});

export default BottomTab;
