import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components';

ReactDOM.render(
    <Hello compiler='TSs' framework='React' />,
    document.getElementById('root'));
