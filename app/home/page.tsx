import React from 'react'
import { Button } from 'react-native'

export function Home({navigation}) {
    

    return (
        <>
            <Button title="Toggle " onPress={()=>navigation.toggleDrawer()} />
        </>
    )
}
