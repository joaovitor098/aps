import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import firebase from '../../services/firebase';

export default function Signup({navigation}) {
  const [formValues, setFormValues] = useState({});

  function handleSubmit() {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formValues.email, formValues.password)
        .then(res => {
          firebase
            .database()
            .ref('usuarios')
            .child(res.user.uid)
            .set({
              nome: formValues.name,
              email: formValues.email,
              password: formValues.password,
              city: formValues.city,
            })
            .then(() => {
              Alert.alert('Cadastrado com sucesso!', 'Seja bem vindo!!!');
              navigation.navigate('Menus');
            });
        })
        .catch(() => {
          Alert.alert(
            'Não foi possível criar seu cadastro',
            'Verifique os campos e tente novamente',
          );
        });
    } catch (error) {
      Alert.alert(
        'Não foi possível criar seu cadastro',
        'Tente novamente mais tarde',
      );
    }
  }

  const handleValueChange = useCallback(
    field => value => {
      setFormValues(prevState => ({...prevState, [field]: value}));
    },
    [],
  );

  const isValid = useCallback(() => {
    const fields = ['name', 'email', 'password', 'city'];

    return fields.every(
      field =>
        formValues[field] !== undefined &&
        formValues[field] !== null &&
        formValues[field] !== '',
    );
  }, [formValues]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputs}
        placeholder="Name"
        onChangeText={handleValueChange('name')}
        value={formValues.name}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Email"
        onChangeText={handleValueChange('email')}
        value={formValues.email}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Password"
        secureTextEntry
        onChangeText={handleValueChange('password')}
        value={formValues.password}
      />
      <TextInput
        style={styles.inputs}
        placeholder="City"
        onChangeText={handleValueChange('city')}
        value={formValues.city}
      />

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} disabled={!isValid()} />
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
    marginTop: '3%',
  },
  button: {
    marginTop: '10%',
    width: '45%',
  },
});
