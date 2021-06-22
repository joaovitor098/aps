/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  LogBox,
} from 'react-native';
import firebase from '../../services/firebase';

LogBox.ignoreAllLogs();

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignup() {
    navigation.navigate('Signup');
  }

  function handleSubmit() {
    try {
      if (email && password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate('Menus');
          })
          .catch(error => {
            if (error.code === 'auth/wrong-password') {
              Alert.alert(
                'Não foi possível efetuar o login',
                'Senha incorreta',
              );
            } else {
              Alert.alert(
                'Erro ao efetuar o login',
                'Verifique os campos e tente novamente',
              );
            }
          });
      } else {
        Alert.alert('Campos inválidos', 'Preencha os campos corretamente');
      }
    } catch (error) {
      Alert.alert(
        'Não foi possível efetuar o login',
        'Tente novamente mais tarde',
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.inputs}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.inputs, {marginTop: '3%'}]}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btnSignup} onPress={handleSignup}>
        <Text style={styles.txtSignup}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  title: {
    fontSize: 26,
    marginBottom: '10%',
  },
  inputs: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#c7c7c7',
    paddingLeft: 15,
  },
  btnSignup: {
    marginTop: '2%',
    alignSelf: 'flex-end',
    marginBottom: '10%',
  },
  txtSignup: {
    fontSize: 14,
  },
  button: {
    width: '45%',
  },
});
