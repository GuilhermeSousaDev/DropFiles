import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import CategoryFiles from './pages/CategoryFiles';
import EditProfile from './pages/EditProfile';
import Files from './pages/Files';
import DownloadFile from './pages/Files/downloadFile';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Upload from './pages/Upload';

export default function Router() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/upload' element={<Upload />} />
                    <Route path='/files' element={<Files />} />
                    <Route path='/files/:id' element={<DownloadFile />} />
                    <Route path='/files/category' element={<CategoryFiles />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/profile/' element={<Profile />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};