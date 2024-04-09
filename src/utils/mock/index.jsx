import {Text} from 'react-native';
import SecondIcon from '../../../assests/Svgs/2';
import {colors} from '../globalConstants';

const {default: FirstIcon} = require('../../../assests/Svgs/i');

export const ApprovalData = [
  {
    icon: <FirstIcon />,
    Title: 'Payment to Some Recipient or Vendor e Recipient or Vendore Recipient or Vendor',
    subtitle: 'Request by Ali',
    amount: '$12,92',
    subamount: '24',
  },
  {
    icon: <SecondIcon />,
    Title: 'Payment to Some Recipient or Vendor',
    subtitle: 'Request by Ali',
    amount: '$12,92',
    subamount: '24',
  },
  {
    icon: <FirstIcon />,
    Title: 'Payment to Some Recipient or Vendor',
    subtitle: 'Request by Ali',
    amount: '$12,92',
    subamount: '24',
  },
];

export const TransactionHistoryData = [
  {
    icon: <FirstIcon />,
    Title: 'Vendor - Laptop',
    subtitle: 'intiated by Zareef',
    amount: (
      <Text style={{fontSize: 15, fontWeight: '700', color: colors.errorRed}}>
        $435.34
      </Text>
    ),
    subamount: '24',
  },
  {
    icon: <SecondIcon />,
    Title: 'Transfer from design Contract',
    subtitle: 'Request by Ali',
    amount: (
      <Text style={{fontSize: 15, fontWeight: '700', color: 'green'}}>
        $4000.00
      </Text>
    ),
    subamount: '24',
  },
  {
    icon: <FirstIcon />,
    Title: 'Utility Bill',
    subtitle: 'Request by Ali',
    amount: (
      <Text style={{fontSize: 15, fontWeight: '700', color: colors.errorRed}}>
        $30.10
      </Text>
    ),
    subamount: '24',
  },
];

export const HeaderData = {
  Account: {
    Title: 'Salary Account',
    subtitle: 'Sub Balance',
    amount: '137,290',
  },
  Cards: {
    Title: 'Card Status',
    subtitle: 'Vlidity 02/29',
    amount: '200,000',
  },
  Loans: {
    Title: 'Your Loans',
    subtitle: 'Interest',
    amount: '701,222',
  },
};
