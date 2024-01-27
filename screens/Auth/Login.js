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
import { useTokenContext } from "../../store/TokenContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const { auth, setAuth } = useTokenContext();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // console.log(auth);
  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://192.168.9.250:8080/api/auth/login",
        {
          name,
          password,
        }
      );
      // console.log(data);
      if (data.success) {
        setAuth({
          ...auth,
          token: data.token,
          user: data.user,
        });
        await AsyncStorage.setItem("auth", JSON.stringify(data));
        // setName("");r
        Alert.alert("login is Sucessfully");
        navigation.navigate("home");
      }
      // setName("");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(auth);
  return (
    <View style={{ height: "100%" }}>
      <View style={styles.formContainer}>
        <View>
          <Text style={[styles.pa, styles.font]}>LOGIN FOR YOUR ACCOUNT?</Text>
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="NAME*"
            style={[styles.input]}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TextInput
            placeholder="PASSWORD*"
            style={[styles.input]}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={[styles.form]}>
          <TouchableOpacity style={[styles.btn]} onPress={handleLogin}>
            <Text style={[styles.txtCenter, styles.font]}>LOGIN NOW</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.form]}>
          <Text style={[styles.txtCenter, styles.font]}>
            Don't Have A Account ?{" "}
            <Text
              style={{ color: "dodgerblue", fontWeight: "bold" }}
              onPress={() => navigation.navigate("signup")}
            >
              REGISTER FIRST?
            </Text>
          </Text>
        </View>
        <View style={[styles.form, styles.dir]}>
          <View style={[styles.size]}>
            <AntDesign name="google" size={24} color="white" />
          </View>
          <View style={[styles.size]}>
            <Entypo name="facebook" size={24} color="white" />
          </View>
        </View>
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

    // backgroundColor: "red",
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
    backgroundColor: "dodgerblue",
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
    textTransform: "capitalize",
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
export default Login;
