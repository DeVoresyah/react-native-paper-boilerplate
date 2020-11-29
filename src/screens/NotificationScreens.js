import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'

// styles
import globalStyles from '../styles/globalStyles';
import styles from './styles/NotificationScreenStyle';
import { apply } from '../styles/osmiProvider';

const NotificationScreens = ({ token, componentId }) => {
    const [data, setData] = useState(null)

    const getData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            res.json().then(dt => setData(dt))
        })
        .catch(err => {
            console.log(err)
        })
    }

    // TODO: better to make this as reusable component with `memo` hooks.
    const renderItem = (items) => {
        const { item } = items

        return(
            <View style={apply('row items-center py-1')}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    useEffect(() => {
        const listener = {
            componentDidAppear: () => {
                getData()
            },
            componentDidDisappear: () => {
                setData(null)
            }
        }

        const unsubscribe = Navigation.events().registerComponentListener(listener, componentId);

        return () => {
            unsubscribe.remove();
        };
    },[])

    return (
        <View style={globalStyles.container}>
            <TouchableHighlight
            style={styles.button}
            onPress={() => {}}
            underlayColor="#003f88">
                <Text style={styles.buttonText}>Show token</Text>
            </TouchableHighlight>

            <Text>{token}</Text>

            <FlatList
                style={apply("flex-grow")}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

NotificationScreens.options = {
    topBar: {
        title: {
            text: 'Notification'
        }
    },
    bottomTab: {
        text: 'Notification'
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.token.token
    }
}


export default connect(mapStateToProps)(NotificationScreens)

