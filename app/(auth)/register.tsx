import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import * as Icons from "phosphor-react-native";
import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, View } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !password || !name) {
      Alert.alert("Sign Up", "Please enter all fields");
      return;
    }
    console.log("email:", email);
    console.log("password:", password);
    console.log("name:", name);
    console.log("good to go");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={24} />

        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"800"}>
            Let's
          </Typo>
          <Typo size={30} fontWeight={"800"}>
            Get Started
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>
            Create an account to track your expenses
          </Typo>
          <Input
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            icon={
              <Icons.User size={verticalScale(26)} color={colors.neutral200} />
            }
          />
          <Input
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
            icon={
              <Icons.Envelope
                size={verticalScale(26)}
                color={colors.neutral200}
              />
            }
          />
          <Input
            placeholder="Enter your password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            icon={
              <Icons.Lock size={verticalScale(26)} color={colors.neutral200} />
            }
          />
        </View>

        <Button loading={isLoading} onPress={handleSubmit}>
          <Typo fontWeight={"700"} color={colors.black} size={21}>
            Sign Up
          </Typo>
        </Button>

        {/* Footor */}
        <View style={styles.footer}>
          <Typo size={16} color={colors.text}>
            Already have an account?
          </Typo>
          <Pressable onPress={() => router.navigate("/(auth)/login")}>
            <Typo size={16} fontWeight={"700"} color={colors.primary}>
              Login
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    color: colors.text,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    color: colors.text,
    textAlign: "center",
    fontSize: verticalScale(16),
  },
});
