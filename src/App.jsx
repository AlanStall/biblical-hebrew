import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer';

export function App() {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-gradient-to-r from-blue-800 via-gray-900 to-blue-800 pt-2'>
      <div className="container min-h-auto mx-auto p-2">        
        < Outlet />
      </div>
      <div className="tall:absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}