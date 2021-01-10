import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default Gopay = () => {
	return (
		<View style={styles.gopayWrapper}>
			<View style={styles.gopayHeader}>
				<Text style={styles.gopayHeaderText}>AHR</Text>
				<Text style={styles.gopayHeaderText}>Rp.500.0000</Text>
			</View>
			<View style={styles.gopayBody}>
				<View style={styles.fiturBody}>
					<Icon name="dollar-sign" style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>Pay</Text>
				</View>
				<View style={styles.fiturBody}>
					<Icon name="credit-card" style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>NearBy</Text>
				</View>
				<View style={styles.fiturBody}>
					<Icon name="plus-square" style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>Top Up</Text>
				</View>
				<View style={styles.fiturBody}>
					<Icon name="more-horizontal" style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>More</Text>
				</View>
			</View>
		</View>
	)
}
