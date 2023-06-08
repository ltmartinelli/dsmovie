import
{
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Listing from './components/pages/Listing';
import Form from './components/pages/Form';
import Header from "./components/Header";

export default function App()
{
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="form/:movieId" element={<Form />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

