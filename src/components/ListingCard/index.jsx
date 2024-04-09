import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/globalConstants';
import {ApprovalData} from '../../utils/mock';

const ListingCard = ({title,data,}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleFlex}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.headLeft}>View All</Text>
      </View>
      {data.map((crdData, index) => (
        <View style={styles.cardFlex} key={index}>
          {crdData.icon}
          <View >
            <Text style={styles.para}>{crdData?.Title}</Text>
            <Text style={styles.request}>{crdData.subtitle}</Text>
            <Text style={styles.amount}>
              {crdData.amount}.
              <Text style={styles.point}>{crdData.subamount}</Text>
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal:20

  },
  titleFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
  },
  headLeft: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryColor,
  },
  cardFlex: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 25,
    alignItems: 'center',
    
  },
  para: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  request: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },
  amount: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.black,
  },
  point: {
    fontSize: 10,
    fontWeight: '400',
    color: colors.black,
  },
});
export default ListingCard;
