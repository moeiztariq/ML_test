import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const Input = ({value, onChangeText, onBlur, error,placeholder,secureTextEntry}) => {
  return (
    <>
      <TextInput
        label={placeholder}
        style={{backgroundColor:"white"}}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        mode="outlined"
        error={error ? true : false}
        secureTextEntry={secureTextEntry}
      />
      {error && (
        <Text style={{color: 'red', alignSelf: 'stretch'}}>
          {error.message || 'Error'}
        </Text>
      )}
    </>
  );
};

export default Input;
