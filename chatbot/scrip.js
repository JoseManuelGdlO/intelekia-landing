document.addEventListener('DOMContentLoaded', () => {

  const chatForm = document.getElementById('chatForm');
  const messageInput = document.getElementById('messageInput');
  const chatMessages = document.getElementById('chatMessages');
  const historyBody = document.getElementById('historyBody');
  const clearBtn = document.getElementById('clearBtn');

  let nombreUsuario = null; // Cambiado: sin nombre por defecto

  function agregarMensaje(tipo, texto) {
    const div = document.createElement('div');
    div.className = `message ${tipo}`;
    div.innerHTML = `
      <div class="message-content">
        ${texto}
      </div>
    `;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function agregarATabla(data) {
    if (!historyBody) return;

    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>${data.fecha || ''}</td>
      <td>${data.nombre || ''}</td>
      <td>${data.nacionalidad || ''}</td>
      <td>${data.total_consultas || ''}</td>
      <td>${data.respuestaboth || ''}</td>
    `;

    historyBody.appendChild(fila);
  }

  function mostrarEscribiendo() {
    const div = document.createElement('div');
    div.id = 'typing';
    div.className = 'message other';
    div.innerHTML = `
      <div class="message-content">
        Escribiendo...
      </div>
    `;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function ocultarEscribiendo() {
    const el = document.getElementById('typing');
    if (el) el.remove();
  }

  async function enviarMensaje() {
    const mensaje = messageInput.value.trim();
    if (!mensaje) return;

    agregarMensaje('mine', mensaje);
    messageInput.value = '';
    mostrarEscribiendo();

    try {
      // Construir el body sin enviar nombre si aún no se ha capturado
      const body = { mensaje: mensaje };
      if (nombreUsuario) {
        body.nombre = nombreUsuario;
      }

      const response = await fetch('https://intelekia-n8n.vvggha.easypanel.host/webhook/cc18297d-b988-475f-85f3-9a9290f2ebaf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const text = await response.text();
      ocultarEscribiendo();

      try {
        const data = JSON.parse(text);

        // CASO 1: JSON con nombre y respuestaboth (registro capturado)
        if (data.nombre && data.respuestaboth) {
          agregarMensaje('other', data.respuestaboth); // Usa el mensaje personalizado del asistente
          nombreUsuario = data.nombre; // Guarda el nombre real
          agregarATabla(data);
        }
        // CASO 2: JSON con solo respuestaboth (posible respuesta a consulta Intelekia)
        else if (data.respuestaboth) {
          agregarMensaje('other', data.respuestaboth);
        }
        // CASO 3: JSON sin campos reconocibles
        else {
          agregarMensaje('other', 'Sin respuesta');
        }

      } catch (e) {
        // Si no es JSON, se asume HTML (respuesta Intelekia)
        agregarMensaje('other', text);
      }

    } catch (error) {
      ocultarEscribiendo();
      agregarMensaje('other', 'Error al conectar con n8n');
      console.error(error);
    }
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    enviarMensaje();
  });

  // BOTÓN BORRAR
  clearBtn.addEventListener('click', () => {
    if (confirm('¿Seguro que quieres borrar la conversación?')) {
      chatMessages.innerHTML = '';
      messageInput.value = '';
      // No reiniciamos nombreUsuario para mantener el contexto; si quieres reiniciarlo, descomenta la siguiente línea:
      // nombreUsuario = null;
    }
  });

});