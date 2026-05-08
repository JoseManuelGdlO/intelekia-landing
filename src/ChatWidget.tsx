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
  const [isTyping, setIsTyping] = useState(false);
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
    setMessages([]);
    setIsTyping(false);
    localStorage.removeItem(STORAGE_KEY);
  };
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [open]);

  // Scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);  // ← isTyping como dependencia adicional

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const newMessages: Message[] = [...messages, { type: 'mine', text }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);
    
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
    }finally {
      setIsTyping(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setIsTyping(false);            // ← nueva línea
    localStorage.removeItem(STORAGE_KEY);
  };
  
  const widget = (
    <>
      {/* Botón flotante siempre visible */}
      <button
        onClick={() => setOpen(!open)}
        className="chat-toggle-btn-fixed"
        aria-label={open ? 'Cerrar chat' : 'Abrir chat'}>
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
              {isTyping && (
  <div className="message other">
    <div className="typing-indicator">
      <span></span><span></span><span></span>
    </div>
  </div>
)}
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

            <button type="submit" className="send-btn" aria-label="Enviar mensaje">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
            </form>
          </main>
        </div>
      )}
    </>
  );
  return ReactDOM.createPortal(widget, document.body);
}