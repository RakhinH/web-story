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
            <div className="box-decoration-slice bg-gradient-to-r from-indigo-300 to-indigo-900 text-black px-2 w-2/3 flex flex-col items-center">
                <p>{current.text}</p>

                {current.buttons.map((b) => {
                    <Link to={"/story/" + b.id}>{b.text}</Link>
                })}
            </div>
            </>
        )}
        </>
     );
}
 
export default Story;