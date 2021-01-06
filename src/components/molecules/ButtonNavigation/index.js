import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
// icons
import HomeIcon from '../../../assets/Icons/home.svg';
import ShoppingBagIcon from '../../../assets/Icons/shopping-bag.svg';
import HelpIcon from '../../../assets/Icons/help-circle.svg';
import Inbox from '../../../assets/Icons/message-square.svg';
import Account from '../../../assets/Icons/user.svg';


export default ButtonNavigation = () => {
	return (
		<View style={styles.buttonNavigationWrapper}>
	        <View style={styles.buttonNavigation}>
	          <View style={styles.iconButtonNavigation}>
	            <HomeIcon style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <ShoppingBagIcon style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <HelpIcon style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <Inbox style={styles.icons} />
	          </View>
	          <View style={styles.iconButtonNavigation}>
	            <Account style={styles.icons} />
	          </View>
	        </View>
	     </View>
	)
}
