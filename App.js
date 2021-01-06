import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = ()=> {
  return (
    <View style={styles.app}>
      <View style={styles.mainApp}></View>

      <View style={styles.buttonNavigationWrapper}>
        <View style={styles.buttonNavigation}>
          <View style={styles.iconButtonNavigation}>
            <Text>
              Home
            </Text>
          </View>
          <View style={styles.iconButtonNavigation}>
            <Text>
              Orders
            </Text>
          </View>
          <View style={styles.iconButtonNavigation}>
            <Text>
              Help
            </Text>
          </View>
          <View style={styles.iconButtonNavigation}>
            <Text>
              Inbox
            </Text>
          </View>
          <View style={styles.iconButtonNavigation}>
            <Text>
              Account
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  mainApp: {
    flex: 1,
    backgroundColor: 'black'
  },
  buttonNavigationWrapper: {
    height: 54,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  buttonNavigation: {
    flexDirection: 'row',
  },
  iconButtonNavigation: {
    flex: 1,
    alignItems: 'center',
  }
});

export default App;
