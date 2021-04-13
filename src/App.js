import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FindButton from './components/FindButton'
import ShowWord from './components/showWord/ShowWord'
import AddButton from './components/AddButton'

class App extends Component {
  
  state = {
    dictionary: [
      {
        id: 1,
        kanji: '犬',
        furigana: 'いぬ',
        meaning: 'dog'
      },
      {
        id: 2,
        kanji: '猫',
        furigana: 'ねこ',
        meaning: 'cat'
      },
      {
        id: 3,
        kanji: '鳥',
        furigana: 'とり',
        meaning: 'bird'
      },
      {
        id: 4,
        kanji: '山',
        furigana: 'やま',
        meaning: 'mountain'
      },
      {
        id: 5,
        kanji: '原',
        furigana: 'げん',
        meaning: 'source'
      },
      {
        id: 6,
        kanji: '花',
        furigana: 'はな',
        meaning: 'flower'
      }
    ]
  }

  addWord = (newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let newID = this.state.dictionary[this.state.dictionary.length-1].id + 1
    dictionary[dictionary.length] = {
      id : newID,
      kanji : newKanji,
      furigana : newFurigana,
      meaning : newMeaning
    }
    
    this.setState({ dictionary })
  }

  edit = (id, newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let index = dictionary.findIndex((element) => {
      return element.id === id
    })
    dictionary[index] = {
      id: id,
      kanji: newKanji,
      furigana: newFurigana,
      meaning: newMeaning
    }
    this.setState({ dictionary })
  }

  delete = (id) => {
    let dictionary = this.state.dictionary
    dictionary = dictionary.filter((element) => {
      return element.id !== id
    })
    this.setState({ dictionary: dictionary, displayWordID: dictionary[0].id})
  }

  render() {
    return (
      <div className="App">
        <FindButton
          dictionary = {this.state.dictionary} 
        /> 
        <AddButton 
          addWord = {this.addWord}
        /> 
        <ShowWord 
          dictionary = {this.state.dictionary}
          editWord = {this.edit}
          deleteWord = {this.delete}
        />
      </div>
    );
  }
}

export default App;