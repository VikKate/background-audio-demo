import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';

function ButtonPlay(props) {
    const btnCover = (props.isPaused) ?
                      require('./assets/play.png') :
                      require('./assets/pause.png');
    return (
        <TouchableOpacity onPress={ props.onPress }>
          <Image source={ btnCover } 
                 style={ styles.button } />
        </TouchableOpacity>
    )
}

function Player(props) {
    return <Video source={ props.source }
                  playInBackground={ true }
                  paused={ props.isPaused }
                  volume={ 1.0 } style={ styles.player }/>
}

const App: () => React$Node = () => {
    const localAudioSource = require('./assets/gold.mp3')
    const onlineAudioSource = { uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
    const [isPaused, setPaused] = useState(true)
    return (
        <React.Fragment>
          <StatusBar barStyle="light-content" />
          <SafeAreaView>
            <View style={ styles.body }>
              <View style={ styles.buttonContainer }>
                <Player source={ onlineAudioSource } isPaused={ isPaused } />
                <ButtonPlay isPaused={ isPaused } 
                            onPress={ () => setPaused(!isPaused) } />
              </View>
            </View>
          </SafeAreaView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150, 
    height: 150,
  },
  player: {
    width: 0,
    height: 0,
    position: 'absolute'
  },
  border: {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
  }
});

export default App;
