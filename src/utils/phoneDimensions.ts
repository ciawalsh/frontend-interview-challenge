import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const phoneDimensions = () => {
  return {
    height,
    width,
  };
};
