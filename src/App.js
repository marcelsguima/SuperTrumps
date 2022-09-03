import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value,
    }, () => {
      this.validateForm();
    });
  };

  onSaveButtonClick = () => {
    const { isSaveButtonDisabled, deck, hasTrunfo, ...valor } = this.state;
    if (valor.cardTrunfo === true && hasTrunfo === false) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      deck: [valor, ...deck],
    }, () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    });
  };

  validateForm = () => {
    const min = 0;
    const max = 90;
    const absTotal = 210;
    const { cardName, cardDescription, cardImage, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;

    const checkString = cardName.length > min
    && cardDescription.length > min && cardImage.length > min
    && Number(cardAttr1) >= min && Number(cardAttr2) >= min && Number(cardAttr3) >= min
    && Number(cardAttr1) <= max && Number(cardAttr2) <= max && Number(cardAttr3) <= max
    && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= absTotal;
    this.setState({
      isSaveButtonDisabled: !checkString,
    });
    // console.log(checkString);
    // console.log(Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }

        />
      </div>
    );
  }
}

export default App;
