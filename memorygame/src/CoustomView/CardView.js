import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CardView = props => {
  const {
    item,
    sltCardCount,
    setSltCardCount,
    selectedCard,
    setSelectedCard,
    matchFoundItemArray,
    setMatchFoundItemArray,
    setTurnCount,
    turnCount,
  } = props;

  const [hideCard, setHideCard] = useState(true);
  const [disableCard, setDisableCard] = useState(false);

  useEffect(() => {
    if (sltCardCount == 0 && !hideCard) {
      setHideCard(true);
    }
    if (matchFoundItemArray.includes(item)) {
      setDisableCard(true);
    }
  }, [sltCardCount]);

  const onCardClicklistner = () => {
    if (sltCardCount >= 2) {
      // for  reset value
      setSltCardCount(0);
      setSelectedCard('');
    } else {
      // close and hide
      setHideCard(!hideCard);

      if (selectedCard === '') {
        setSelectedCard(item);
        setSltCardCount(sltCardCount + 1);
      } else {
        // second click
        if (selectedCard == item) {
          setTimeout(() => {
            setMatchFoundItemArray(matchFoundItemArray => [
              ...matchFoundItemArray,
              item,
            ]);
            setSltCardCount(0);
            setSelectedCard('');
            setTurnCount(turnCount + 1);  
          }, 500);

        } else {
          setTimeout(() => {
            setSelectedCard('');
            setSltCardCount(0);
            setTurnCount(turnCount + 1);
          }, 500);
        }
      }
    }
  };

  return !disableCard ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        onCardClicklistner();
      }}>
      <View style={[styles.cardViewStyle,styles.cardViewColor]}>
        <Text>{item}</Text>
      </View>
      {hideCard ? (
        <View
          style={[styles.cardViewStyle,styles.hideCardColorStyle]}
        />
      ) : null}
    </TouchableOpacity>
  ) : (
    <View
      style={[styles.cardViewStyle,styles.disableCardColor]}
    />
  );
};

export default CardView;

const styles = StyleSheet.create({
  cardViewStyle: {
    width: (Dimensions.get('window').width - 10) * 0.25,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    marginBottom: 2,
  },
  cardViewColor:{
    backgroundColor: '#f6e1c3',
  },
  hideCardColorStyle:{
    position: 'absolute',
    backgroundColor: '#395b64',
  },
  disableCardColor:{
    backgroundColor: '#000000',
  }
});
