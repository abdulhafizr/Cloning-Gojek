import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default AppBar = () => {
	return (
		<View style={styles.appBar}>
			<View style={styles.searchWrapper}>
				<TextInput 
					placeholder="What do you want to eat?" 
					style={styles.searchInput}
				/>
				<Icon name="search" style={styles.searchIcon} />
			</View>
			<View style={styles.noticeWrapper}>
				<Icon name="bell" style={styles.noticeIcon} />
			</View>
		</View>
	)
}
