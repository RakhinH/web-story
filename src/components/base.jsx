import { Link, useParams } from "react-router-dom";
import { story } from "../story";
import { useState, useEffect } from "react";

const Story = () => {

    console.log(story);

    const {id} = useParams();

    const [current, setCurrent] = useState(null);

    useEffect(() => {
        setCurrent(story[id])
        console.log(current);
    }, [id]);

    return ( 
        <>
        {current && (
            <>

            {/* 
            Below is the box of the text which the background pictrure is and has the decorations 
            of the box of the background
             */}
            
            <div className="flex flex-col text-2xl font-sans gap-4 justify-center items-center bg-center w-full h-screen bg-[url('https://iongroup.com/wp-content/uploads/2024/03/The-rise-and-future-of-credit-portfolio-trading.png')]">
                <div className="flex flex-col rounded-lg gap-4 justify-center items-center box-decoration-slice bg-gradient-to-r from-pink-400 to-indigo-700 text-black px-2 w-45 container-fliud">
                    <p>{current.text}</p>
                </div>

                {/* Buttons for the story */}  
                <div className="flex flex-col border-solid border-2 border-blue-50 rounded-lg w-fit p-2 box-decoration-slice bg-gradient-to-r from-pink-400 to-indigo-700">
                    {current.buttons.map((b) => (
                        <Link to={"/story/" + b.id}>{b.text}</Link>
                    ))}
                </div>

                <div className="flex flex-col border-solid border-2 border-blue-50 rounded-lg w-fit p-2 box-decoration-slice bg-gradient-to-r from-pink-400 to-indigo-700 hover:bg-fuchsia-600">
                    {current.buttons.map((b) => (
                        <Link to={"/story/" + b.id1}>{b.text1}</Link>
                    ))}
                </div>
            </div>
            </>
        )}
        </>
     );
}
 
export default Story;