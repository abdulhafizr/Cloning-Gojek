import React from 'react';
import { View, Text, TextInput } from 'react-native';
import SearchIcon from '../../../assets/Icons/search.svg';
import NoticeIcon from '../../../assets/Icons/bell.svg';
import styles from './styles';

export default AppBar = () => {
	return (
		<View style={styles.appBar}>
			<View style={styles.searchWrapper}>
				<TextInput 
					placeholder="What do you want to eat?" 
					style={styles.searchInput}
				/>
				<SearchIcon style={styles.searchIcon} />
			</View>
			<View style={styles.noticeWrapper}>
				<NoticeIcon style={styles.noticeIcon} />
			</View>
		</View>
	)
}
