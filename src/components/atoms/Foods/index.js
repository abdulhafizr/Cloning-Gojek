import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import logoGoFood from '../../../assets/images/logo-gofood.png';
import styles from './styles';

export default Foods = () => {
	return (
		<TouchableWithoutFeedback onPress={() => alert("Click")}>
			<View style={styles.foods}>
				<View style={styles.imageWrapper}>
					<Image source={{uri: 'https://images.unsplash.com/photo-1525351586624-ca549fbe02df?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'}} style={styles.foodsImage} />
					<Image source={logoGoFood} style={styles.goFoodCategory} />
					<View style={styles.overlay} />
				</View>
				<View style={styles.textWrapper}>
					<Text style={styles.textHead}>Go-Foods</Text>
					<Text style={styles.textChild}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
