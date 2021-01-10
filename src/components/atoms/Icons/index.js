import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default Icons = ({icon = 'home', caption = 'Home'}) => {
	return (
		<View style={styles.icons}>
			<Icon 
				name={icon}
				style={styles.icon}
			/>
			<Text style={styles.caption}>{caption}</Text>
		</View>
	)
}
