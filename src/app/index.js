import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={loginStyle.container}>
      {/* Header Section */}
      <View style={[loginStyle.section, { alignItems: 'center' }]}>
        <Text style={loginStyle.headerText}>Welcome back</Text>
        <Text style={loginStyle.subHeaderText}>Login to your account</Text>
      </View>

      {/* Input Fields Section */}
      <View style={loginStyle.section}>
        <View style={loginStyle.inputContainer}>
          <MaterialCommunityIcons name="email" size={20} color="#000" style={loginStyle.icon} />
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter your email"
            style={loginStyle.textInput}
            placeholderTextColor="#c7c7c7"
          />
        </View>
        <View style={loginStyle.inputContainer}>
          <MaterialCommunityIcons name="lock" size={20} color="#000" style={loginStyle.icon} />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry={!isShowPassword}
            style={loginStyle.textInput}
            placeholderTextColor="#c7c7c7"
          />
          <MaterialCommunityIcons
            name={isShowPassword ? "eye" : "eye-off"}
            size={20}
            color="#000"
            style={loginStyle.icon}
            onPress={() => setIsShowPassword(!isShowPassword)}
          />
        </View>
        <View style={{ flexDirection: 'row',  alignItems: 'flex-start', width: '100%' }}>
          <MyButton
            text="Forgot Password?"
            action={() => router.push('recover')}
            mode="text"
            size="small"
            fontColor="#f0be75"
          />
        </View>
      </View>
      

      {/* Button and Navigation Section */}
      <View style={[loginStyle.section, { marginTop: 30 }]}>
        <MyButton
          text="Login"
          action={() => router.replace('dashboard')}
          mode="contained"
          size="small"
          backgroundColor="#f0be75"
          fontColor="#FFF"
          
        />
        <View style={loginStyle.footer}>
          <Text style={loginStyle.footerText}>Don't have an account?</Text>
          <Text
            style={loginStyle.footerLink}
            onPress={() => router.push('register')}
          >
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const loginStyle = StyleSheet.create({
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
