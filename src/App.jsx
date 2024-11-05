import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Story from "./components/base";


const App = () => {

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className=" flex justify-center items-center bg-center w-full h-screen bg-[url('https://iongroup.com/wp-content/uploads/2024/03/The-rise-and-future-of-credit-portfolio-trading.png')]" >
                            <div >
                                

                                <div className=" flex justify-center gap-9 w-fit p-2 bg-gradient-to-r from-indigo-300 to-indigo-900">
                                    <Link className="text-3xl " to="/story/first">Start</Link>
                                </div>

                            </div>
                        </div>
                    } />
                    <Route path="/story/:id" element={<Story />} />

                </Routes>
            </BrowserRouter>



        </>
    );
}

export default App;

/*
width: 100
*/