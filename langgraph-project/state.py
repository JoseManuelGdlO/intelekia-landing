# state.py
from typing import Annotated, List
from langgraph.graph.message import add_messages
from typing_extensions import TypedDict

class State(TypedDict):
    messages: Annotated[List, add_messages]