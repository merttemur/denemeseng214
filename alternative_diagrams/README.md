# Alternative Architecture Diagrams

This directory contains alternative representations of the Prestige Hotel Reservation system architecture using different diagram formats.

## Available Diagram Formats

### 1. C4 Model Diagrams (Mermaid)

Located in `c4_diagram.md`

The C4 model provides a hierarchical way to describe software architecture at different levels of abstraction:
- **Context Diagram**: Shows the system in context with its users and external dependencies
- **Container Diagram**: Shows the high-level technical building blocks 
- **Component Diagram**: Shows how a container is composed of components

### 2. PlantUML Diagrams

Located in the `plantuml` directory

PlantUML offers a powerful text-based diagram syntax with strong support for software architecture diagrams:
- `component_diagram.puml`: Shows the detailed component structure of the application

## How to View the Diagrams

### C4 Model Diagrams (Mermaid)
- These can be viewed directly on GitHub or using any Markdown viewer that supports Mermaid.
- Alternatively, copy the diagram content into [Mermaid Live Editor](https://mermaid.live/).

### PlantUML Diagrams
- Use an IDE plugin that supports PlantUML, such as the "PlantUML Integration" for VS Code.
- Use the online [PlantUML Web Server](http://www.plantuml.com/plantuml/uml/).
- Install PlantUML locally and render the diagrams with the PlantUML JAR.

## Why Multiple Diagram Formats?

Different diagram formats serve different purposes and audiences:

- **Mermaid Diagrams**: Easy to integrate with Markdown and view directly on GitHub.
- **C4 Model**: Provides a consistent approach to diagramming at different abstraction levels.
- **PlantUML**: Offers rich, detailed diagram options with extensive customization.

Choose the diagram format that best suits your needs based on your audience and the level of detail required. 