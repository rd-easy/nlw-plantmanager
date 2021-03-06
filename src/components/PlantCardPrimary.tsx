import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string
  }
}

export function PlantCardPrimary({
  data,
  ...rest
}: PlantProps) {

  return (
    <RectButton
      style={styles.Btn}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={70}
      />
      <Text style={styles.Txt}>
        {data.name}
      </Text>

    </RectButton>
  )
}

const styles = StyleSheet.create({
  Btn: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    margin: 10,
    alignItems: 'center'
  },

  Txt: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16
  }
})