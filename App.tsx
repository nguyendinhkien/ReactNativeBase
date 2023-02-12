import {Button, Alert, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Messages} from './lib/commons/Messages';
import {
  DarkThemes,
  LightThemes,
  PreferencesContext,
} from './lib/commons/Themes';
import {Provider as PaperProvider, useTheme} from 'react-native-paper';
import {MainStackParamList} from './lib/ui/navigation/ScreenProps';
import {HomeScreen} from './lib/ui/screens/HomeScreen';
import './lib/translations/i18n';
import {observer} from 'mobx-react';
import AuthNavigation from './lib/ui/navigation/AuthNavigation';
import MainNavigation from './lib/ui/navigation/MainNavigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

function App() {
  const scheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = React.useState(scheme === 'dark');
  const [isLogined, setIsLogined] = React.useState(false);

  let theme = isThemeDark ? DarkThemes : LightThemes;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark, scheme]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  useEffect(() => {
    //auto theming with scheme
    return setIsThemeDark(scheme === 'dark');
  }, [scheme]);

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {isLogined ? <MainNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default observer(App);
