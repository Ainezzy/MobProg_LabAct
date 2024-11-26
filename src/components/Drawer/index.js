import { View, Text } from 'react-native' 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context' 
import { useRouter } from 'expo-router'

export default function DrawerContent(props) {

    const router = useRouter();
    const year = new Date().getFullYear();  

    const handleLogout = async () => {
        router.replace('/');
    }

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
            >
                {/* Custom Drawer Items */}
                <DrawerItem
                    label="My Files"
                    icon={({ focused, size }) => (
                        <MaterialCommunityIcons 
                            name="folder" 
                            color="#f0be75" 
                            size={size} 
                        />
                    )}
                    onPress={() => router.push('/my-files')} 
                />
                <DrawerItem
                    label="Starred"
                    icon={({ focused, size }) => (
                        <MaterialCommunityIcons 
                            name="star" 
                            color="#f0be75" 
                            size={size} 
                        />
                    )}
                    onPress={() => router.push('/starred')} 
                />
                <DrawerItem
                    label="Notifications"
                    icon={({ focused, size }) => (
                        <MaterialCommunityIcons 
                            name="bell" 
                            color="#f0be75" 
                            size={size} 
                        />
                    )}
                    onPress={() => router.push('/notifications')} 
                />
                {/* Logout Item */}
                <DrawerItem
                    label="Logout"
                    icon={({ size }) => (
                        <MaterialCommunityIcons 
                            name="logout" 
                            color="#f0be75" 
                            size={size} 
                        />
                    )}
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>

            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20 + bottom
                }}
            >
                <Text>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View> 
        </View>
    )
}
