import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'; 
import '/chatbot/public.css'; 
import ReactDOM from 'react-dom';

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

    // Cerrar el chat al hacer clic fuera de él
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (!open) return;
    const target = event.target as HTMLElement;
    if (
      target.closest('.chat-toggle-btn-fixed') ||
      target.closest('.chat-widget-panel')
    ) {
      return;
    }
    setOpen(false);
  };
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [open]);

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
  // Si no hay historial guardado o está vacío
    setMessages([]);
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMessages: Message[] = [...messages, { type: 'mine', text }];
    setMessages(newMessages);
    setInput('');
    

    try {
      const webhookUrl = 'https://intelekia-n8n.vvggha.easypanel.host/webhook/cc18297d-b988-475f-85f3-9a9290f2ebaf';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`); 

const htmlResponse = await response.text();

      setMessages(prev => [...prev, { type: 'other', text: htmlResponse }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { type: 'other', text: 'Ocurrió un error al contactar al asistente.' }]);
    }
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };
  
  const widget = (
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
  return ReactDOM.createPortal(widget, document.body);
}