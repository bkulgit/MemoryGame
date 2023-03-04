import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeaderView = props => {
  const {matchCount = 0, turnsCount = 0} = props;
  return (
    <View style={style.containerStyle}>
      <Text style={style.textStyle}>{'MATCHES: ' + matchCount}</Text>
      <Text style={style.textStyle}>{'TURNS: ' + turnsCount}</Text>
    </View>
  );
};

export default HeaderView;

const style = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textStyle: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});
