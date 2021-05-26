import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Cloud')}
        title="Go to cloud"
        color="#841584"
        accessibilityLabel="Go to cloud button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
