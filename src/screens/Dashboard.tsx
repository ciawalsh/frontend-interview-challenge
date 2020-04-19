import React, {useState, useEffect} from 'react';
import {StyleSheet, ViewStyle, View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import requestDevices from '@app/graph/requestDevices';
import timeToText from '@app/utils/timeToText';
import * as T from '@app/styles/typography';
import brandColors from '@app/styles/brandColors';

const DashboardScreen = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state: AppState) => state.user);

  const getData = async () => {
    setLoading(true);
    const request = await requestDevices();
    const {devices: retrievedDevices} = request.data;
    // console.log('retrieved: ', retrievedDevices);
    setDevices(retrievedDevices);
    setLoading(false);
  };

  useEffect(() => {
    if (devices.length === 0) {
      getData();
    }
  }, [devices]);

  return (
    <View style={styles.container}>
      <T.H1 center>{`${timeToText()} ${user}`}</T.H1>
      {loading && <ActivityIndicator />}
    </View>
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: brandColors.greys.white,
    flex: 1,
    padding: 10,
  },
});

export default DashboardScreen;
