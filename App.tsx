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
import {RootStackParamList} from './lib/ui/navigation/ScreenProps';
import {HomeScreen} from './lib/ui/screens/HomeScreen';
import {DetailsScreen} from './lib/ui/screens/LoginScreen';
import './lib/translations/i18n';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const scheme = useColorScheme();
  const [isThemeDark, setIsThemeDark] = React.useState(scheme === 'dark');

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
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: `${scheme}`}}></Stack.Screen>
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={({route}) => ({
                title: `${theme.colors.error}`,
                headerRight: () => (
                  <Button
                    onPress={() =>
                      Alert.alert(
                        Messages.getMessages(
                          Messages.MESSAGES.ERROR_NETWORKING,
                          1.2,
                        ),
                      )
                    }
                    title="Info"
                  />
                ),
              })}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
