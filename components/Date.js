import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { format } from "date-fns";

const DateRangePicker = () => {
  const [startShowDatePicker, setStartShowDatePicker] = useState(false);
  const [endShowDatePicker, setEndShowDatePicker] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const fromDate = format(startDate, "dd-MM-yyyy");
  const toDate = format(endDate, "dd-MM-yyyy");

  const handleStartDateChange = (event, selectedDate) => {
    setStartDate(selectedDate || startDate);
    setStartShowDatePicker(false);
  };

  const handleEndDateChange = (event, selectedDate) => {
    setEndDate(selectedDate || endDate);
    setEndShowDatePicker(false);
  };

  return (
    <>
      <View>
        <Text>Firstly Provided The Dates</Text>
      </View>
    </>
  );
};

export default DateRangePicker;
