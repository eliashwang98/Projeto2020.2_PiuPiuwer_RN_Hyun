import React from 'react';
import { View } from 'react-native';

import maintenanceImage from '../../assets/images/maintenance.png';

import { Maintenance } from './styles';

function Profile(){
  return(
    <View>
      <Maintenance source={maintenanceImage} resizeMode={"contain"}/>
    </View>
  )
}

export default Profile;