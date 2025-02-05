import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './stores/store.js'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>
)
