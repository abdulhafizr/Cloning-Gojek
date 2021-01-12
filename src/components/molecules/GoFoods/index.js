import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Foods } from '../../atoms';
import styles from './styles';

export default GoFoods = () => {
	return (

		<View style={styles.goFoods}>
			<ScrollView horizontal>
				<View style={styles.foodsWrapper}>
					<Foods />
					<Foods />
					<Foods />
				</View>
			</ScrollView>
		</View>
	)
}
