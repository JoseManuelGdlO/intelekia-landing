from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_tavily import TavilySearch
from langgraph.checkpoint.memory import MemorySaver
from langchain.tools import tool
import requests
from bs4 import BeautifulSoup
import os

load_dotenv()

memory = MemorySaver()

# ---------- Herramientas ----------
tavily_tool = TavilySearch(max_results=2)

@tool
def scrape_website(url: str) -> str:
    """Extrae el texto principal de una página web."""
    try:
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
        # Desactivar verificación SSL solo si es necesario (intelekia.cloud)
        verify_ssl = True
        if "intelekia.cloud" in url:
            verify_ssl = False

        response = requests.get(url, timeout=10, headers=headers, verify=verify_ssl)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        for element in soup(["script", "style", "nav", "footer", "header"]):
            element.decompose()
        text = soup.get_text(separator=' ', strip=True)
        return text[:6000]
    except Exception as e:
        return f"Error al obtener la página: {str(e)}"

tools = [tavily_tool, scrape_website]

# ---------- Modelo Groq ----------
llm = ChatGroq(
    api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.1-8b-instant",  # puedes cambiarlo según tu necesidad
    temperature=0.7,
)
llm_with_tools = llm.bind_tools(tools)

graph_config = {"configurable": {"thread_id": "1"}}