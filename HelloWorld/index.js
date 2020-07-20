/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import {name as appName} from './app.json';
import ExampleArrow from './src/examples/ExampleArrow';
import ExampleFunction from './src/examples/ExampleFunction';
import ExampleClass from './src/examples/ExampleClass';

AppRegistry.registerComponent(appName, () => AppNavigation);
