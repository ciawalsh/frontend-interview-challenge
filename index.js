/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {RootScreen} from './src/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootScreen);
