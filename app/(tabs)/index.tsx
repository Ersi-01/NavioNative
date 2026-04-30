import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Homepage</Text>
      <Text style={styles.subtitle}>Welcome!</Text>

      <TouchableOpacity style={styles.btn} onPress={() => router.push('/profile')}>
        <Text style={styles.btnText}>Go to Profile </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => router.push('/about')}>
        <Text style={styles.btnText}>Go to About </Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 35,
  },
  btn: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  btnText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});