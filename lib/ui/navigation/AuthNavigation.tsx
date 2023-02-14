import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'LOGIN'}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
