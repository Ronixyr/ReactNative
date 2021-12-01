import React from 'react';
import {View, Button} from 'react-native';

export default function Home1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Home2')}
        title="Go to Home2"
      />
    </View>
  );
}
