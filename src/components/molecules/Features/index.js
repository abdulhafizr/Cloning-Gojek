import React from 'react';
import { View, Text } from 'react-native';
import { Icons } from '../../atoms';
import styles from './styles';

export default Features = () => {
	return (
		<View style={styles.features}>
			<View style={styles.iconsWrapperTop}>
				<Icons icon="motorcycle" caption="GO-RIDE" />
				<Icons icon="car" caption="GO-CAR" />
				<Icons icon="taxi" caption="GO-BLUEBIRD" />
				<Icons icon="truck" caption="GO-SEND" />
			</View>
			<View style={styles.iconsWrapperBottom}>
				<Icons icon="tags" caption="GO-DEALS" />
				<Icons icon="mobile" caption="GO-PULSA" />
				<Icons icon="spoon" caption="GO-FOOD" />
				<Icons icon="ellipsis-h" caption="GO-MORE" />
			</View>
		</View>
	)
}
