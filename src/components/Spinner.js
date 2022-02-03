import React, { Component } from 'react';
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (<div className='text-center'>
        <img src={loading} alt="loading" />
    </div>);
  }
}

// Note: We don't need external gif to behave as a loader, because bootsrap also contains various loaders. Just look it up.
export default Spinner;
