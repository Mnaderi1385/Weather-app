import { Provider } from 'react-redux';
import '../app.css';
import store from '../Redux/store';
import Weather from './Weather/Weather';


const App = () => {
    return (
        <Provider store={store}>
            <Weather />
        </Provider>
    );
}

export default App;