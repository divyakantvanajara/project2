import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserLayout from './UserLayout';

import { BrowserRouter,Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<UserLayout />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
root.render(<MyRouter />);