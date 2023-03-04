import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import CardView from '../CoustomView/CardView';
import HeaderView from '../CoustomView/Header';

let initialSequence = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
];
const PlayGroundScreen = () => {
  const [alphabate, setAlphabate] = useState([]);
  const [sltCardCount, setSltCardCount] = useState(0);
  const [selectedCard,setSelectedCard] = useState("");
  const [matchFoundItemArray,setMatchFoundItemArray]=useState([]);
  const [turnCount,setTurnCount] = useState(0);
 
  useEffect(() => {
    var shuffledArrayVar = shuffleArray(initialSequence);
    setAlphabate(shuffledArrayVar);
  }, []);

  const shuffleArray = array => {
    
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <View>
      <HeaderView matchCount={matchFoundItemArray.length} turnsCount={turnCount}/>
      <FlatList
        data={alphabate}
        keyExtractor={(item, index) => index+""}
        numColumns={4}
        contentContainerStyle={Style.containerStyle}
        renderItem={({item}) => {
          return (
            <CardView
              item={item}
              sltCardCount={sltCardCount}
              setSltCardCount={setSltCardCount}
              selectedCard = {selectedCard}
              setSelectedCard = {setSelectedCard}
              matchFoundItemArray={matchFoundItemArray}
              setMatchFoundItemArray={setMatchFoundItemArray}
              setTurnCount={setTurnCount}
              turnCount={turnCount}
            />
          );
        }}
      />
    </View>
  );
};

export default PlayGroundScreen;

const Style = StyleSheet.create({
    containerStyle:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        padding: 1,
        marginLeft: 2,
      }
});