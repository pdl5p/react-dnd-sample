import * as React from 'react';
import refreshTime from '../actions/refreshTime';

export default function RefreshTime({store}){
    return (
        <div><button onClick={() => store.dispatch(refreshTime())}>Refresh</button></div>
    )
}