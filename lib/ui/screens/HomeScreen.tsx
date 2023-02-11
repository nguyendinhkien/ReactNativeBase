import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {HomeProps} from '../navigation/ScreenProps';
import {useTheme} from 'react-native-paper';

export function HomeScreen({navigation}: HomeProps) {
  const theme = useTheme();
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('Home is focused');

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('Home is unfocused');
      };
    }, []),
  );
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.error,
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {name: 'Nguyen Dinh Kien'})
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
