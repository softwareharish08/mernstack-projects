import './App.css';
import AlertState from './context/AlertState';
import router from './router/routes';
import { RouterProvider } from 'react-router-dom'

function App() {
  window.addEventListener('beforeunload', () => {
    localStorage.clear();
  });
  return (
    <AlertState>
      <RouterProvider router={router} />
    </AlertState>
  );
}

export default App;
