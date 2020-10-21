import React from 'react';
import { View } from 'react-native';

import maintenanceImage from '../../assets/images/maintenance.png';

import { Maintenance } from './styles';

function Config(){
  return(
    <View>
      <Maintenance source={maintenanceImage} resizeMode={"contain"}/>
    </View>
  )
}

export default Config;