import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './scr/components/Tabs'
import { useGetWeather } from './scr/hooks/useGetWeather'
import ErrorItem from './scr/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if(weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (<ErrorItem />) : (<ActivityIndicator size={'large'} color={'blue'} />)}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
 