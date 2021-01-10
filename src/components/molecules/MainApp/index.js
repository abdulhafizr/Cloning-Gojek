import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import AppBar from '../AppBar';
import Gopay from '../Gopay';
import Features from '../Features';
import GoNews from '../GoNews';
import styles from './styles';

export default MainApp = () => {
	return (
		<View style={styles.mainApp}>
			<AppBar />
			<ScrollView>
				<Gopay />
				<Features />
				<GoNews />
			</ScrollView>
		</View>
	)
}
