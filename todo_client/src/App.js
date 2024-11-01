import './App.css';
import router from './router/routes';
import { RouterProvider } from 'react-router-dom'

function App() {
  window.addEventListener('beforeunload', () => {
    localStorage.clear();
  });
  return (
    <RouterProvider router={router} />
  );
}

export default App;
