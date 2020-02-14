import React, {Component, memo} from 'react';
import {View, StyleSheet} from 'react-native';

//Redux
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
//Navigation
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Style
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as theme} from '@eva-design/eva';

//Components
import Dashboard from './src/screens/Dashboard';

//Methods
import {
  logoutUser,
  signInUser,
  loginUser,
  sendEmailWithPassword,
} from './src/auth/auth-api';

//State
const initialState = {
  res: 's',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GetData':
      return {res: 'xxx'};
    default:
      return state;
  }
};

const store = createStore(reducer);

const Stack = createStackNavigator();

///////////////////////////////////////////////////////////////////

const Core = () => {
  return (
    <Stack.Navigator initialRouteName="InitialRoute">
      <Stack.Screen name="InitialRoute" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={theme}>
          <NavigationContainer>
            <Core />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    );
  }
}

const HomeScreen = ({Dashboard}) => {
  const navigation = useNavigation();

  return (
    <>
      <Layout style={styles.container}>
        <Button
          style={styles.reflex}
          onPress={() => navigation.navigate('Dashboard')}>
          Reflex
        </Button>
        <Button
          style={styles.podcast}
          onPress={() => navigation.navigate('Dashboard')}>
          Podcast
        </Button>
      </Layout>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  podcast: {},
  reflex: {},
});