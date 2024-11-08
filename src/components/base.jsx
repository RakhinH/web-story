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
            <div className="flex justify-center items-center bg-center w-full h-screen bg-[url('https://iongroup.com/wp-content/uploads/2024/03/The-rise-and-future-of-credit-portfolio-trading.png')]">
                <div className="box-decoration-slice bg-gradient-to-r from-indigo-300 to-indigo-900 text-black px-2 w-45 flex flex-col items-center container-fliud">
                    <p>{current.text}</p>

                    <div className=" flex justify-center gap-9 w-fit p-2 bg-gradient-to-r from-neutral-100 to-neutral-500 float-left">
                        {current.buttons.map((b) => (
                            <Link to={"/story/" + b.id}>{b.text}</Link>
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