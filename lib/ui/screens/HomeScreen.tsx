import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {HomeProps} from '../navigation/ScreenProps';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {callAPI} from '../../commons/RestClient';
import {ENDPOINT} from '../../commons/Endpoint';

export function HomeScreen({navigation}: HomeProps) {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.error,
      }}>
      <Text>{t('welcome')}</Text>
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
