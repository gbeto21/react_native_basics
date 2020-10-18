import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <TitleText>The game is Over!</TitleText>
            <Image
                source={require('../assets/success.png')}
                style={styles.image}
                resizeMode="center"
            />
            {/* <View style={styles.imageContainer}>
            </View> */}
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '80%',
        height: 300
    }
})

export default GameOverScreen