import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; // Asegúrate de tener react-router-dom
import '../chatbot/public.css'; // reutilizas los estilos del chat

interface Message {
  type: 'mine' | 'other';
  text: string;
}

const STORAGE_KEY = 'intelekia_chat';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Cerrar el chat cada vez que cambie la ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Cargar mensajes guardados al montar
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      } catch {}
    }
    // Mensaje de bienvenida inicial
    setMessages([{ type: 'other', text: '¡Hola! Soy el asistente virtual de Intelekia. ¿En qué puedo ayudarte?' }]);
  }, []);

  // Guardar mensajes en localStorage cada vez que cambien
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMessages: Message[] = [...messages, { type: 'mine', text }];
    setMessages(newMessages);
    setInput('');

    // Simular respuesta de IA (sustituye por llamada a tu API)
    setTimeout(() => {
      const iaResponse = '¡Gracias por tu mensaje! ¿En qué más puedo ayudarte?';
      setMessages(prev => [...prev, { type: 'other', text: iaResponse }]);
    }, 800);
  };

  const handleClear = () => {
    setMessages([{ type: 'other', text: '¡Hola! Soy el asistente virtual de Intelekia. ¿En qué puedo ayudarte?' }]);
  };

  return (
    <>
      {/* Botón flotante siempre visible */}
      <button
        onClick={() => setOpen(!open)}
        className="chat-toggle-btn-fixed"
        aria-label={open ? 'Cerrar chat' : 'Abrir chat'}
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Panel del chat (solo visible si open === true) */}
      {open && (
        <div className="chat-widget-panel">
          <main className="chat-app">
            <header className="chat-header">
              <div className="brand">
                <img src="/chatbot/image/mind.png" alt="Logo IA" className="logo" />
                <h1>AI Agente</h1>
              </div>
              <span className="status">Asistente en línea</span>
            </header>

            <section className="chat-messages" aria-label="Mensajes">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.type}`}>
                  {msg.type === 'other' ? (
                    <div className="message-content" dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    msg.text
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </section>

            <form className="chat-footer" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                value={input}
                onChange={e => setInput(e.target.value)}
                maxLength={240}
                required
              />
              <button type="submit" className="send-btn">Enviar</button>
              <button type="button" className="clear-btn" onClick={handleClear}>Borrar</button>
            </form>
          </main>
        </div>
      )}
    </>
  );
}