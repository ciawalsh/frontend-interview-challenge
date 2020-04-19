import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import * as T from '@app/styles/typography';
import brandColors from '@app/styles/brandColors';

interface Props {
  handleSubmit: () => void;
  loading: boolean;
  disabled: boolean;
}

const SubmitButton = ({handleSubmit, disabled, loading}: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: disabled
              ? brandColors.greys.dark
              : brandColors.button.blue,
          },
        ]}
        onPress={handleSubmit}
        disabled={disabled}>
        {!loading && (
          <T.H1 center white>
            Add Device
          </T.H1>
        )}
        {loading && <ActivityIndicator color={brandColors.greys.white} />}
      </TouchableOpacity>
    </View>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    borderRadius: 5,
    padding: 10,
  },
});

export default SubmitButton;
