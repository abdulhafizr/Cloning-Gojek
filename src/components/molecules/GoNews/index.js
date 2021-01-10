import React from 'react';
import { View, Text } from 'react-native';
import { News } from '../../atoms';
import styles from './styles';

const newsFromAPI = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
		category: 'GoNews',
		image: 'https://placeimg.com/240/200/tech/grayscale'
	},
	{
		id: 2,
		title: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		category: 'GoFood',
		image: 'https://placeimg.com/240/200/nature/grayscale',
	},
	{
		id: 3,
		title: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
		category: 'GoNews',
		image: 'https://placeimg.com/240/200/tech/grayscale',
	}

];

export default GoNews = () => {
	return (
		<View style={styles.goNews}>
			{
				newsFromAPI.map((news) => (
					<News 
						key={news.id}
						title={news.title} 
						category={news.category} 
						image={news.image}
					/>
				))
			}
		</View>
	)
}
