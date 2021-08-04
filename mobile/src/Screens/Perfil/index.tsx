import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function UserProfile() {
  return (
    
    
    <View>
        <Avatar.Icon 
            size={ 100 } icon="account"
            style={{ backgroundColor: 'black' }} />
    </View>

  );
}