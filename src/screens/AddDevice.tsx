import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import * as T from '@app/styles/typography';
import brandColors from '@app/styles/brandColors';
import PlantCard from '@app/components/PlantCard';
import AddDeviceSubmitButton from '@app/components/AddDeviceSubmitButton';
import ChooseDeviceType from '@app/components/ChooseDeviceType';
import addDevice from '@app/graph/addDevice';

interface Props {
  plants: Plant[];
  dismissModal: () => void;
}

const AddDevice = ({plants, dismissModal}: Props) => {
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [chosenPlant, setChosenPlant] = useState<number>(0);
  const [chosenDeviceType, setChosenDeviceType] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const checkDisabled = () => {
    if (title !== '' && chosenPlant !== 0 && chosenDeviceType !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handlePlantPress = (chosenPlantId: number) => {
    setChosenPlant(chosenPlantId);
  };

  const handleDevicePress = (deviceChoice: string) => {
    setChosenDeviceType(deviceChoice);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const device = {
      type: chosenDeviceType,
      label: title,
      plantId: chosenPlant,
    };
    const request = await addDevice(device);
    if (request) {
      setTimeout(() => {
        setLoading(false);
        dismissModal();
      }, 500);
    }
  };

  useEffect(() => {
    checkDisabled();
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <T.B1>Title of your new device</T.B1>
        <TextInput
          onChangeText={(value) => setTitle(value)}
          placeholder={'My super sunflowers...'}
          style={styles.textInput}
        />
        <T.B1>Please choose the device type?</T.B1>
        <ChooseDeviceType
          chosenDeviceType={chosenDeviceType}
          handleDevicePress={handleDevicePress}
        />
        <T.B1>
          Please choose which plant you would like to associate with your chosen
          device type?
        </T.B1>
        <View style={styles.plantPicker}>
          {plants?.map((plant: Plant) => (
            <PlantCard
              key={`plant-${plant.id}`}
              plant={plant}
              chosenPlant={chosenPlant}
              handlePress={handlePlantPress}
            />
          ))}
        </View>
        <AddDeviceSubmitButton
          handleSubmit={handleSubmit}
          loading={loading}
          disabled={disabled}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  textInput: ViewStyle;
  plantPicker: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: brandColors.button.blue,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    marginTop: -10,
    marginLeft: 1,
    fontSize: 60,
    color: brandColors.greys.white,
  },
  textInput: {
    padding: 10,
    marginVertical: 10,
    borderBottomColor: brandColors.greys.darkest,
    borderBottomWidth: 1,
  },
  plantPicker: {
    marginVertical: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AddDevice;
