
 import {useState} from 'react';

function Error() {
  const [hasError, setHasError] = useState(false);
  if (hasError){
    throw new Error ("oh wow, there is an error in the react tree");
  }

  return (
    <>
    <div>
    
      <h2 >   Feel free to Test Error Boundary Implementation </h2>
      <button className='Error-message' onClick={() => setHasError(true)}> Test Error Boundary </button>
   </div> 
   </>
  );
}
export default Error;
