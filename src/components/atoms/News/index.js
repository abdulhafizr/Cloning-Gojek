import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default News = ({title, category, image}) => {
	return (
		<View style={styles.news}>
			<View style={styles.newsImageWrapper}>
				<Image 
					style={styles.imageNews}
					source={{uri: image}} 
				/>
			</View>
			<View style={styles.newsTextWrapper}>
				<Text style={styles.categoryNews}>{category}</Text>
				<Text style={styles.titleNews}>{title}</Text>
			</View>
		</View>
	)
}
 