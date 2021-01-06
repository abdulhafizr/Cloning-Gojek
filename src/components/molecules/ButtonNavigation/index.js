import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default ButtonNavigation = () => {
	return (
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
	)
}
