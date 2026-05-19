# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_core.messages import HumanMessage
from graph import build_graph

app = FastAPI()

# Configuración CORS – permite múltiples orígenes locales
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",   # Vite (React)
        "http://localhost:3000",   # React alternativo
        "http://localhost:8080",   # Servidor estático (python -m http.server)
        "http://127.0.0.1:8080",
        "http://localhost:5500",   # Live Server
        "http://127.0.0.1:5500",
    ],
    allow_credentials=True,
    allow_methods=["*"],           # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],           # Permitir todos los headers
)

class ChatRequest(BaseModel):
    message: str
    session_id: str = "default"

class ChatResponse(BaseModel):
    reply: str

# Construir el grafo (se ejecuta una sola vez al iniciar el servidor)
graph = build_graph()

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        config = {"configurable": {"thread_id": request.session_id}}
        result = graph.invoke(
            {"messages": [HumanMessage(content=request.message)]},
            config=config
        )
        # El último mensaje contiene la respuesta del asistente
        reply = result["messages"][-1].content
        return ChatResponse(reply=reply)
    except Exception as e:
        # Devolvemos el error con código 500
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)