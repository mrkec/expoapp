import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const PlanDetails = ({ navigation, route }) => {
  const [room, setroom] = useState({});
  const [loading, setLoading] = useState(false);
  const { id, checkInDate, checkOutDate, days } = route.params;

  const getroom = async () => {
    setLoading(true);
    const res = await axios.get(`http://192.168.9.250:8080/api/rooms/${id}`);
    // console.log(res);
    const room = await res.data;
    // console.log(room);
    setroom(room);
    setLoading(false);
  };

  useEffect(() => {
    getroom();
  }, []);
  const totalAmount = days * room.rentPerDay;

  const handleBooking = async () => {
    // console.log("booking kai ", checkInDateParse);
    const bookingDetails = {
      room,
      checkInDate,
      checkOutDate,
      days,
      totalAmount,
    };
    // console.log("booking", bookingDetails);
    const { data } = await axios.post(
      "http://192.168.9.250:8080/api/bookings/bookedroom",

      bookingDetails
    );
    if (data) {
      alert("booked Succesfully");
    }
  };
  return (
    <View style={{ padding: 5, marginTop: 40 }}>
      <Text style={[styles.txtBold]}>BOOKING DETAILS</Text>

      <ScrollView>
        <View style={[styles.plan]}>
          <View style={[styles.planContainer]}>
            {loading ? (
              <Text>Loading</Text>
            ) : (
              <>
                <View style={[styles.planChildContainer]}>
                  <View style={[styles.planImg]}>
                    {room && room.imageUrl && (
                      <Image
                        source={{ uri: room?.imageUrl[0] }}
                        style={{
                          width: "100%",
                          height: 200,
                          borderRadius: 4,
                          // resizeMode: "",
                        }}
                      />
                    )}
                  </View>
                  <View style={[styles.planContentContainer]}>
                    {room && (
                      <View>
                        <Text style={[styles.txtBold]}>
                          Name -
                          <Text style={{ color: "orange" }}>
                            {room?.name}
                            {/* Mustafa */}
                          </Text>
                        </Text>
                      </View>
                    )}
                    <View>
                      <Text style={[styles.txtBold]}>
                        Check-In-Date -
                        <Text style={{ color: "dodgerblue" }}>
                          {checkInDate}
                        </Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.txtBold]}>
                        Check-Out-Date -
                        <Text style={{ color: "lightcoral" }}>
                          {checkOutDate}
                        </Text>
                      </Text>
                    </View>
                    {room && (
                      <View>
                        <Text style={[styles.txtBold]}>
                          Price Per Day - Rs {room?.rentPerDay}/-
                        </Text>
                      </View>
                    )}
                    {room && (
                      <View>
                        <Text style={[styles.txtBold]}>Desc -{room?.desc}</Text>
                      </View>
                    )}

                    <View>
                      <Text style={[styles.txtBold]}>
                        Total Amount:Rs {totalAmount}/-
                      </Text>
                    </View>
                    <Pressable onPress={handleBooking}>
                      <View style={[styles.checkBtn]}>
                        <Text style={{ textAlign: "center", color: "white" }}>
                          CHECKOUT
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlanDetails;

const styles = StyleSheet.create({
  plan: {
    // elevation: 40,
    borderWidth: 0.3,
    padding: 10,
    // height: 500,
  },
  txtBold: {
    fontWeight: 400,
    fontSize: 20,
    padding: 6,
  },
  checkBtn: {
    padding: 5,
    width: 200,
    backgroundColor: "hotpink",
    borderWidth: 1,
    // marginLeft: 50,
    alignSelf: "center",
  },
});
