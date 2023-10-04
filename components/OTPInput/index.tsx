import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { widthPercentageToDP } from '../../utils/Responsive';

interface OTPInputProps {
  length?: number;
  onOTPChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onOTPChange }) => {
  const [otp, setOTP] = useState<string>('');

  const handleInputChange = (text: string, index: number) => {
    if (text.length === 1 && index < length - 1) {
    }

    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP.join(''));

    if (otp.length === length) {
      onOTPChange(newOTP.join(''));
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
    }

    const newOTP = [...otp];
    newOTP[index] = '';
    setOTP(newOTP.join(''));
  };

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{"Enter The OTP Code"}</Text>
      <View style={styles.content}>
        {Array(length)
          .fill('')
          .map((_, index) => (
            <TextInput
              key={index.toString()}
              style={styles.input}
              onChangeText={(text) => handleInputChange(text, index)}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
              value={otp[index] || ''}
              maxLength={1}
              keyboardType="numeric"
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 16, 
    width: widthPercentageToDP(20), 
    aspectRatio: 1, 
    textAlign: 'center',
    fontFamily: 'Mulish_900Black',
  },
  label: {
    fontFamily: 'Mulish_500Medium',
    fontSize: 14, 
  },
});

export default OTPInput;
