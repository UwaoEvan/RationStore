import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './src/store/reducers';
import MainNavigation from './src/navigation/MainNavigation';

const getFonts = () => Font.loadAsync({
  'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf')
});

const store = createStore(reducers);
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
}

