import './global.css';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
        <Stack.Screen name="(stack)" options={{ headerShown: false, presentation: "modal"}}/>
    </Stack>
  )
}

export default RootLayout