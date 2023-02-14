import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Details: {name: string};
};

export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;
export type DetailsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'Details'
>;
