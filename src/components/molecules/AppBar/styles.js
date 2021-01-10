import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	appBar: {
		flexDirection: 'row'
	},
	searchWrapper: {
		position: 'relative',
		flex: 1,
		marginRight: 10
	},
	searchInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		height: 42,
		paddingLeft: 35,
		paddingRight: 10
	},
	searchIcon: {
		color: '#888',
		fontSize: 24,
		position: 'absolute',
		top: 10,
		left: 6
	},
	noticeWrapper: {
		width: 35,
		height: 45,
		alignItems: 'center',
		justifyContent: 'center'
	},
	noticeIcon: {
		fontSize: 24,
		color: '#888',
	}
})