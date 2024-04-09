import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/globalConstants';
import { HeaderData } from '../../utils/mock';

const Header = ({handleButtonPress,selectedButton} ) => {

  return (
    <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.flexTitle}>
        <TouchableOpacity onPress={() => handleButtonPress('Account')} >
            <Text style={[styles.text, selectedButton === 'Account' && styles.selected]}>Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => handleButtonPress('Cards')}>
            <Text style={[styles.text, selectedButton === 'Cards' && styles.selected]}>Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => handleButtonPress('Loans')}>
            <Text style={[styles.text, selectedButton === 'Loans' && styles.selected]}>Loans</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
        <Text style={styles.title}>{HeaderData[selectedButton].Title}</Text>
        <Text style={styles.subTitle}>{HeaderData[selectedButton].subtitle}</Text>
        <Text style={styles.currency}>
          QAR <Text style={styles.amount}>{HeaderData[selectedButton].amount}</Text>
        </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 20,
    // paddingBottom: 16,
    // height: 300,
    paddingBottom:20,
    paddingTop:20
    
  },
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
  },
  flexTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45 ,
    gap: 20,
  },
  text: {
    fontSize: 20,
    color: colors.whiteColor,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 40 ,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.whiteColor,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.whiteColor,
  },
  currency: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.whiteColor,
  },
  amount: {
    fontSize: 32,
    fontWeight: '400',
    color: colors.whiteColor,
  },
  selected: {
    fontWeight: 'bold',
  },
});
export default Header;
