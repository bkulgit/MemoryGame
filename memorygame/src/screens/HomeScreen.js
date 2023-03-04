import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={style.containerView}>
      <Text style={style.headerStyle}>{'MATCH ALPHABATE'}</Text>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => {
          navigation.navigate('PlayGround');
        }}>
        <Text>{'PLAY'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  headerStyle: {
    fontStyle: 'italic',
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#841584',
    width: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
