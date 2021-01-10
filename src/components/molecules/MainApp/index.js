import React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../AppBar';
import Gopay from '../Gopay';
import { Icons } from '../../atoms'; 
import styles from './styles';

export default MainApp = () => {
	return (
		<View style={styles.mainApp}>
			<AppBar />
			<Gopay />
			<Icons  />
		</View>
	)
}
