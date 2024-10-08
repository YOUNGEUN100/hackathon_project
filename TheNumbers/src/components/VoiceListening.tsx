import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image, Pressable, Alert} from 'react-native';
import Voice from '@react-native-voice/voice';
import {theme} from '../assets/color';
import voiceImg from '../assets/images/voice.png';
import stopButton from '../assets/images/stop-button.png';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';


const VoiceListening = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => {
    setIsListening(true);
  };

  const onSpeechEnd = () => {
    setIsListening(false);
  };

  const onSpeechResults = (event: any) => {
    setText(event.value[0]);
    AsyncStorage.setItem("rtNm", "금천03");
    // Alert.alert('event.value[0]', event.value[0], [ {text: 'Understood', onPress: () => console.log('alert closed')}, ]);
    Tts.setDefaultLanguage('ko-KR');
    Tts.speak(event.value[0]);
  };

  const startListening = () => {
    Voice.start('ko-KR');
  };

  const stopListening = () => {
    Voice.stop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.transcriptionText}>{text}</Text>
      {isListening ? (
        <Pressable onPress={stopListening}>
          <Image source={stopButton} />
        </Pressable>
      ) : (
        <Pressable onPress={startListening}>
          <Image source={voiceImg} />
        </Pressable>
        // <Button title="듣기 시작" onPress={} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  transcriptionText: {
    marginVertical: 30,
    fontSize: 40,
    color: theme.white,
  },
});

export default VoiceListening;
