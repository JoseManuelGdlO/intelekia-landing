
Desde la carpeta `langgraph-project`:

1. **Crear entorno virtual**  
   python -m venv .venv

2. **Activarlo**

    - Windows: .venv\Scripts\activate

    - Mac/Linux: source .venv/bin/activate

3. **Instalar dependencias**
Con uv (recomendado si ya está instalado):

uv sync

O con pip:

pip install -e .

4. **Configurar API key de Groq**
Crea un archivo .env con este contenido (reemplaza TU_API_KEY por tu clave real):

.env
GROQ_API_KEY= TU_API_KEY
TAVILY_API_KEY= TuU_API_KEY

El repositorio no incluye el archivo .env por seguridad; debes crearlo manualmente.

5. **Ejecutar el chatbot**

python main.py