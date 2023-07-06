import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import { BingoContentContext } from "../../App";
import SubHeader from "../common/header/SubHeader";


import "../common/bingo/Bingo.css"
import "./CreateBingo.css"

const options = [ 
    1, 2, 3, 4, 5, 6, 7, 8, 9
];


const CreateBingo: React.FC = () => {
    const { bingoContents, setBingoContents } = useContext(BingoContentContext)
    const [remains, setRemains] = useState<number[]>([])

    useEffect(() => {
        const newRemain = getRemains(Object.values(bingoContents));
        setRemains(newRemain)
      }, []);
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        let update: any = {}
        if(!!Number(event.target.value)){
            update[parseInt(key)]=Number(event.target.value)
        }else{
            update[parseInt(key)] = event.target.value
        }
        setBingoContents({...bingoContents, ...update})

        const newRemain = getRemains(Object.values({...bingoContents, ...update}));
        setRemains(newRemain)
    };

    const getRemains = (currentContent: number[]): number[] =>{
        return options.filter(x => currentContent.indexOf(x) === -1);
    }

    return (
        <div className="">
            <SubHeader subTitle="Create Your Bingo" />
            <div className="form-group mt-3">
                <div className="bingo-body">
                { Object.entries(bingoContents).map( ([key, content]) => (
                    <div className="bingo-cell" key={key}>
                        <input id="sel1" key={key} value={content} onChange={(e) => handleChange(e, key)} />
                    </div>
                ))}
                </div>
                <div className="d-flex justify-content-center mt-3">Remain: {remains.map(remain => <div key={remain}>{remain}, </div>)}</div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to={"/play"} className="btn btn-primary btn-lg">Play Bingo</Link>
                </div>
            </div>
        </div>
    );
}

export default CreateBingo;