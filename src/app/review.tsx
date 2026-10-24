import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ReviewScreen() {
  const router = useRouter();

  // Receiving transferred parameters
  const { name, email, phone } = useLocalSearchParams<{
    name?: string;
    email?: string;
    phone?: string;
  }>();

  const handleConfirm = () => {
    // Navigate to success screen
    router.push('/success' as any);
  };

  const handleEdit = () => {
    // Go back to the form screen
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{name || 'N/A'}</Text>

        <Text style={styles.label}>Email Address:</Text>
        <Text style={styles.value}>{email || 'N/A'}</Text>

        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{phone || 'N/A'}</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm & Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.editButtonText}>Edit Information</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});