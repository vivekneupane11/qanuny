import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../constants/Theme';

interface RoundAvatarProps {
  source?: any; // Image source
  size?: number; // Avatar size (width and height)
  text?: string; // Text to display when no source is provided
  backgroundColor?: string; // Background color of the avatar
  online?: boolean; // Indicates if the user is online
}

const RoundAvatar: React.FC<RoundAvatarProps> = ({
  source,
  size = 50,
  text = '',
  backgroundColor = 'gray',
  online = false,
}) => {
  return (
    <View style={[styles.container, { width: size, height: size, backgroundColor }]}>
      {source ? (
        <Image source={source} style={styles.image} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
      {online && <View style={styles.onlineDot} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999, 
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  onlineDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: THEME.COLORS.green, 
    borderRadius: 999, 
    bottom: 4,
    right: 2,
    zIndex:1000,
  },
});

export default RoundAvatar;
