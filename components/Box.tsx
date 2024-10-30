import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Box({children,style}) {
  return (
    <View style={[styles.box,style]}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Box

const styles=StyleSheet.create({
  box:{
     backgroundColor:"#fff",
     padding:20,
     width:100,
     height:100
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:"white"
  }
})