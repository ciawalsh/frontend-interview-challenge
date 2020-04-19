import {domain} from './config';

interface DevicePayload {
  type: string;
  label: string;
  plantId: number;
}

const query = `mutation AddDevice($device: DeviceInput) {
  addDevice(device: $device) {
    id,
    label,
    type,
    plantId,
  }
}`;

const addDevice = async (device: DevicePayload) => {
  const response = await fetch(`${domain}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify({
      query,
      variables: {
        device,
      },
    }),
  });
  const devices = await response.json();
  return devices;
};

export default addDevice;
