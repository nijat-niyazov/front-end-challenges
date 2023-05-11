import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ResNavbar from './challenges/ResNavbar';
import CA from './challenges/CA';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ResNavbar />}>
        <Route path="home" element={<ResNavbar />} />
        <Route path="tasks" element={<ResNavbar />} />
        <Route path="analytics" element={<ResNavbar />} />
        <Route path="help" element={<ResNavbar />} />
        <Route path="profile" element={<ResNavbar />} />
        <Route path="wallet" element={<ResNavbar />} />
        <Route path="settings" element={<ResNavbar />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
  // return <CA />;
};

export default App;
