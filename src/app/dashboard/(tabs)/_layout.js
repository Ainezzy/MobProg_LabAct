import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DashboardLayout = () => {
  return (
     <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#FFF',
            tabBarActiveBackgroundColor: '#f0be75',
            tabBarLabelStyle: {
                fontSize: 12
    
            },
            tabBarStyle:{
                margin: 20,
                borderRadius: 30,
                height: 60,
                overflow: 'hidden'
            },            
            tabBarShowLabel: true
        }} 
     >
        <Tabs.Screen name='index'
            options={{
                title: 'Home',  
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons 
                name={focused ? 'home': 'home-outline' } 
                size={24} 
                color={focused ? '#fff' : '#f0be75'} />
            }}
        />
        <Tabs.Screen name='profile'
            options={{
                title: 'Profile',
                tabBarIcon: ({focused}) => <MaterialCommunityIcons 
                name={focused ? 'account': 'account-outline'} 
                size={24} 
                color={focused ? '#fff' : '#f0be75'} />
            }}
        />
        <Tabs.Screen name='settings'
            options={{
                title: 'Settings',
                tabBarIcon: ({focused}) => <MaterialCommunityIcons 
                name={focused ? 'cog' : 'cog-outline'} 
                size={24} 
                color={focused ? '#fff' : '#f0be75'} />
            }}
        />
     </Tabs>
  )
}

export default DashboardLayout