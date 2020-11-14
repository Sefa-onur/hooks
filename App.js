import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const App = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    restApı();
  }, [])
  const restApı = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const item = await data.json()
    setItems(item)
  }

  return (
    <View>
      <ScrollView>
        {
          Items.map(item => {
            return (
              <View style={styles.Conteiner} >
                <View style={{ flexDirection: 'row' }} >
                  <Text>title</Text>
                  <Text> {item.title} </Text>
                </View>
                <View style = {{ flexDirection:'row'}}>
                  <Text>body:</Text>
                  <Text> {item.body} </Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  Conteiner: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    elevation: 5
  }
})