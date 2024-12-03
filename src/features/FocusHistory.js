// FocusHistory
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const FocusHistory = ( {history }) => {

  if(!history || !history.length) return null;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    padding: 15,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 18,
    color: 'white',
    padding: 15
,  }
})