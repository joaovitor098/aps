/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firebase from '../../services/firebase';

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref('cadastros')
      .on('value', snapshot => {
        snapshot.forEach(item => {
          setData(prevState => [
            ...prevState,
            {
              id: item.key,
              car: item.val().car,
              film: item.val().film,
              fruit: item.val().fruit,
              hobby: item.val().hobby,
              phone: item.val().phone,
            },
          ]);
        });
      });
  }, []);
  console.log(JSON.stringify(data));
  return (
    <FlatList
      data={data}
      keyExtractor={data.id}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>film: {item.film}</Text>
            <View style={styles.body}>
              <View>
                <Text style={styles.text}>car: {item.car}</Text>
                <Text style={styles.text}>fruit: {item.fruit}</Text>
              </View>
              <View>
                <Text style={styles.text}>hobby:{item.hobby} </Text>
                <Text style={styles.text}>phone: {item.phone}</Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    backgroundColor: '#c7c7c7',
    marginHorizontal: '5%',
    borderRadius: 12,
    padding: '5%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '5%',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    marginBottom: '10%',
  },
});
