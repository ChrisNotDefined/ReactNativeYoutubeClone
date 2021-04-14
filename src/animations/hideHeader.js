import { Animated } from "react-native";

export const scrollY = new Animated.Value(0);

export const diffClamp = Animated.diffClamp(scrollY, 0, 45);

// const translateY = scrollY.interpolate({
//   inputRange: [0, 45],
//   outputRange: [0, -45],
// });

export const translateY = diffClamp.interpolate({
  inputRange: [0, 45],
  outputRange: [0, -45],
});
