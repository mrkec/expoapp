import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Button from "./Button";

const Card = ({ navigation }) => {
  return (
    <View style={[styles.CardContainer]}>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/hotel.jpg")} style={[styles.img]} />
      </View>
      <View>
        <View>
          <Text>Chikao</Text>
        </View>
        <View>
          <Text>1</Text>
        </View>
        <View>
          <Text>Rs 3000</Text>
        </View>
        <View>
          <Text>this plans includes .....</Text>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.cardBtn]}
            onPress={navigation.navigate("singlepage")}
          >
            <Text>More Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    padding: 5,
    height: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 175,
    height: 300,
    borderWidth: 1,
  },
  imgContainer: {},
  img: {
    width: 120,
    height: 120,
  },
  cardBtn: {
    backgroundColor: "lightcoral",
    padding: 5,
    width: 100,
    color: "white",
    fontSize: 18,
  },
});
export default Card;
