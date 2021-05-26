import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Cloud() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Chat')}
        title="Go to chat"
        color="#36311F"
        accessibilityLabel="Go to chat button"
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
