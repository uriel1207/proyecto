import { LitElement, html, css } from 'lit';

class Movement1Page extends LitElement {
  static styles = css`
    .movement-container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      text-align: left; 
    }

    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .description {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  .button-container {
    margin-top: 20px;
  }

  .button-container button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .button-container button:hover {
    background-color: #0056b3;
  }
  `;
  static properties={
    precio:{
      type:Number
    }
}

  render() {
    const precio='$3200.00';
    return html`
      <div class="movement-container">
        <h1 class="title">Movimiento 1</h1>
        <p class="description">Descripción:</p>
        <p>Compra de tenis de la tienda Nike.</p>
        <p><strong>${precio}</strong></p>
        <div class="button-container">
          <button @click="${this.regresar}">Regresar</button>
        </div>
      </div>
     `;
  }
  regresar() {
    
    window.location.href = 'principal.html';
  }
}

customElements.define('movement1-page', Movement1Page);
