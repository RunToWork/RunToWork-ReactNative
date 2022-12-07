import * as React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import styles from './styles.scss';
import HeaderStyles from '../../components/Header/styles.scss';

export const Login = () => {
  return (
    <>
      <View style={HeaderStyles.header}>
        <Text style={HeaderStyles.title}>로그인</Text>
      </View>
      <View style={styles.body}>
        <TextInput style={styles.login__input} placeholder="아이디" />
        <TextInput style={styles.login__input} placeholder="비밀번호" />
        <TouchableOpacity style={styles.login__button}>
          <Text style={styles.login__button__text}>로그인</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
