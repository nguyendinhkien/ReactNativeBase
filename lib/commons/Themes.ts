import {DefaultTheme, Theme} from '@react-navigation/native';
import React from 'react';

export interface ITheme {
  dark: boolean;
  colors: IColors;
}

interface IColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  error: string;
}

const darkColors: IColors = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
  error: 'red',
};
const lightColors: IColors = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
  error: 'pink',
};

export const DarkThemes: ITheme = {
  dark: true,
  colors: darkColors,
};
export const LightThemes: ITheme = {
  dark: false,
  colors: lightColors,
};


export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
