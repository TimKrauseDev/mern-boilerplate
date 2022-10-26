import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';

const App = () => (
    <Router>
        <div>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Books />} />
                <Route exact path="/books" element={<Books />} />
                <Route exact path="/books/:bookId" element={<Detail />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    </Router>
);

export default App;