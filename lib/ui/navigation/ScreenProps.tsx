import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Details: {name: string};
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
