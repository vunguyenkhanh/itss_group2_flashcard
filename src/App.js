import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FindButton from './components/FindButton'
import ShowWord from './components/showWord/ShowWord'
import AddButton from './components/AddButton'
import EditButton from './components/EditButton'

class App extends Component {

  state = {
    dictionary: [
      {
        id: 1,
        kanji: '犬',
        furigana: 'inu',
        meaning: 'dog'
      },
      {
        id: 2,
        kanji: '猫',
        furigana: 'neko',
        meaning: 'cat'
      },
      {
        id: 3,
        kanji: '鳥',
        furigana: 'tori',
        meaning: 'bird'
      },
      {
        id: 4,
        kanji: '犬',
        furigana: 'inu',
        meaning: 'dog'
      }
    ],
    idGenerator: 5,
    showFurigana: true,
    showMeaning: true,
    displayWordID: 1
  }
  
  addWord = (newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let maxID = dictionary[dictionary.length-1].id
    dictionary[dictionary.length] = {
      id : this.state.idGenerator,
      kanji : newKanji,
      furigana : newFurigana,
      meaning : newMeaning
    }
    let idGenerator = this.state.idGenerator + 1
    this.setState({dictionary, idGenerator})
    console.log(dictionary)
  }
  
  edit = (newKanji, newFurigana, newMeaning) => {
    let dictionary = this.state.dictionary
    let index = dictionary.findIndex((element) => {
      return element.id = this.state.displayWordID
    })
    dictionary[index] = {
      id: this.state.displayWordID,
      kanji: newKanji,
      furigana: newFurigana,
      meaning: newMeaning
    }
    this.setState({ dictionary })
  }

  delete = () => {
    let dictionary = this.state.dictionary
    dictionary = dictionary.filter((element) => {
      return element.id !== this.state.displayWordID
    })
    this.setState({ dictionary: dictionary, displayWordID: dictionary[0].id})
  }

  render() {
    var displayWord = this.state.dictionary.find(((element) => {
      return element.id === this.state.displayWordID
    }))

    return (
      <div className="App">
        <FindButton />
        <AddButton 
          addWord = {this.addWord}
        />
        <EditButton 
          displayWord = {displayWord} 
          editWord = {this.edit}
          deleteWord = {this.delete}/> {/* Delete Button */}
        <ShowWord 
          dictionary = {this.state.dictionary}
        />
      </div>
    );
  }
}

export default App;