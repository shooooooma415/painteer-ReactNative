import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CircleUserRound, SquarePlus, MapPinned } from 'lucide-react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <MapPinned size={30} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <SquarePlus size={30} color="#333" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <CircleUserRound size={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 71,
    width: '100%',
    backgroundColor: '#cdcaca',
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 9999,
    padding: 14,
    marginTop: -30, // 浮かせる
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
});

export default Footer;