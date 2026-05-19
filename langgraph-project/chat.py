from graph import build_graph
from config import graph_config

def stream_graph_updates(user_input: str):
    graph = build_graph()
    previous_count = 0
    for event in graph.stream(
        {"messages": [{"role": "user", "content": user_input}]},
        config=graph_config,
        stream_mode="values"
    ):
        messages = event["messages"]
        for msg in messages[previous_count:]:
            msg_type = msg.__class__.__name__

            if msg_type == "HumanMessage":
                print("\n" + "=" * 10 + " Human Message " + "=" * 30)
                print(msg.content)
                print("=" * 50)

            elif msg_type == "AIMessage":
                print("\n" + "=" * 10 + " AI Message " + "=" * 32)
                if hasattr(msg, "tool_calls") and msg.tool_calls:
                    print("Tool Calls:")
                    for tc in msg.tool_calls:
                        print(f"    - {tc['name']}({tc['args']})")
                # Extraer solo texto plano (evita el diccionario de Gemini)
                content = msg.content
                if isinstance(content, list):
                    text_parts = [block.get('text', '') for block in content if block.get('type') == 'text']
                    content = '\n'.join(text_parts)
                if content:
                    print(f"  Response: {content}")
                else:
                    print("  (esperando herramienta...)")
                print("=" * 50)

            elif msg_type == "ToolMessage":
                print("\n" + "=" * 10 + " Tool Message " + "=" * 31)
                print(f"   Tool: {getattr(msg, 'name', 'unknown')}")
                # Opcional: formatear el JSON para mejor legibilidad
                result = msg.content
                try:
                    import json
                    result = json.dumps(json.loads(result), indent=2, ensure_ascii=False)
                except:
                    pass
                print(f"   Result: {result}")
                print("=" * 50)

        previous_count = len(messages)

def run_chat_loop():
    print("Chat iniciado. Escribe 'quit', 'exit' o 'q' para salir.")
    while True:
        try:
            user_input = input("User: ")
            if user_input.lower() in ["quit", "exit", "q"]:
                print("¡Adiós!")
                break
            stream_graph_updates(user_input)
        except Exception as e:
            print(f"Error inesperado: {e}")
            break