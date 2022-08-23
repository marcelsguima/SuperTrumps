import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor>
          Nome da carta:
          <input data-testid="name-input" type="text" name="name" />
        </label>
        <label htmlFor>
          Descrição da carta:
          <input data-testid="description-input" type="textarea" name="descripition" />
        </label>
        <label htmlFor>
          Primeiro Atributo:
          <input data-testid="attr1-input" type="number" name="att1" />
        </label>
        <label htmlFor>
          Segundo Atributo:
          <input data-testid="attr2-input" type="number" name="att2" />
        </label>
        <label htmlFor>
          Terceiro Atributo:
          <input data-testid="attr3-input" type="number" name="att3" />
        </label>
        <label htmlFor>
          Imagem:
          <input data-testid="image-input" name="img" />
        </label>
        <label htmlFor>
          Nome da carta:
          <select data-testid="rare-input" type="select" name="rarity">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor>
          Super Trunfo:
          <input data-testid="trunfo-input" type="checkbox" name="superTrunfo" />
        </label>

        <button type="button" name="Salvar" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
