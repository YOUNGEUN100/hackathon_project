import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Voice from '@react-native-voice/voice';

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
        <Button title="멈추기" onPress={stopListening} />
      ) : (
        <Button title="듣기 시작" onPress={startListening} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transcriptionText: {
    marginBottom: 20,
  },
});

export default VoiceListening;
