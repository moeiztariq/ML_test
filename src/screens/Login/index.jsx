import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import {colors} from '../../utils/globalConstants';
import {Button} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm();

  const onSubmit = data => {
    navigation.navigate('Dashboard');
  };
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : null}
    keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
      <Text style={styles.title}>Create An Account</Text>
      <Text style={styles.subtitle}>Setup Account</Text>
      <View style={styles.input}>
        <Controller
          control={control}
          name={'email'}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          }}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <Input
              placeholder={'Email'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name={'username'}
          rules={{required: 'Username is Required'}}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <Input
              placeholder={'Username'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name={'password'}
          rules={{
            required: 'Password is Required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 character',
            },
          }}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <Input
              placeholder={'Password'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              secureTextEntry
            />
          )}
        />
      </View>
      <View style={styles.input}>
        <Controller
          control={control}
          name={'confirm'}
          rules={{
            required: 'Confirm Password is Required',
            validate: {
              matchesPassword: value =>
                value === getValues('password') || 'Passwords do not match',
            },
          }}
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <Input
              placeholder={'Confirm Password'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              secureTextEntry
            />
          )}
        />
      </View>
      <View>
        <Text style={styles.text}>
          by signing up you're idicating that you accept our{' '}
          <Text>Terms of Use</Text>
          and our
          <Text>Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.btn}>
        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          buttonColor={colors.primaryColor}>
          Sign Up
        </Button>
      </View>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: '100%',
    backgroundColor: colors.whiteColor,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primaryColor,
    marginTop: 60,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color:colors.black
  },
  btn: {
    marginTop: 30,
  },
});
export default Login;
