import { useState } from 'react';
import './App.css'
import QRCode from 'react-qr-code';
function App() {

  const [text,setText] = useState("uu");

  function generateQR(e){
    setText(e.target.value)
  }
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <>
    <div className="container">
    <div className="APP"/> 
    <h1 className='bg-yellow-700'>QR Code Genreator</h1>
    <QRCode value ={text}/>

    <div className="Input-here">
      <p>Enter your text here</p>

      <input  type="text" value={text} onChange = {(e)=> 
         {handleChange(e)}}/>
      {/* <button onClick={text}>Generate</button> */}
    </div>
    </div>
    </>


      
  )
}

export default App

// {/*   
//       document.getElementById('img').src =`https://api.qrserver.com/v1/create-qr- 
//      code/?size=150x150&data=${txt}`
//   } */}
// import { useState } from 'react';
// import './App.css'
// import QRCode from 'react-qr-code';
// function App() {

//   const [text,setText] = useState("uu");

//   function generateQR(e){
//     setText(e.target.value)
//   }
//   function handleChange(e)
  
//   {
    
//     setText(e.target.value)
//   }
//   return (
//     <>
//       <div className="APP"/> 
//         <h1>QR Code Genreator</h1>
//           <QRCode value ={text}/>

//      <div className="Input-here">
//       <p>Enter your text here</p>

//       <input type="text" value={text} onChange = {(e)=> 
//          {handleChange(e)}}/>
//     </div>
    
//     </>
      
//   )
// }

// export default App

{/*   
      document.getElementById('img').src =`https://api.qrserver.com/v1/create-qr- 
     code/?size=150x150&data=${txt}`
  } */}