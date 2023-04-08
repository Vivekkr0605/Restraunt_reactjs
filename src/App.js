import React from 'react'
import Resturant from './component/Basics/Resturant'

const App = () => {
  return (
    // <div>App</div>
    <Resturant />
  )
}

export default App























// import React from 'react'

// const App = () => {
//   // written only single element
//   return (
//     // react fragment
//     <>
//     {/* can add multiple tag inside parent tag */}
//     <div>
//       Hello World
//     </div>
//     {/* Class is reserve keyword so we can't use is css instead have to use className */}
//     {/* attribute should be in camelcase */}
//     {/* can use js by using {} braces*/}
//      <h1 className='myclass'>Class related rules {3+3} </h1>
//     <p>React</p>
//     {/* img tag should be closed */}
//     <img src='' alt=''></img>

//   {/* calling another functional component inside app component  */}
//   {/* calling a component inside other component ------ nested component */}
//    <MyName />
//    <MyName />

//     </>
//   )
// }

// //  creating component - functional component
//    const MyName = () => {
//      return <h1>Vivek Kumar</h1>
//    }


// // const App = () => {
// //   return React.createElement("h1", {}, "Hello world");
// // }
// // const App = () => {
// //   return React.createElement("h1", {}, React.createElement("h1", {}, "Hello world"));
// // }
// export default App