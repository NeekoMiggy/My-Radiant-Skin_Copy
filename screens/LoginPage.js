import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputText from "../components/InputText";
import ButtonPrimary from "../components/ButtonPrimary";
import PageHeader from "../components/PageHeader";
import { FontSize, FontFamily, Color } from "../GlobalStyles";


const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <InputText
        bG={require("../assets/bg4.png")}
        name1="Email"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={255}
        inputTextRight={16}
        inputTextLeft={16}
        inputTextHeight={50}
        inputTextMarginLeft="unset"
        inputTextWidth="unset"
        bGIconBorderRadius={8}
        nameColor="#dec2ff"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <InputText
        bG={require("../assets/bg4.png")}
        name1="Password"
        showName
        show
        inputTextPosition="absolute"
        inputTextTop={321}
        inputTextRight={16}
        inputTextLeft={16}
        inputTextHeight={50}
        inputTextMarginLeft="unset"
        inputTextWidth="unset"
        bGIconBorderRadius={8}
        nameColor="#dec2ff"
        nameMarginTop={-9}
        showColor="#7d6fba"
        showMarginTop={-9}
      />
      <ButtonPrimary
        buttonText="Log In"
        showClickMe
        buttonPrimaryPosition="absolute"
        buttonPrimaryBackgroundColor="#93867f"
        buttonPrimaryRight="unset"
        buttonPrimaryBottom={324}
        buttonPrimaryLeft="50%"
        buttonPrimaryHeight="unset"
        buttonPrimaryWidth={358}
        buttonPrimaryTop="unset"
        buttonPrimaryMarginLeft={-179}
        onButtonPrimaryPress={() => navigation.navigate("Feed")}
      />
      <Text style={styles.forgotYourPassword}>Forgot your password?</Text>
      <PageHeader
        actionButtonText="Sign Up"
        iconX1
        pageHeaderPosition="absolute"
        pageHeaderTop={10}
        pageHeaderRight={16}
        pageHeaderLeft={16}
        pageHeaderMarginLeft="unset"
        pageHeaderBackgroundColor="unset"
        pageHeaderWidth="unset"
        leftFontWeight="unset"
        leftFontFamily="unset"
        leftColor="unset"
        leftTextAlign="unset"
        iconXTop={0}
        iconXLeft="50%"
        iconXWidth="unset"
        iconXHeight="unset"
        iconXMarginLeft={-43}
        rightMarginTop="unset"
        rightTop={5}
        rightFontWeight="unset"
        rightFontFamily="unset"
        rightColor="unset"
        rightTextAlign="unset"
        rightWidth={23}
        rightHeight={23}
        onLoginPress={() => navigation.navigate("SignUpPage")}
        onIconXPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  forgotYourPassword: {
    position: "absolute",
    marginLeft: -89,
    bottom: 280,
    left: "50%",
    fontSize: FontSize.uI16Semi_size,
    fontWeight: "600",
    fontFamily: FontFamily.uI16Semi,
    color: Color.colorMediumpurple_100,
    textAlign: "center",

  },
  loginPage: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoginPage;
