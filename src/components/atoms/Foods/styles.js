import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	foods: {
		marginBottom: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#aaa',
		paddingVertical: 6,
		width: '100%'
	},
	imageWrapper: {
		position: 'relative'
	},
	foodsImage: {
		height: 170,
		width: '100%',
		borderRadius: 4
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, .15)',
		height: 170
	},
	goFoodCategory: {
		position: 'absolute',
		height: 40,
		width: 60,
		top: -3,
		right: 8,
		resizeMode: 'cover'
	},
	textWrapper: {
		position: 'absolute',
		bottom: 14,
		left: 11,
		width: '100%',
		paddingRight: 11
	},
	textHead: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	},
	textChild: {
		fontSize: 12,
		color: '#fff'
	}
})