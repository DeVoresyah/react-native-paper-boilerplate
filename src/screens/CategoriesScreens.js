import React from 'react'
import { View, Text } from 'react-native'

// styles
import globalStyles from '../styles/globalStyles';

const CategoriesScreens = () => {
    return (
        <View style={globalStyles.container}>
            <Text>Hello Categories</Text>
        </View>
    )
}

CategoriesScreens.options = {
    topBar: {
        title: {
            text: 'Categories'
        }
    },
    bottomTab: {
        text: 'Categories'
    }
}

export default CategoriesScreens
