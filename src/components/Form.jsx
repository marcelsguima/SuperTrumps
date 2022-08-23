import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor>
          Nome da carta:
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor>
          Descrição da carta:
          <input
            data-testid="description-input"
            type="textarea"
            name="descripition"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor>
          Primeiro Atributo:
          <input
            data-testid="attr1-input"
            type="number"
            name="att1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor>
          Segundo Atributo:
          <input
            data-testid="attr2-input"
            type="number"
            name="att2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor>
          Terceiro Atributo:
          <input
            data-testid="attr3-input"
            type="number"
            name="att3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor>
          Imagem:
          <input
            data-testid="image-input"
            name="img"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor>
          Nome da carta:
          <select
            data-testid="rare-input"
            type="select"
            name="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor>
          Super Trunfo:
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="superTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

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
  // isSaveButtonDisabled:
  // onInputChange:
  // onSaveButtonClick:
};
export default Form;
