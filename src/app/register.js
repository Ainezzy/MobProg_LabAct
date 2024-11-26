import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={regStyle.container}>
      {/* Header Section */}
      <View style={[regStyle.section, { alignItems: 'center' }]}>
        <Text style={regStyle.headerText}>Be part of our community!</Text>
        <Text style={regStyle.subHeaderText}>Create your account</Text>
      </View>

      {/* Input Fields Section */}
      <View style={regStyle.section}>
        <View style={regStyle.inputContainer}>
          <MaterialCommunityIcons name="account" size={20} color="#000" style={regStyle.icon} />
          <TextInput
            placeholder="Enter your full name"
            style={regStyle.textInput}
            placeholderTextColor="#c7c7c7"
          />
        </View>
        <View style={regStyle.inputContainer}>
          <MaterialCommunityIcons name="email" size={20} color="#000" style={regStyle.icon} />
          <TextInput
            placeholder="Enter your email"
            style={regStyle.textInput}
            placeholderTextColor="#c7c7c7"
          />
        </View>
        <View style={regStyle.inputContainer}>
          <MaterialCommunityIcons name="phone" size={20} color="#000" style={regStyle.icon} />
          <TextInput
            placeholder="Enter your contact number"
            style={regStyle.textInput}
            placeholderTextColor="#c7c7c7"
          />
        </View>
        <View style={regStyle.inputContainer}>
          <MaterialCommunityIcons name="lock" size={20} color="#000" style={regStyle.icon} />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            style={regStyle.textInput}
            placeholderTextColor="#c7c7c7"
          />
        </View>
      </View>

      {/* Button and Navigation Section */}
      <View style={[regStyle.section, { marginTop: 30 }]}>
        <MyButton
          text="Sign Up"
          action={() => router.replace('dashboard')}
          mode="contained"
          size="small"
          backgroundColor="#f0be75"
          fontColor="#FFF"
        />
        <View style={regStyle.footer}>
          <Text style={regStyle.footerText}>Already have an account?</Text>
          <Text
            style={regStyle.footerLink}
            onPress={() => router.push('/')}
          >
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  section: {
    width: '90%',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  footer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  footerLink: {
    fontSize: 14,
    color: '#f0be75',
    marginLeft: 5,
  },
});


export default Register;