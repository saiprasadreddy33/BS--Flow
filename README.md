View Project: https://chatbot-flow-builder-alpha.vercel.app/
# Simple Chatbot Flow Builder using Next.js

## Overview

This project is a simple Chatbot Flow Builder implemented using Next.js and React-Flow. The flow builder allows users to create chatbot flows by connecting multiple messages together to decide the order of execution.

## Features

1. **Text Node**
   - Our flow builder currently supports only one type of message (i.e., Text Message).
   - Multiple Text Nodes can exist in one flow.
   - Nodes are added to the flow by dragging and dropping a Node from the Nodes Panel.

2. **Nodes Panel**
   - This panel houses all kinds of Nodes that our Flow Builder supports.
   - Currently, there is only a Message Node, but the system is designed to support more types of Nodes in the future to make this section extensible.

3. **Edge**
   - Connects two Nodes together.

4. **Source Handle**
   - Source of a connecting edge.
   - Can only have one edge originating from a source handle.

5. **Target Handle**
   - Target of a connecting edge.
   - Can have more than one edge connecting to a target handle.

6. **Settings Panel**
   - Settings Panel will replace the Nodes Panel when a Node is selected.
   - It has a text field to edit the text of the selected Text Node.

7. **Save Button**
   - Button to save the flow.
   - Save button press will show an error if there are more than one Nodes and more than one Node has empty target handles.

## Usage

To use the Chatbot Flow Builder, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.
4. Access the application through your web browser at `http://localhost:3000`.

## Contribution

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.
