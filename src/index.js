import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { Platform } from 'react-native'

export default function Main() {
  return (
    <PaperProvider>
  <React.Fragment>
    {Platform.OS === 'web' ? (
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
    ) : null}
    <App />
  </React.Fragment>
</PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);