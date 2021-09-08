import React from 'react';
import { Center, NativeBaseProvider, HStack, Box } from 'native-base';
import { Button, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';

import typo from '../../styles/typography';
import style from './style';
import { textAlign } from 'styled-system';

const RewardScreen = ({ navigation }) => {
  return (
<ScrollView style = {{backgroundColor: 'white'}}>

  <Center style = {style.avatarContainer}>
    <View style = {style.pointsContainer}>
      <Center style = {style.pointsLabel}>
        <Text style = {typo.T1}>
          Coins to redeem
        </Text>
      </Center>
      <Text style = {{fontSize: 36, textAlign: 'center', fontFamily: 'Montserrat-Bold'}}>
          4,550
      </Text>
    </View>
  </Center>

  <RewardRow name = "Costume"/>
  <RewardRow name = "Weapon"/>
  <RewardRow name = "Pet"/>

  <Button
      onPress={()=>{navigation.navigate('Splash')}}
      title="go to splash"
    />

</ScrollView>
  )
}

const RewardRow = (props) => {
  return(
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
      <HStack style = {style.costumeContainer}>

        <Box>
          <Box style = {style.costume}/>
          <HStack style = {{maxWidth: 193}}>
            <Text style = {typo.H2}>{props.name} 1</Text>
            <EXPButton title = "350exp"/>
          </HStack>
        </Box>
        
        <Box>
          <Box style = {style.costume}/>
          <HStack style = {{maxWidth: 193}}>
            <Text style = {typo.H2}>{props.name} 2</Text>
            <EXPButton title = "250exp"/>
          </HStack>
        </Box>

      </HStack>
    </ScrollView>
  )
}

const EXPButton = ({onPress, title}) => {
  return(
    <TouchableOpacity onPress={onPress} style={style.appButtonContainer}>
      <Text style={style.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <RewardScreen />
      </Center>
    </NativeBaseProvider>
  )
}