import React from 'react';
import { View, Text } from 'react-native';
// icons
import PayIcon from '../../../assets/Icons/dollar-sign.svg';
import NearByIcon from '../../../assets/Icons/credit-card.svg';
import TopUpIcon from '../../../assets/Icons/plus-square.svg';
import MoreIcon from '../../../assets/Icons/more-horizontal.svg';

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
					<PayIcon style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>Pay</Text>
				</View>
				<View style={styles.fiturBody}>
					<NearByIcon style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>NearBy</Text>
				</View>
				<View style={styles.fiturBody}>
					<TopUpIcon style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>Top Up</Text>
				</View>
				<View style={styles.fiturBody}>
					<MoreIcon style={styles.iconFiturBody} />
					<Text style={styles.textFiturBody}>More</Text>
				</View>
			</View>
		</View>
	)
}
