import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import firebase from '../../services/firebase';

export default function Signup({navigation}) {
  const [formValues, setFormValues] = useState({});

  function handleSubmit() {
    try {
      const cadastros = firebase.database().ref('cadastros');
      const chave = cadastros.push().key;

      cadastros
        .child(chave)
        .set({
          car: formValues.car,
          phone: formValues.phone,
          fruit: formValues.fruit,
          hobby: formValues.hobby,
          film: formValues.film,
        })
        .then(() => {
          Alert.alert('Cadastrado com sucesso!');
          navigation.navigate('Menus');
        });
    } catch (error) {
      Alert.alert(
        'Não foi possível efetuar seu cadastro',
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
    const fields = ['car', 'phone', 'fruit', 'hobby', 'film'];

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
        placeholder="Car"
        onChangeText={handleValueChange('car')}
        value={formValues.car}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Phone"
        onChangeText={handleValueChange('phone')}
        value={formValues.phone}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Fruit"
        secureTextEntry
        onChangeText={handleValueChange('fruit')}
        value={formValues.fruit}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Hobby"
        onChangeText={handleValueChange('hobby')}
        value={formValues.hobby}
      />
      <TextInput
        style={styles.inputs}
        placeholder="Film"
        onChangeText={handleValueChange('film')}
        value={formValues.film}
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
