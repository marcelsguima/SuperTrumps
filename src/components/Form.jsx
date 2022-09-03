import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Nome da carta:
          <input
            id="cardName"
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição da carta:
          <input
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          Primeiro Atributo:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Segundo Atributo:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          Terceiro Atributo:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          Imagem:
          <input
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRare">
          Raridade:
          <select
            data-testid="rare-input"
            type="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {!hasTrunfo ? (
          <label htmlFor="cardTrunfo">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        ) : <p>Você já tem um Super Trunfo em seu baralho</p>}
        ;

        <button
          type="button"
          name="Salvar"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
export default Form;
