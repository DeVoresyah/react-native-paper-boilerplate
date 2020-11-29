import React from 'react'
import { View, Text } from 'react-native'

// styles
import globalStyles from '../styles/globalStyles';

const ProfilScreens = () => {
    return (
        <View style={globalStyles.container}>
            <Text>Hello, this is Profil</Text>
        </View>
    )
}

ProfilScreens.options = {
    topBar: {
        title: {
            text: 'Profil'
        }
    },
    bottomTab: {
        text: 'Profil'
    }
}

export default ProfilScreens
