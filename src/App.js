import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Routes } from './components/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default App;
