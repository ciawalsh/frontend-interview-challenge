// Graph API

interface Plant {
  name: string;
  id: number;
}

interface Device {
  id: number;
  type: string;
  label: string;
  plantId: number;
}

interface Query {
  plants: Plant[];
  devices: Device[];
}

// Redux

interface AppState {
  user: AuthState;
}

interface AuthState {
  user: string;
}
