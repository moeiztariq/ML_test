import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {colors} from '../../utils/globalConstants';
import {ApprovalData, TransactionHistoryData} from '../../utils/mock';
import Chart from '../../components/Chart';
import ListingCard from '../../components/ListingCard';

const DashBoard = () => {
  const [selectedButton, setSelectedButton] = useState('Account');

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  return (
    <View style={styles.container}>
      <>
        <ScrollView
          style={styles.scrollContainer}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>
          <Header
            handleButtonPress={handleButtonPress}
            selectedButton={selectedButton}
          />
          <View >
          <ListingCard title={'Awaiting Approval (3)'} data={ApprovalData} />
          <ListingCard
            title={'Transaction History'}
            data={TransactionHistoryData}
            />
          <ListingCard
            title={'Transaction History'}
            data={TransactionHistoryData}
            />
          <View style={styles.chartContainer}>
            <View style={styles.titleFlex}>
              <Text style={styles.heading}>My Investments</Text>
              <Text style={styles.headLeft}>View All</Text>
            </View>
            <Chart />
          </View>
            </View>
        </ScrollView>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  titleFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
    marginBottom: 20,
  },
  headLeft: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryColor,
  },
  chartContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
export default DashBoard;
