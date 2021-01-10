import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	news: {
		marginBottom: 8,
		borderBottomWidth: 1,
		borderBottomColor: '#aaa',
		paddingVertical: 6
	},
	newsImageWrapper: {
		position: 'relative',
	},
	imageNews: {
		height: 170,
		width: '100%',
		borderRadius: 4
	},
	newsTextWrapper: {
		marginVertical: 4
	},
	categoryNews: {
		fontSize: 8,
		fontWeight: '400',
		color: '#fff',
		marginLeft: 6,
		paddingVertical: 4,
		paddingHorizontal: 6,
		backgroundColor: '#666',
		alignSelf: 'flex-start',
		borderRadius: 4
	},
	titleNews: {
		fontSize: 13
	},
	imageCategoryLabel: {
		position: 'absolute',
		height: 20,
		width: 50,
		top: 5,
		right: 5,
		resizeMode: 'contain'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(225, 225, 225, .2)',
		borderRadius: 4
	}
})