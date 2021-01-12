import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import logoGoFood from '../../../assets/images/logo-gofood.png';
import styles from './styles';

export default Foods = () => {
	return (
		<TouchableWithoutFeedback onPress={() => alert("Click")}>
			<View style={styles.foods}>
				<View style={styles.imageWrapper}>
					<Image style={styles.foodsImage} source={{uri: 'https://images.unsplash.com/photo-1525351586624-ca549fbe02df?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'}} />
					<View style={styles.overlay} />
					<View style={styles.caption}>
						<Text style={styles.textHead}>Go-Foods</Text>
						<Text style={styles.textBody}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </Text>
					</View>
					<Image source={logoGoFood} style={styles.logoGoFoodCategory} />
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
