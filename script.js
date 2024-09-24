// Lógica de autenticação na página de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      // Armazenar no localStorage
      localStorage.setItem('userLogin', username);
      alert('Autenticado com sucesso!');
      window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
      alert('Preencha todos os campos!');
    }
  });
  
  // Lógica para alteração de estilos no cadastro
  document.getElementById('fontStyle').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue === 'custom') {
      document.body.style.fontFamily = 'Courier New, monospace';
      document.querySelector('header').style.backgroundColor = '#000';
    } else {
      document.body.style.fontFamily = 'Arial, sans-serif';
      document.querySelector('header').style.backgroundColor = '#333';
    }
  });
  