import React, { Component } from "react";


const App = () => {
    const handleClick=() => {
        // function: to go to next page
    };

    return ( 
        <>
        <div className=" flex justify-center items-center bg-center w-full h-screen bg-[url('https://iongroup.com/wp-content/uploads/2024/03/The-rise-and-future-of-credit-portfolio-trading.png')]" >
            <div className="box-decoration-slice bg-gradient-to-r from-indigo-300 to-indigo-900 text-black px-2 w-2/3 flex flex-col items-center">
                <p>
                    It is 2008 and and the stockmarket
                </p>

                <div className=" flex justify-center gap-9 w-fit">
                    <button className="border-2 border-violet-600 bg-violet-600" type="button" onClick={handleClick}>Option 1</button>
                    <button className="border-2 border-violet-600 bg-violet-600" type="button" onClick={handleClick}>Option 2</button>
                </div>
                
            </div>             
        </div>
        
        </>
     );
}
 
export default App;

/*
width: 100
*/