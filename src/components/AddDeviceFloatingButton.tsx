import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';

import brandColors from '@app/styles/brandColors';

interface Props {
  handlePress: () => void;
}

const AddDevice = ({handlePress}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: brandColors.button.blue,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    marginTop: Platform.OS === 'ios' ? -10 : -13,
    marginLeft: Platform.OS === 'ios' ? 1 : 0,
    fontSize: 60,
    color: brandColors.greys.white,
  },
});

export default AddDevice;
