import React from 'react';
import { View, Text } from 'react-native';
import { ButtonNavigation, MainApp } from '../../components';
import styles from './styles';

export default HomePage = () => {
	return (
		<View style={styles.app}>
			<MainApp />

	      	<ButtonNavigation />
	    </View>
	)
}