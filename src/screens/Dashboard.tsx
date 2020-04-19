import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  TextStyle,
  ImageStyle,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';
import ReactNativeModal from 'react-native-modal';

import requestAll from '@app/graph/requestAll';
import * as T from '@app/styles/typography';
import brandColors from '@app/styles/brandColors';
import timeToText from '@app/utils/timeToText';
import AddDeviceButton from '@app/components/AddDeviceFloatingButton';
import AddDevice from '@app/screens/AddDevice';

const DashboardScreen = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: AppState) => state.user);

  const getData = async () => {
    setLoading(true);
    const request = await requestAll();
    const {devices: retrievedDevices, plants: retrievedPlants} = request.data;
    setDevices(retrievedDevices);
    setPlants(retrievedPlants);
    setLoading(false);
  };

  useEffect(() => {
    if (devices.length === 0) {
      getData();
    }
  }, [devices]);

  const popUpModal = () => {
    setShowModal(true);
  };

  const dismissModal = () => {
    getData();
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <T.H1 center>{`${timeToText()} ${user}`}</T.H1>
      <T.B1 center style={styles.subHeader}>
        Here are your devices...
      </T.B1>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getData} />
        }>
        {devices?.map((device: Device) => {
          return (
            <View style={styles.device} key={`device-${device.id}`}>
              <T.B1 bold center>
                {device.label}
              </T.B1>
              <View style={styles.deviceType}>
                <T.S1 grey>{device.type}</T.S1>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <AddDeviceButton handlePress={popUpModal} />
      <ReactNativeModal
        style={{}}
        isVisible={showModal}
        onBackButtonPress={dismissModal}
        onBackdropPress={dismissModal}
        onSwipeComplete={dismissModal}
        swipeDirection={'down'}>
        <AddDevice plants={plants} dismissModal={dismissModal} />
      </ReactNativeModal>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  device: ViewStyle;
  deviceType: ViewStyle;
  subHeader: TextStyle;
  icon: ImageStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: brandColors.greys.white,
    flex: 1,
    padding: 10,
  },
  device: {
    borderRadius: 10,
    margin: 10,
    padding: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: brandColors.greys.dark,
  },
  deviceType: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  subHeader: {
    padding: 10,
  },
  icon: {
    height: 28,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
