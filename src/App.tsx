import * as React from 'react';
import C1 from './C1';
import RefreshTime from './components/RefreshTime';

const App = ({store}) => (<div>React<C1 /><RefreshTime store={store} /></div>);

export default App;