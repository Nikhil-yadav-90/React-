import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';



function Dashboard(){
    return (
        <div>
            <h1>DashBoard Component</h1>
        </div>
    )
}



function Auth({isLogin}){
    console.log(isLogin)
  switch (isLogin) {
      case true:
          return <button>LogOut</button>
         
  
      default:
        return <button>LogIn</button>
  }
}

function App(){


    var isLogin = true;

/** 
 * ! 1. This is the first method where we use Functional Approach to Render JSX Element in the React Dom
 * ! so that it will gives desired Output
 */

    // function buttonRender(){
    //     if(isLogin){
    //       return  <button>LogOut</button>
    //     }else{
    //        return <button>LogIn</button>
    //     }
    // }
  
    // return(
    //     <div>
    //         <h1>Conditional Rendering</h1>
    //         {buttonRender()}

    //     </div>
    // );

/** 
 * ! 2. This is the Second method where we use Conditiona Approach directly to Render JSX Element in the React Dom
 * ! so that it will gives desired Output, Here we use if else method and save the value in variable and put that variable in place of
 * !required plcae.
 * !As we know that we could not put a html element in variable of javascript but here we do so. Why??? Because here we are using Recat
 * !Object and we can assign object in the variable as this element is transpile into React.creatElemet()
 * 
 * 
 * 
 * 
 */

// var Auth;

// if(isLogin){
//    Auth=  React.createElement("button",null,"Logout")
// }else{
//     Auth= <button>Login</button>
// }
// return(
//    <div>
//    <h1>Conditional Rendering</h1>
//    {Auth}  
//    </div>
// )


/** 
 * ! 3. This is third approach in which we use ternary operator to do the same conditional task here and we can return jsx object 
 * !as desired
 */
// return (
//     <div>
        
//         <h1>Conditional Rendering</h1>
//         {isLogin?<button>LogOut</button>:<button>LogIn</button>}
        
        
        
//     </div>
// )

/**
 * !4. In this approach we use truthy value concept as && operator return next value on tuthy first value thus we implement same here
 */


// return(
//     <div>
//   <h1>Conditional Rendering</h1>
//         {isLogin&&<Dashboard/>}
//   </div>
// )


/**
 * !5. Here We use Iffi Function To Solve this problem we hust place our code in the iffe function and invoke it so that it return 
 * ! the block we desired as first react came into picture which converts the javascript into jsx and then babel converts jsx into
 * !react element which converted into dom eleemt by react dom 
 */

// return(
//     <div>
//   <h1>Conditional Rendering</h1>
//        {
//            (function(){
//                if(isLogin){
//                    return <button>LogOut</button>
//                }else{
//                    return <button>LogIn</button>
//                }
//            })()}
//   </div>
// )



return(
    <div>
  <h1>Conditional Rendering</h1>
  <Auth isLogin={isLogin}/>

  </div>
)





}

export default App;