import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from "axios"
// npm i @react-native-community/geolocation
// ajout de la ligne : <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// dans le repertoire android/app/src/main/AndroidManifest.xml

export default function App() {
  const [refresh, setRefresh] = useState(true)
  const [local, setLocal] = useState({
    latitude: "",
    longitude: "",
    region: ""
  })


  useEffect(() => {
    Geolocation.requestAuthorization()
    Geolocation.getCurrentPosition(position => {
      const localisation = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=nkm6Xk6XzfIBP8nn8xrcDdj1QaG4lVjF&q=${position.coords.latitude}%2C${position.coords.longitude}&language=fr-fr&details=false&toplevel=false`
      axios.get(localisation)
        .then((response) => {
          setLocal({
            latitude: position.coords.latitude, longitude: position.coords.longitude, region: response.data.LocalizedName
          })
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err)
        })
    },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }, [refresh])

  function rafraichir() {
    setRefresh(!refresh)
  }
  return (
    <View>
      <Text>Latitude : {local.latitude}</Text>
      <Text>Longitude : {local.longitude}</Text>
      <Text>région : {local.region}</Text>
      <Button title='Rafraichir' onPress={rafraichir}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})