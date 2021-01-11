import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export default News = ({title, category, image}) => {
	return (
		<TouchableWithoutFeedback onPress={() => alert(title)}>
			<View style={styles.news}>
				<View style={styles.newsImageWrapper}>
					<Image 
						style={styles.imageNews}
						source={{uri: image}}
					/>
					<View style={styles.overlay} />
					<Image source={require('../../../assets/images/logo-gojek.png')} style={styles.imageCategoryLabel} />
				</View>
				<View style={styles.newsTextWrapper}>
					<Text style={styles.categoryNews}>{category}</Text>
					<Text style={styles.titleNews}>{title}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}
 