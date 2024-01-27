import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={{ height: "100%", paddingTop: 54 }}>
      <View style={styles.homeContainer}>
        {/* todo home header */}
        <View style={[styles.homeHeader]}>
          <View style={[styles.dir]}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Agarwal-booking
              </Text>
            </View>
            <View style={[styles.dir, styles.left]}>
              <View>
                <Pressable
                  onPress={() => {
                    navigation.navigate("about");
                  }}
                >
                  <Text style={[styles.btn]}>ABOUT</Text>
                </Pressable>
              </View>
              {/* <View>
                <Pressable>
                  <Text style={[styles.btn]}>Login</Text>
                </Pressable>
              </View> */}
            </View>
          </View>
          <View style={[styles.dir]}>
            {/* <View style={[styles.dir, styles.border, styles.marginGap]}>
              <AntDesign name="home" size={20} color="white" />
              <Text style={{ color: "white" }}>Home</Text>
            </View> */}
            <Pressable
              onPress={() => {
                navigation.navigate("plans");
              }}
            >
              <View style={[styles.dir, styles.border, styles.marginGap]}>
                <FontAwesome name="hotel" size={20} color="white" />
                <Text style={{ color: "white" }}>Plan</Text>
              </View>
            </Pressable>
            <View style={[styles.dir, styles.border, styles.marginGap]}>
              <MaterialCommunityIcons
                name="view-gallery"
                size={20}
                color="white"
              />
              <Text style={{ color: "white" }}>Gallery</Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("contact");
              }}
            >
              <View style={[styles.dir, styles.border, styles.marginGap]}>
                <AntDesign name="contacts" size={20} color="white" />
                <Text style={{ color: "white" }}>Contact</Text>
              </View>
            </Pressable>
          </View>
          <View>
            <Text style={[styles.headerMainText]}>
              A lifeTime of discount ? It's Genius
            </Text>
          </View>
          <View>
            <Text style={[styles.headerText]}>
              Get Rewared For Your Booking
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("contact")}>
            <View style={[styles.sBtn, styles.btnColor]}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  textTransform: "uppercase",
                }}
              >
                Need Help ?
              </Text>
            </View>
          </Pressable>
        </View>

        {/* serach Coantainer */}

        <View style={[styles.searchContainer, styles.dir]}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <EvilIcons name="search" size={30} color="black" />
            <TextInput placeholder="Search Events" />
          </View>
          {/* <View>
            <DateRangePicker />
          </View> */}
          <View>
            <Pressable>
              <Text style={[styles.searchBtn]}>Search</Text>
            </Pressable>
          </View>
        </View>

        {/* imageCoantainer */}
        <ScrollView>
          <View style={[styles.marginT, styles.events]}>
            <Text style={[]}>ALL EVENTS</Text>
            <View style={[styles.eventsContainer]}>
              <View style={[styles.eventsChildContainer]}>
                <View
                  style={{
                    padding: 5,
                    elevation: 1,

                    borderRadius: 2,
                  }}
                >
                  <View style={[styles.eventsImg]}>
                    <Image
                      source={require("../assets/img/marriage.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <View>
                      <MaterialIcons name="event" size={24} color="hotpink" />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        Marriage
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    padding: 5,
                    elevation: 1,

                    borderRadius: 2,
                  }}
                >
                  <View style={[styles.eventsImg]}>
                    <Image
                      source={require("../assets/img/kitty.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <View>
                      <MaterialIcons name="event" size={24} color="hotpink" />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        Kitty
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[styles.eventsChildContainer]}>
                <View
                  style={{
                    padding: 5,
                    elevation: 1,

                    borderRadius: 2,
                  }}
                >
                  <View style={[styles.eventsImg]}>
                    <Image
                      source={require("../assets/img/birth.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <View>
                      <MaterialIcons name="event" size={24} color="hotpink" />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        BirthDay
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    padding: 5,
                    elevation: 1,

                    borderRadius: 2,
                  }}
                >
                  <View style={[styles.eventsImg]}>
                    <Image
                      source={require("../assets/img/ring.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <View>
                      <MaterialIcons name="event" size={24} color="hotpink" />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 20,
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        Ring
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* <BottomTab /> */}
        <View style={[styles.bottom]}>
          <View style={[styles.bottomContainer]}>
            <Pressable onPress={() => {}}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="notification" size={24} color="dodgerblue" />
                <Text>Notification</Text>
              </View>
            </Pressable>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MaterialIcons
                name="switch-account"
                size={24}
                color="dodgerblue"
              />
              <Text>Account</Text>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("login");
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Entypo name="login" size={23} color="dodgerblue" />
                <Text>Login</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("signup");
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <FontAwesome name="registered" size={25} color="dodgerblue" />
                <Text>SignUp</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
  imageChild: {
    width: 200,
    height: 200,
    // borderWidth: 1,
  },
  homeContainer: {
    flex: 1,

    width: "100%",

    // height: "100%",
  },
  left: {
    marginLeft: 70,
  },
  homeHeader: {
    backgroundColor: "navy",
    height: 300,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  sBtn: {
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // backgroundColor: "white",
    color: "black",
    width: 130,
    // borderRadius: ,
    // margin: 4,
    marginVertical: 20,
    textAlign: "center",
  },
  headerMainText: {
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },

  searchContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 3,
    // borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    top: 240,
    width: "100%",
    // gap: 5,
  },
  input: {
    padding: 5,
    width: 300,
    marginLeft: 23,
    // elevation: 4,
  },
  marginT: {
    marginTop: 20,
  },

  pa: {
    padding: 20,
  },

  flex: {
    justifyContent: "center",
    alignItems: "center",
  },
  dir: {
    flexDirection: "row",
    gap: 8,
  },
  btn: {
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    color: "black",

    margin: 4,
  },
  img: {
    width: 150,
    height: 150,
  },

  size: {
    width: 30,
    height: 30,
    backgroundColor: "black",

    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  border: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 95,
    height: 30,
    // padding: ,
  },
  marginGap: {
    marginHorizontal: 2,
    marginVertical: 10,
  },
  btnColor: {
    backgroundColor: "tomato",
  },
  searchBtn: {
    backgroundColor: "teal",
    padding: 8,
    // paddingHorizontal: 20,
    width: 100,
    color: "white",
    textAlign: "center",
  },
  eventsChildContainer: {
    position: "relative",
    // zIndex: -999,
    flexDirection: "row",
    // gap: 3,
    justifyContent: "space-evenly",
    paddingVertical: 10,
    // flexWrap: "wrap",
    // borderWidth: 2,
  },
  eventsImg: {
    width: 150,
    height: 150,
  },
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
export default Home;
