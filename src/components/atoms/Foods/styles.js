import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	foods: {
		paddingVertical: 6,
	},
	imageWrapper: {
		position: 'relative',
		marginHorizontal: 2,
		width: 300
	},
	foodsImage: {
		height: 170,
		width: 300,
		borderRadius: 4
	},
	caption: {
		position: 'absolute',
		bottom: 4,
		left: 4,
		paddingRight: 6
	},
	textHead: {
		color: '#333',
		fontSize: 16
	},
	textBody: {
		color: '#333',
		fontSize: 13
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: 'rgba(255, 255, 255, .2)'
	},
	logoGoFoodCategory: {
		height: 30,
		width: 50,
		position: 'absolute',
		alignSelf: 'flex-end',
	}
})