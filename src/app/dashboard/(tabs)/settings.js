import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Settings = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings