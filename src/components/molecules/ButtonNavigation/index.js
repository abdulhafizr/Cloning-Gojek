import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default ButtonNavigation = () => {
	return (
		<View style={styles.buttonNavigationWrapper}>
	        <View style={styles.buttonNavigation}>
	          <View style={styles.iconButtonNavigation}>
	            <Icon name="home" style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <Icon name="shopping-bag" style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <Icon name="help-circle" style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <Icon name="message-square" style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <Icon name="user" style={styles.icons} />
	          </View>
	        </View>
	     </View>
	)
}
