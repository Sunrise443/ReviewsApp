import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile'

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='users/:id' element={<UserProfile />} />
        </Routes>
    </BrowserRouter>
);

export default App;
