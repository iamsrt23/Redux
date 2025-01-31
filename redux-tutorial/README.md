# Redux

It is a popular external Library for managing states in JavaScript applications, especially those built with frameworks like React. It Provides a centralized store for the state of our application , allowing us to access and update state values from any component in our application without having to pass props down through multiple levels of the component tree.

States in React:

- useState —> individual states manage
- useContext —> we can states anywhere
- useReducer —> Different components states can be managed

Redux : Manage States using reducers in a centralized store

Redux Cycle:

S → State

A → Actions

R → Reducers

S → Store

![Screenshot 2025-01-31 at 7.35.28 PM.png](Redux%2018c63324436c8038b758dcf740147b24/Screenshot_2025-01-31_at_7.35.28_PM.png)

![Screenshot 2025-01-31 at 7.39.46 PM.png](Redux%2018c63324436c8038b758dcf740147b24/Screenshot_2025-01-31_at_7.39.46_PM.png)

Steps To do Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

- We have to Create store.js

```jsx
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

```

- Wrap Provider in App {main.jsx}

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './projectFolder/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
)

```