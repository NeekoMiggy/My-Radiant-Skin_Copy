import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/PageHeader";
import InputText from "../components/InputText";
import Property1DefaultProperty2 from "../components/Property1DefaultProperty2";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPage}>
      <PageHeader
        actionButtonText="Login"
        iconX1
        pageHeaderPosition="absolute"
        pageHeaderTop={60}
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
        iconXMarginLeft={-55}
        rightMarginTop="unset"
        rightTop={5}
        rightFontWeight="unset"
        rightFontFamily="unset"
        rightColor="unset"
        rightTextAlign="unset"
        rightWidth={23}
        rightHeight={23}
        onLoginPress={() => navigation.navigate("LoginPage")}
        onIconXPress={() => navigation.goBack()}
      />
      <InputText
        bG={require("../assets/bg1.png")}
        name1="Name"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={167}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-160}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#bdbdbd"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <Text style={styles.personalInformation}>Personal Information</Text>
      <InputText
        bG={require("../assets/bg1.png")}
        name1="Age"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={299}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-161}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#bdbdbd"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <View style={styles.inputtextParent}>
        <InputText
          bG={require("../assets/bg1.png")}
          name1="Gender"
          showName
          show={false}
          inputTextPosition="absolute"
          inputTextTop={0}
          inputTextRight="unset"
          inputTextLeft="50%"
          inputTextHeight={50}
          inputTextMarginLeft={-161.5}
          inputTextWidth={323}
          bGIconBorderRadius={8}
          nameColor="#bdbdbd"
          nameMarginTop={-9}
          showColor="#5db075"
          showMarginTop={-9}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <InputText
        bG={require("../assets/bg1.png")}
        name1="Email"
        showName
        show={false}
        inputTextPosition="absolute"
        inputTextTop={365}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-161}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#bdbdbd"
        nameMarginTop={-9}
        showColor="#5db075"
        showMarginTop={-9}
      />
      <InputText
        bG={require("../assets/bg1.png")}
        name1="Password"
        showName
        show
        inputTextPosition="absolute"
        inputTextTop={431}
        inputTextRight="unset"
        inputTextLeft="50%"
        inputTextHeight={50}
        inputTextMarginLeft={-161}
        inputTextWidth={323}
        bGIconBorderRadius={8}
        nameColor="#dec2ff"
        nameMarginTop={-9}
        showColor="#7d70ba"
        showMarginTop={-9}
      />
      <Pressable
        onPress={() => navigation.navigate("GettingStarted4")}
        style={styles.propertyPressable}
      >
        <Property1DefaultProperty2
          buttonText="Continue"
          continueButtonText={require("../assets/keyboard-arrow-right.png")}
          property1DefaultProperty2Position="absolute"
          property1DefaultProperty2Top={750}
          property1DefaultProperty2Left={16}
          property1DefaultProperty2Width={358}
          keyboardArrowRightIconWidth="10.06%"
          keyboardArrowRightIconRight="1.96%"
          keyboardArrowRightIconLeft="87.99%"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  personalInformation: {
    top: 136,
    left: 28,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.uI16Medium,
    color: Color.gray04,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    height: "23.2%",
    width: "4.18%",
    top: "37.8%",
    right: "4.77%",
    bottom: "39%",
    left: "91.05%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inputtextParent: {
    marginLeft: -160,
    top: 233,
    left: "50%",
    width: 323,
    height: 50,
    position: "absolute",
  },
  signUpPage: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUpPage;
