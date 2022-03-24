import React, { useRef } from "react";
import { Animated, Button, Dimensions, Easing, StatusBar} from "react-native";

export default function App() {

  const windowHeight = Dimensions.get('window').height;
  const value = useRef(new Animated.Value(0)).current

  const startAnimate = () => {
    Animated.loop(
      Animated.sequence([
          Animated.timing(value, { toValue: windowHeight - 40, useNativeDriver: true, duration: 1000, easing: Easing.bounce, delay: 1000 }),
          Animated.timing(value, { toValue: 0, useNativeDriver: true, duration: 1500, easing: Easing.cubic }),
      ])
  ).start()
     }

  return <Animated.View style={{ transform: [{ translateY: value}], marginTop: StatusBar.currentHeight, height: 40, justifyContent: 'center', backgroundColor: '#4649ad' }}  >
      <Button title={'start animate'} onPress={startAnimate} />
  </Animated.View>
}