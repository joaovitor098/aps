import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Chat() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Go to home"
        color="#FD151B"
        accessibilityLabel="Go to home button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
