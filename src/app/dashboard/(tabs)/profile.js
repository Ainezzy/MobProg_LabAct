import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../../../assets/formal photo.jpeg')} 
          style={styles.profilePicture}
        />
      </View>

      {/* Profile Details */}
      <View style={styles.profileDetails}>
        <Text style={styles.name}>Ainez Anquillano</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        {/* Interests Section */}
        <View style={styles.bioSection}>
          <View style={styles.bioSectionHeader}>
            <MaterialCommunityIcons name="heart" size={24} color="#f0be75" />
            <Text style={styles.bioSectionTitle}>Interests</Text>
          </View>
          <Text style={styles.bioSectionContent}>Tech, Traveling, Photography</Text>
        </View>
        <View style={styles.separator} />

        {/* Projects Section */}
        <View style={styles.bioSection}>
          <View style={styles.bioSectionHeader}>
            <MaterialCommunityIcons name="projector-screen" size={24} color="#f0be75" />
            <Text style={styles.bioSectionTitle}>Projects</Text>
          </View>
          <Text style={styles.bioSectionContent}>Personal Finance App, Pet Adoption Platform, Meditation App</Text>
        </View>
        <View style={styles.separator} />

        {/* Connections Section */}
        <View style={styles.bioSection}>
          <View style={styles.bioSectionHeader}>
            <MaterialCommunityIcons name="account-group" size={24} color="#f0be75" />
            <Text style={styles.bioSectionTitle}>Connections</Text>
          </View>
          <Text style={styles.bioSectionContent}>John Doe, Jane Smith, Team Alpha</Text>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#f0be75', 
  },
  profileDetails: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  bioContainer: {
    backgroundColor: '#fff', 
    padding: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 30,
  },
  bioSection: {
    marginBottom: 15,
  },
  bioSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bioSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  bioSectionContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0be75',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#f0be75',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Profile
