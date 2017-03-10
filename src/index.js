import ReactDOM from 'react-dom';

//CSS
import './styles/reset.css'
import './styles/bootstrap-3.3.6-dist/css/bootstrap.min.css';
import './styles/style.css'

// Routes
import routes from './router';

ReactDOM.render(routes, document.getElementById('app'));
