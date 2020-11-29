import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { saveToken } from '../redux/actions/token'
import { Navigation } from 'react-native-navigation'

// component
import { Button } from 'react-native-paper'

// styles
import globalStyles from '../styles/globalStyles';
import styles from './styles/HomeScreenStyle'
import { apply } from '../styles/osmiProvider';

const HomeScreens = ({ addToken, componentId }) => {
    const [text, setText] = useState(null)

    const tokenHandler = () => {
        addToken(text)
        setText(null)
    }

    const _handleNavigate = () => {
        Navigation.push(componentId, {
            component: {
                name: 'List'
            },
            options: {
                topBar: {
                    title: {
                        text: 'List'
                    }
                }
            }
        })
    }

    return (
        <View style={globalStyles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="write token"
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableHighlight
            style={styles.button}
            onPress={tokenHandler}
            underlayColor="#d62828">
                <Text style={styles.buttonText}>Save token</Text>
            </TouchableHighlight>
            <Button
            style={apply('mt-5')}
            icon="add-shopping-cart"
            mode="contained"
            onPress={() => _handleNavigate()}>
                Go to Lists
            </Button>
        </View>
    )
}

HomeScreens.options = {
    topBar: {
        title: {
            text: 'Home'
        }
    },
    bottomTab: {
        text: 'Home'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToken: (tk) => dispatch(saveToken(tk))
    }
}


export default connect(0, mapDispatchToProps)(HomeScreens)
