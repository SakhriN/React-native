import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from "axios"
// npm i @react-native-community/geolocation
// ajout de la ligne : <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// dans le repertoire android/app/src/main/AndroidManifest.xml

export default function App() {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    
    axios.get(localisation)
    .then((response) => {
        console.log(response.data);
      })
    .catch((err) => {
      console.log(err)
    })
    useEffect(async() => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            const localisation = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=nkm6Xk6XzfIBP8nn8xrcDdj1QaG4lVjF&q=${position.coords.latitude}%2C${position.coords.longitude}&language=fr-fr&details=false&toplevel=false`
          console.log(localisation)
          },
        error => console.log(error),
        {enableHighAccuracy : true, timeout : 20000,maximumAge : 1000 }
        )
    },[])


  return (
    <View>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})