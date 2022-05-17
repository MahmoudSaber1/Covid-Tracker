import { Route } from 'react-router-dom';
import CovedTrack from './Pages/Coved/CovedTrack';
import Home from './Pages/Home/Home';

function App() {
    return (
        <div>
            <Route path="/" component={Home} exact />
            <Route path="/covid-tracker" component={CovedTrack} exact />
        </div>
    );
}

export default App;
