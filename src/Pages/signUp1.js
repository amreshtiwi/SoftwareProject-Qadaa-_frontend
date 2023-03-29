import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import Colors from "../color";
import SignUpNavigationBar from "../Component/signUpNavigatorBar";
import Input from "../Component/input";
import SegmentedBtns from "../Component/segmentedBtns";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "../Component/dateTimePicker";
import Btn from "../Component/button";

function SignUp1({ navigation }) {
  const back = () => {
    navigation.navigate("login");
  };

  const nextSignUp = () => {
    navigation.navigate("signUp2");
  };

  const finalSignUp = () => {
    navigation.navigate("signUp3");
  };
  return (
    <View style={styles.signUpPage}>
      <View style={styles.bar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: Colors.lightVanilla,
              borderRadius: 70,
              width: 60,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 70,
              }}
              source={require("frontend/assets/logo.png")}
            />
          </View>
          <Text style={[styles.title, { marginHorizontal: 10 }]}>
            إنشاء حساب
          </Text>
        </View>
        <Pressable onPress={back}>
          <Ionicons name="arrow-back" size={24} color={Colors.lightVanilla} />
        </Pressable>
      </View>

      <View style={styles.signUpContent}>
        <SignUpNavigationBar pageNumber={1} goPage2={nextSignUp} goPage3={finalSignUp}></SignUpNavigationBar>
        <Text style={[styles.title2,{paddingTop:30}]}>المعلومات الشخصية</Text>
        <Input label="الإسم الرباعي"></Input>
        <Input label="رقم الهوية" keyboardType="numeric"></Input>
        <SegmentedBtns
          firstValue="ذكر"
          firstIcon="human-male"
          secValue="أنثى"
          secIcon="human-female"
          
        ></SegmentedBtns>
        <SegmentedBtns
          firstValue="محامي"
          firstIcon="scale-balance"
          secValue="مواطن"
          secIcon="human-male-female-child"
          
        ></SegmentedBtns>
        <DatePicker></DatePicker>
        <Input label="الحالة الإجتماعية"></Input>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Input label="المدينة" width="48%"></Input>
          <Input label="العنوان" width="48%"></Input>
        </View>
        <Btn value={'التالي'} handler={nextSignUp}></Btn>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpPage: {
    marginVertical: 50,
    marginHorizontal: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.lightVanilla,
  },
  bar: {
    flexDirection: "row",
    backgroundColor: Colors.darkGreen,
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.lightVanilla,
  },
  title2: {
    fontSize: 18,
    color: Colors.black,
    paddingVertical:10
  },
  signUpContent: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 30,
    // alignContent: "space-between",
    // justifyContent: "space-between",
  },
});

export default SignUp1;
