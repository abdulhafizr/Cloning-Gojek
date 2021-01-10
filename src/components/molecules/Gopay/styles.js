import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	gopayWrapper: {
		marginTop: 8
	},
	gopayHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#545454',
		padding: 14,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
	},
	gopayHeaderText: {
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold'
	},
	gopayBody: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: 20,
		paddingBottom: 14,
		backgroundColor: '#666',
		borderBottomRightRadius: 4,
		borderBottomLeftRadius: 4
	},
	fiturBody: {
		alignItems: 'center'
	},
	iconFiturBody: {
		color: '#fff',
		fontSize: 28
	},
	textFiturBody: {
		color: '#fff',
		fontSize: 13,
		fontWeight: 'bold',
		marginTop: 10
	}
})