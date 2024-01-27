import React, { useEffect, useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { differenceInDays } from "date-fns";

import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const AllPlans = ({ navigation }) => {
  const [plans, setPlans] = useState([]);
  const [startShowDatePicker, setStartShowDatePicker] = useState(false);
  const [endShowDatePicker, setEndShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [formatCheckInDate, setFormatCheckInDate] = useState();
  const [formatCheckOutDate, setFormatCheckOutDate] = useState();
  const [duplicateRoom, setDuplicateRoom] = useState([]);

  const dbformateCheckInDate = startDate;
  const dbformateCheckOutDate = endDate;
  // const momentCheckInDate = moment(formatCheckInDate);
  // const momentCheckOutDate = moment(formatCheckOutDate);

  const tempRooms = [];
  // let isAvaliabilty = false;

  const [days, setDays] = useState(0);

  // todo handle start date
  const handleStartDateChange = (event, selectedDate) => {
    setStartShowDatePicker(false);
    if (event.type == "set") {
      if (selectedDate < startDate) {
        console.log("you cant");
      } else {
        setStartDate(selectedDate);
        setFormatCheckInDate(moment(selectedDate).format("DD-MM-YYYY"));
      }
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    setEndShowDatePicker(false);
    if (event.type == "set") {
      if (selectedDate < startDate) {
        console.log("you cant");
      } else {
        setEndDate(selectedDate);
        setFormatCheckOutDate(moment(selectedDate).format("DD-MM-YYYY"));
      }
    }
  };
  const calculateNumberOfDays = () => {
    if (formatCheckOutDate && formatCheckOutDate) {
      const daysDifference = differenceInDays(
        dbformateCheckOutDate,
        dbformateCheckInDate
      );
      if (daysDifference < 0) {
        return 0;
      }

      setDays(daysDifference);
    }
    return 0;
  };

  const getAllPlans = async () => {
    const { data } = await axios.get(
      "https://agarwalshabha.onrender.com/api/rooms/"
    );
    // console.log(data);
    if (data) {
      setPlans(data);
      setDuplicateRoom(data);
    }
  };

  useEffect(() => {
    calculateNumberOfDays();
  }, [formatCheckInDate && formatCheckOutDate]);

  // ! get all plans data
  useEffect(() => {
    getAllPlans();
  }, []);
  // console.log(plans[0].name);

  // const handleSearch = () => {
  //   for (const bookingRoom of duplicateRoom) {
  //     if (bookingRoom.currentBooking.length > 0) {
  //       for (const iterator of bookingRoom.currentBooking) {
  //         console.log(typeof iterator.checkInDate);
  //         let day1 = iterator.checkInDate;
  //         let day2 = iterator.checkOutDate;

  //         let date1 = moment(day1, "DD-MM-YYYY");
  //         let date2 = moment(day2, "DD-MM-YYYY");

  //         if (
  //           !moment(formatCheckInDate, "DD-MM-YYYY").isSameOrBefore(date2) &&
  //           !moment(formatCheckOutDate, "DD-MM-YYYY").isSameOrAfter(date1)
  //         ) {
  //           isAvaliabilty = true;
  //         }
  //       }
  //     }
  //     if (isAvaliabilty == true || bookingRoom.currentBooking.length == 0) {
  //       tempRooms.push(bookingRoom);
  //     }
  //     setPlans(tempRooms);
  //   }
  // };
  const handleSearch = () => {
    for (const bookingRoom of duplicateRoom) {
      let isAvaliabilty = false; // Reset the flag for each room

      if (bookingRoom.currentBooking.length > 0) {
        for (const iterator of bookingRoom.currentBooking) {
          let day1 = iterator.checkInDate;
          let day2 = iterator.checkOutDate;

          let date1 = moment(day1, "DD-MM-YYYY");
          let date2 = moment(day2, "DD-MM-YYYY");

          if (
            moment(formatCheckInDate, "DD-MM-YYYY").isSameOrBefore(date2) &&
            moment(formatCheckOutDate, "DD-MM-YYYY").isSameOrAfter(date1)
          ) {
            isAvaliabilty = true;
            break; // No need to check further if there's an overlap
          }
        }
      }

      if (!isAvaliabilty) {
        tempRooms.push(bookingRoom);
      }
    }

    setPlans(tempRooms);
  };

  const handleNavigation = (p) => {
    navigation.navigate("plandetails", {
      id: p._id,
      checkInDate: formatCheckInDate,
      checkOutDate: formatCheckOutDate,
      days: days,
    });
  };

  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            padding: 14,
            color: "white",
            fontWeight: "bold",
            borderBottomWidth: 1,
            marginTop: 40,
            backgroundColor: "black",
          }}
        >
          CHECK THE AVABILITY OF PLANS:
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",

            marginVertical: 20,
            backgroundColor: "white",
            padding: 7,
            borderWidth: 1,
          }}
        >
          <TouchableOpacity onPress={() => setStartShowDatePicker(true)}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "green" }}>Check-In-Date</Text>

              <AntDesign name="calendar" size={24} color="#ff0066" />
            </View>
          </TouchableOpacity>
          {startShowDatePicker && (
            <>
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={handleStartDateChange}
              />
            </>
          )}
          <TouchableOpacity onPress={() => setEndShowDatePicker(true)}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "orange" }}>Check-Out-Date</Text>

              <AntDesign name="calendar" size={24} color="#ff0066" />
            </View>
          </TouchableOpacity>

          {endShowDatePicker && (
            <DateTimePicker
              value={endDate}
              mode="date"
              onChange={handleEndDateChange}
            />
          )}
          <TouchableOpacity onPress={handleSearch}>
            <View
              style={{
                backgroundColor: "#ff0066",
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
                width: 100,
                borderRadius: 2,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text>
            CHECK-IN-DATE:
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
              {formatCheckInDate}
            </Text>
          </Text>
        </View>
        <View>
          <Text>
            CHECK-OUT-DATE:
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "teal" }}>
              {formatCheckOutDate}
            </Text>
          </Text>
        </View>
        <View>
          <Text>
            TOTAL_NO_DAYS:
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "teal" }}>
              {days}
            </Text>
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ padding: 10, marginVertical: 5 }}>
          <View>
            {plans?.map((p) => {
              return (
                <View style={[styles.eventsChildContainer]} key={p._id}>
                  <View style={{ flex: 1, width: "50%" }}>
                    <Image
                      source={{ uri: p?.imageUrl[0] }}
                      style={[styles.img]}
                    />
                  </View>
                  <View style={{ flex: 1, width: "50%" }}>
                    <View>
                      <Text style={[styles.title]}>{p?.name}</Text>
                    </View>
                    <View>
                      <Text style={[styles.freeBtn]}>Free AirPot Taxi</Text>
                    </View>
                    <View>
                      <Text style={[]}>
                        Studio Appartment with Air Conditioning
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.desc]}>{p?.desc}</Text>
                    </View>
                    <View></View>
                    <View>
                      <Text style={[styles.excellent]}>Excellent</Text>
                      <View style={[styles.flexDir]}>
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 40,
                            borderWidth: 0.3,
                          }}
                        >
                          <AntDesign name="staro" size={24} color="#FF9529" />
                        </View>
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 40,
                            borderWidth: 0.3,
                          }}
                        >
                          <AntDesign name="staro" size={24} color="#FF9529" />
                        </View>
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 40,
                            borderWidth: 0.3,
                          }}
                        >
                          <AntDesign name="staro" size={24} color="#FF9529" />
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={[styles.free]}>
                        Price Per Day {p?.rentPerDay}/-
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 2 }}>
                      {formatCheckInDate && formatCheckOutDate && (
                        <View>
                          <Pressable
                            onPress={() => {
                              handleNavigation(p);
                            }}
                          >
                            <Text style={[styles.moreDetails]}>Book Mow</Text>
                          </Pressable>
                        </View>
                      )}
                      <View>
                        <Pressable>
                          <Text style={[styles.moreDetails]}>View Details</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
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
      {/* <BottomTab /> */}
    </>
  );
};

const styles = StyleSheet.create({
  freeBtn: {
    backgroundColor: "dodgerblue",
    color: "white",
    borderRadius: 3,
    padding: 6,
    width: 110,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "darkgreen",
  },
  desc: {
    fontSize: 16,
    color: "green",
    fontWeight: 600,
  },
  free: {
    color: "green",
    fontWeight: "bold",
    fontSize: 23,
  },
  flexDir: {
    flexDirection: "row",
    gap: 2,
  },
  excellent: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    fontWeight: "bold",
  },
  moreDetails: {
    backgroundColor: "tomato",
    width: 100,
    padding: 3,
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
    // fontWeight: 300,
    // fontSize: 12,
  },

  imgContainer: {},

  eventsChildContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 5,
    gap: 2,
    height: 400,
  },

  img: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
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
export default AllPlans;
