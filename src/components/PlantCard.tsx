import React from 'react';
import {StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';

import {phoneDimensions} from '@app/utils/phoneDimensions';
import brandColors from '@app/styles/brandColors';
import * as T from '@app/styles/typography';

const PHONE_WIDTH = phoneDimensions().width;
const CARD_WIDTH = PHONE_WIDTH / 4.1;

interface Props {
  plant: Plant;
  chosenPlant: number;
  handlePress: (chosen: number) => void;
}

const PlantCard = ({plant, chosenPlant, handlePress}: Props) => {
  const active = chosenPlant === plant.id;

  const onPress = () => {
    handlePress(plant.id);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: active
            ? brandColors.button.green
            : brandColors.greys.white,
        },
      ]}>
      <T.S1 center>{plant.name}</T.S1>
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: CARD_WIDTH,
    borderRadius: 5,
    margin: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: brandColors.greys.medium,
  },
});

export default PlantCard;
