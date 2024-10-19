import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const ProfileAppBar = ({ title, onEditPress,onhandleBack, onLogoutPress, editIcon, logoutIcon }) => {
  
  
  return (
    <View>
      <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={onhandleBack} />
        
        <Appbar.Content title={title} />
        <Appbar.Action icon={editIcon} onPress={onEditPress} />
        <Appbar.Action icon={logoutIcon} onPress={onLogoutPress} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black', // You can customize the color
  },
});

export default ProfileAppBar;
