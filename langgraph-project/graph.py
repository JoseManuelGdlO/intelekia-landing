from langgraph.graph import StateGraph, START
from langgraph.prebuilt import ToolNode, tools_condition
from langchain_core.messages import SystemMessage  # necesario para el prompt del sistema
from config import tools, memory, llm_with_tools
from state import State

SYSTEM_PROMPT = """Eres un asistente especializado exclusivamente en Intelekia Consultoría (https://intelekia.cloud/). 
Tu única función es proporcionar información precisa sobre esta empresa: sus servicios de transformación digital con inteligencia artificial, 
agentes inteligentes, automatización, analítica de datos, soluciones en la nube, etc. 
Si el usuario te saluda, se presenta o pregunta cualquier cosa no relacionada con Intelekia Consultoría, 
responde de manera más amable que solo estás programado para hablar de ese tema e invítalo a preguntar sobre la empresa. 
Nunca des información que no esté directamente relacionada con Intelekia Consultoría."""

def build_graph() -> StateGraph:
    graph_builder = StateGraph(State)

    def chatbot(state: State):
        messages = state["messages"]
        # Insertar el system prompt si no hay ya un SystemMessage en la conversación
        if not any(isinstance(m, SystemMessage) for m in messages):
            messages = [SystemMessage(content=SYSTEM_PROMPT)] + messages
        message = llm_with_tools.invoke(messages)
        return {"messages": [message]}

    graph_builder.add_node("chatbot", chatbot)

    tool_node = ToolNode(tools)
    graph_builder.add_node("tools", tool_node)

    graph_builder.add_conditional_edges("chatbot", tools_condition)
    graph_builder.add_edge("tools", "chatbot")
    graph_builder.add_edge(START, "chatbot")

    return graph_builder.compile(checkpointer=memory)