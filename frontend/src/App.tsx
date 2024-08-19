import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile'
import { Diary } from './pages/Diary'
import { ForFriends } from './pages/ForFriends'

const App: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<UserProfile />} />
                <Route path='/diary' element={<Diary />} />
                <Route path='/friendsposts' element={<ForFriends />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
