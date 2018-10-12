import React from 'react';
import AddTask from '../components/AddTask';
import VisibleTasksList from '../components/VisibleTasksList';
import Footer from '../components/Footer';

const App = () => (
    <div>
        <AddTask/>
        <VisibleTasksList/>
        <Footer />
    </div>
);

export default App;