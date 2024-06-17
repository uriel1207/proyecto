import { LitElement, html, css } from 'lit';

class LoginForm extends LitElement {
  static styles = css`
    .form-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    .form-header {
        margin-bottom: 20px;
        justify-content: center;
      }
  
      .form-header img {
        max-width: 100px; 
        margin-bottom: 10px;
    
      }
  
    .form-group {
      margin-bottom: 10px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
    }

    .form-group input {
      width: calc(100% - 12px);
      padding: 6px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .form-group button {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    .form-group button:hover {
      background-color: #0056b3;
    }
  `;
    static properties={
      username:{
        type:String
    },
    password:{
      type:String
    }
  }
  render() {
    return html`
      <div class="form-container">
      <div class="form-header">
          <img src="logo.jpg" alt="Logo" />
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password">
        </div>
        <div class="form-group">
          <button @click="${this._handleLogin}">Login</button>
        </div>
      </div>
    `;
  }

  _handleLogin() {
    const username = this.shadowRoot.getElementById('username').value;
    const password = this.shadowRoot.getElementById('password').value;
    
    console.log('Username:', username);
    console.log('Password:', password);
    
    if (username === 'uriel' && password === 'Gris0712') {
      alert('Inicio de sesión exitoso!');
      localStorage.setItem('username', username);
      window.location.href = 'principal.html';
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  }
}

customElements.define('login-form', LoginForm);
