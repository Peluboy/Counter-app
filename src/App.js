import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import Home from './pages/Home';
import { Error404 } from './pages/Error404';

function App() {

  return (
    <>
     <ErrorBoundary >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = '*' element={<Error404 />}/> 
        </Routes>
       </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
