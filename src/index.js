// Libs
import { render } from 'react-dom';

//CSS
import './styles/reset.css'
import './styles/style.css'

// Routes
import routes from './router';

render(routes, document.getElementById('app'));
