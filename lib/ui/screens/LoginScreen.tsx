import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PreferencesContext } from '../../commons/Themes';
import { DetailsScreenProps } from '../navigation/ScreenProps';
import { useTheme } from 'react-native-paper';

export function DetailsScreen({navigation, route}: DetailsScreenProps) {
    const {name} = route.params;
    const theme = useTheme();
    const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>{name}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details', {name: 'KienND 2'})}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Update the title" onPress={toggleTheme} />
      </View>
    );
  }

const styles = StyleSheet.create({})