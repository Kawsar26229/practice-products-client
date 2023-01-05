import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddProducts from './components/AddProducts';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import Products from './components/Products';
import Main from './Layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => fetch('http://localhost:8000/products'),
      },
      {
        path: '/',
        element: <Products></Products>,
      },
      {
        path: '/addProduct',
        element: <AddProducts></AddProducts>,
      },
      {
        path: '/editProduct/:id',
        element: <EditProduct></EditProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/products/${params.id}`),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
