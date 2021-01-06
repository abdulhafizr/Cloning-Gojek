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
		borderColor: '#E8E8E8',
		height: 45,
		paddingLeft: 35,
		paddingRight: 10
	},
	searchIcon: {
		color: '#959ea5',
		width: 28,
		height: 28,
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
		width: 28,
		height: 28,
		color: '#959ea5',
	}
})