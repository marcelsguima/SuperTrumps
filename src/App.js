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
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value,
    }, () => {
      this.validateForm();
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
    console.log(checkString);
    console.log(Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
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
          // , hasTrunfo,
          isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ onSaveButtonClick }
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
