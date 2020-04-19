import React from 'react';
import {View, StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';

import {phoneDimensions} from '@app/utils/phoneDimensions';
import brandColors from '@app/styles/brandColors';
import * as T from '@app/styles/typography';

const PHONE_WIDTH = phoneDimensions().width;
const CARD_WIDTH = PHONE_WIDTH / 2.5;

interface Props {
  chosenDeviceType: string;
  handleDevicePress: (choice: string) => void;
}

const ChooseDeviceType = ({chosenDeviceType, handleDevicePress}: Props) => {
  const onPress = (choice: string) => {
    handleDevicePress(choice);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              chosenDeviceType === 'sensor'
                ? brandColors.button.green
                : brandColors.greys.white,
          },
        ]}
        onPress={() => onPress('sensor')}>
        <T.S1 center>Sensor</T.S1>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              chosenDeviceType === 'tap'
                ? brandColors.button.green
                : brandColors.greys.white,
          },
        ]}
        onPress={() => onPress('tap')}>
        <T.S1 center>Tap</T.S1>
      </TouchableOpacity>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  button: {
    marginHorizontal: 4,
    padding: 10,
    width: CARD_WIDTH,
    borderRadius: 5,
    borderColor: brandColors.greys.medium,
    borderWidth: 1,
  },
});

export default ChooseDeviceType;
