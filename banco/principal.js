import { LitElement, html, css } from 'lit';

class WelcomePage extends LitElement {
  static styles = css`
    .welcome-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
      text-align: center; 
    }
    h1{
        text-align:center;
    }
    .datos{
        text-align:center;
    }
    .tarjetas{
      font-size: 18px;
      margin-bottom: 10px;
      text-align:center;
    }
    .button-container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px; /* Espacio entre los botones */
      }
  
      .button-container button {
        width: 100%;
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
    username:{
        type:String
    },
    nombre:{
        type:String
    },
    cuenta:{
      type:Number
    },
    nomina:{
      type:Number
    },
    credito:{
      type:Number
    },
    tdc:{
      type:Number
    },
    now:{
      type:Date
    },
    hour:{
      type:Hour
    },
    saludo:{
      type:String
    }
};

  render() {

    const username = localStorage.getItem('username');
    const nombre = 'Uriel de Jesus Carbajal Morales';
    const cuenta = '1234567890';
    const nomina='$21,000.00';
    const credito='$21,000.00';
    const tdc='0987654321';
    const now = new Date();
    const hour = now.getHours();
    let saludo = 'Buenos días';

    if (hour >= 12 && hour < 18) {
      saludo = 'Buenas tardes';
    } else if (hour >= 18 || hour < 7) {
      saludo= 'Buenas noches';
    }

    return html`
    <h1>Datos del usuario</h1>
      <div class="welcome-container">
        <h2>${saludo}, ${username}</h2>
      </div>
      <div class="datos">
        <p><strong>Nombre completo:</strong> ${nombre}</p>
        <p><strong>Número de cuenta:</strong> ${cuenta}</p>
      </div>
      <div class="tarjetas">
        <p><strong>Nomina:</strong> ${nomina}</p>
        <p><strong>TDC:</strong> ${credito}</p>
        <p><strong>${tdc}</strong></p>
      </div>
      <div class="button-container">
          <button @click="${this.movimiento1}">Movimiento 1</button>
          <button @click="${this.movimiento2}">Movimiento 2</button>
          <button @click="${this.movimiento3}">Movimiento 3</button>
        </div>
        </div>

      
    `;
  }
  movimiento1() {
    window.location.href = 'movimiento1.html'; 
  }

  movimiento2() {
 
    window.location.href = 'movimiento2.html'; 
  }

  movimiento3() {
 
    window.location.href = 'movimiento3.html'; 
  }

}

customElements.define('welcome-page', WelcomePage);
