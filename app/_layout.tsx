import { View, Text, StyleSheet } from 'react-native';
import { Slot, usePathname } from 'expo-router';

export default function RootLayout() {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MyApp</Text>
        <Text style={styles.path}>Je tek: {pathname}</Text>
      </View>
      <View style={styles.content}>
        <Slot />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 55,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: '600',
  },
  path: {
    fontSize: 14,
    color: '#888',
  },
  content: {
    flex: 1,
    padding: 25,
  },
});