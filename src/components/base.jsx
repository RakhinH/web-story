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
        {/* MAKE A NAVBAR RIGHT HERE  */}
        {current && (
            <>

            {/* 
            Below is the box of the text which the background pictrure is and has the decorations 
            of the box of the background
             */}
            
            <div style={{backgroundImage: `url(${current.image})`}} className={"flex flex-col bg-no-repeat bg-cover text-2xl font-sans gap-4 justify-center items-center bg-center w-full h-screen"}>
                <div className="flex flex-col font-black border-2 border-dotted rounded-lg gap-4 w-2/3 opacity-90 justify-center items-center box-decoration-slice bg-gradient-to-r from-[#00E5F5] to-[#F58E00] text-black px-2 w-45 container-fliud">
                    <p>{current.text}</p>
                </div>

                {/* Buttons for the story option 1*/}  
                <div className="flex flex-col border-solid border-2 border-blue-50 rounded-lg w-fit p-2 box-decoration-slice bg-gradient-to-r from-[#00E5F5] to-[#ED8B47]">
                    {current.buttons.map((b) => (
                        <Link to={"/story/" + b.id}>{b.text}</Link>
                    ))}
                </div>
                
                {/* Buttons for the story option 2*/}  
                <div className="flex flex-col border-solid border-2 border-blue-50 rounded-lg w-fit p-2 box-decoration-slice bg-gradient-to-r from-[#00E5F5] to-[#ED8B47] hover:bg-fuchsia-600">
                    <div className="hover:">
                        {current.buttons.map((b) => (
                            <Link to={"/story/" + b.id1}>{b.text1}</Link>
                        ))}
                    </div>    
                </div>
            </div>
            </>
        )}
        </>
     );
}
 
export default Story;