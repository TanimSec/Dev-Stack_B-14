# Dev Stack Builder

## Project Description

Dev Stack Builder is a responsive React website where users can explore different web development technologies and build their own development stack. Users can view technology details, add technologies to their stack, and remove them when needed.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON

## Features

1. **Explore Technologies**
   - Browse different technologies with their name, category, description, difficulty, rating, and icon.

2. **Build Your Own Stack**
   - Add technologies to your personal stack.
   - Duplicate technologies cannot be added.

3. **Manage Your Stack**
   - Remove individual technologies.
   - Remove all selected technologies at once.
   - Toast notifications provide feedback for stack actions.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the UI should look like.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data stored inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component remember and update data. In this project, it is used to store the technologies selected by the user in their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run code after a component renders. We use it to load the technology data from the JSON file when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React know which item was added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty, we can show an empty-stack message. When technologies are added, we show the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a function passed to it as a prop.