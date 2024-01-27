import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const First = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: "100%" }}>
        <View style={styles.mainContainer}>
          <View>
            <Image
              source={require("../assets/img/first.png")}
              style={[styles.img]}
            />
          </View>
          <View>
            <View style={[styles.marginT]}>
              <Text style={[styles.font, styles.pa]}>
                WELCOME TO AGARWAL BOOKING
              </Text>
              <Text style={[styles.font, styles.txtCenter]}>Want To Stay?</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => navigation.navigate("home")}
            >
              <Text style={[styles.font, styles.txtCenter]}>
                LET'S GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    // width: "100%",
    // height: "100%",
  },
  marginT: {
    marginTop: 43,
  },
  font: {
    fontSize: 20,
    elevation: 4,
  },
  pa: {
    padding: 23,
  },
  flex: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "navy",
    color: "white",
    // width: "100%",
    width: 400,
    // borderRadius: 4,
    margin: 10,
  },
  img: {
    width: 500,
    height: 450,
    // height: "50%",
    // objectFit: "cover",
    resizeMode: "cover",
  },
  txtCenter: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    // wordSpacing: 23,
    // fontFamily: "'sans-serif',",
  },
});

export default First;
