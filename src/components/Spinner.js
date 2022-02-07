import React from 'react';
import loading from './loading.gif'
const Spinner =()=> {
  
    return (<div className='text-center'>
        <img className="my-3" src={loading} alt="loading" />
    </div>);
  
}

// Note: We don't need external gif to behave as a loader, because bootsrap also contains various loaders. Just look it up.
export default Spinner;
