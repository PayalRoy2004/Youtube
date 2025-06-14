import './App.css';
import MainContainer from './Components/MainContainer';
import Head from './Components/Head';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InnerContainer from './Components/InnerContainer';
import WatchPage from './Components/WatchPage';
function App() {
  const appRouter = createBrowserRouter([
  { path: "/", 
    element: <>
      <Head/>
      <MainContainer/>
    </>,
    children:[
    {
      path: "/", 
      element: <InnerContainer/>,
    },
      
    {
      path:"/history",
      element: <h1>This is history page</h1>
    },
  
    {
      path:"/watch",
      element: <WatchPage />
    },

  ]
  },

  {
      path:"/demo",
      element: <h1>This is demo</h1>
  },
]);
  return (
    <div>
    
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;