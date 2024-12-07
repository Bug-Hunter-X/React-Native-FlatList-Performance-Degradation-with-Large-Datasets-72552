```javascript
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const FlatListBugSolution = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      getItemLayout={(data, index) => ({
        length: 40,
        offset: 40 * index,
        index,
      })}
      windowSize={10} // Adjust as needed
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default FlatListBugSolution;
```