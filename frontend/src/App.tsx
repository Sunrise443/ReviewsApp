import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home';
import { UserProfile } from './pages/UserProfile'
import { Diary } from './pages/Diary'
import { ForFriends } from './pages/ForFriends'
import { Register } from './pages/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';

function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
}

function RegisterAndLogout() {
    localStorage.clear()
    return <Register/>
}

const App: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />}/>
                <Route path='/logout' element={<Logout />}/>
                <Route path='/register' element={<RegisterAndLogout />}/>
                <Route path='/user' element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
                <Route path='/diary' element={<Diary />} />
                <Route path='/friendsposts' element={<ForFriends />} />
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
