import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";

import { BingoContentContext } from "../../App";
import { BingoContent, BingoId } from "../common/bingo/types";
import SubHeader from "../common/header/SubHeader";

import "../common/bingo/Bingo.css"
import "./PlayBingo.css"


const initialIsClicked : BingoContent = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
}

const PlayBingo: React.FC = () => {
    const { bingoContents, setBingoContents } = useContext(BingoContentContext)

    const [ isClickeds, setIsClickeds ] = useState(initialIsClicked)

    const onClick = (event: React.MouseEvent<HTMLButtonElement>, key: string) => {
        const index = parseInt(key)
        let update: any = {}
        update[index] = isClickeds[index as BingoId ] === 0 ? 1: 0
        setIsClickeds({...isClickeds, ...update})
    }
    
    return (
        <div className="">
            <SubHeader subTitle="Play Bingo"/>
            <div className="form-group mt-3">
                <div className="bingo-body">
                { Object.entries(bingoContents).map( ([key, content]) => (
                    <div className="bingo-cell" key={key}>
                        <button 
                            className="bingo-button"
                            style={{
                                backgroundColor: isClickeds[parseInt(key) as BingoId] === 1 ? "#A084A2": undefined,
                                color: isClickeds[parseInt(key) as BingoId] === 1 ? "white": "#8064A2",
                            }} 
                            onClick={(e) => onClick(e, key)} 
                        >{content}</button>
                    </div>
                ))}
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <Link to={"/"} className="btn btn-primary btn-lg">Edit Bingo</Link>
                </div>
            </div>
        </div>
    );
}

export default PlayBingo;