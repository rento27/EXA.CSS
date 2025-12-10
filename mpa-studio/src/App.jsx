import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import VideoEditor from './pages/VideoEditor';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/video-editor" element={<VideoEditor />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
