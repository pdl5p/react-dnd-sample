import * as React from 'react';
import { connect } from 'react-redux';

import dateformat from 'dateformat';

class C1 extends React.Component<any, any>{
    render(){

        //console.log(this.props.state);
        const { test, dt } = this.props.state;
        return <h1>C1..{test} {dateformat(dt)}</h1>
    }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps)(C1);