import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Story from "./components/base";


const App = () => {

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <div className="flex justify-center items-center bg-center w-full h-screen bg-[url(https://i.ebayimg.com/00/s/Nzc1WDEyMjQ=/z/6PAAAOSw93Bhplwj/$_57.JPG?set_id=8800005007)]" >
                            <div className="flex flex-col gap-4 items-center">
                                
                                <div className="flex flex-col space-y-1 justify-center gap-9 w-fit p-2 bg-gradient-to-r from-neutral-100 to-neutral-500 float-left rounded-lg">
                                    <Link className="text-3xl " to="/story/first">Start</Link>
                                </div>

                                <div className="flex flex-col space-y-1 justify-center gap-9 w-fit p-2 bg-gradient-to-r from-neutral-100 to-neutral-500 float-left rounded-lg">
                                    <Link className="text-3xl " to="">Options</Link>
                                </div>

                                <div className="flex flex-col space-y-1 justify-center gap-9 w-fit p-2 bg-gradient-to-r from-neutral-100 to-neutral-500 float-left rounded-lg">
                                    <a className="text-3xl" href="https://github.com/RakhinH">GitHub</a>
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