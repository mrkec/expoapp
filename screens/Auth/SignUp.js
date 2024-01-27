import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const handleRegister = async () => {
    try {
      const { data } = await axios.post(
        "https://agarwalshabha.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
          mobile,
          address,
        }
      );
      // console.log(data);
      if (data.success) {
        // setName("");r
        Alert.alert(data.message);
        navigation.navigate("login");
      } else {
        alert("error");
      }
    } catch (error) {
      // setName("");
      console.log(error);
    }
  };

  return (
    <View style={{ height: "100%" }}>
      <View style={styles.formContainer}>
        <View>
          <Text style={[styles.pa]}>REGISTER FOR A NEW ACCOUNT?</Text>
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="NAME*"
            style={[styles.input]}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="EMAIL*"
            style={[styles.input]}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="PHONE_NO*"
            style={[styles.input]}
            onChangeText={(text) => setMobile(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="Password*"
            style={[styles.input]}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="ADDRESS*"
            style={[styles.input]}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TouchableOpacity style={[styles.btn]} onPress={handleRegister}>
            <Text style={[styles.txtCenter, styles.font]}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.form]}>
          <Text style={[styles.txtCenter, styles.font]}>
            ALREADY HAVE A Account ?
            <Text
              style={{ color: "dodgerblue", fontWeight: "bold" }}
              onPress={() => navigation.navigate("login")}
            >
              LOGIN?
            </Text>
          </Text>
        </View>
        {/* <View style={[styles.form, styles.dir]}>
          <View style={[styles.size]}>
            <AntDesign name="google" size={24} color="white" />
          </View>
          <View style={[styles.size]}>
            <Entypo name="facebook" size={24} color="white" />
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 25,
    backgroundColor: "lightgray",
    height: "100%",
  },
  form: {
    backgroundColor: "white",
    elevation: 4,
    width: "100%",
    padding: 20,
    // height: 50,
  },
  input: {
    borderWidth: 2,
    padding: 5,
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
  dir: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "lightcoral",
    color: "white",
    width: 200,
    borderRadius: 4,
    margin: 10,
  },
  img: {
    width: 300,
    height: 400,
    objectFit: "cover",
  },
  txtCenter: {
    textAlign: "center",
    textTransform: "uppercase",
    // color: "white",
  },
  size: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    // padding: 10,
    // borderWidth: 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignUp;
