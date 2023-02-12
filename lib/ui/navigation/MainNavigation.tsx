import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {MainStackParamList} from './ScreenProps';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={'Home'} component={HomeScreen} />
      <MainStack.Screen name={'Details'} component={DetailsScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
