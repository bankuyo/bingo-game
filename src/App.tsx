import React, {createContext, useState} from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { BingoContent } from './components/common/bingo/types';
import CreateBingo from './components/create-bingo/CreateBingo';
import PlayBingo from './components/play-bingo/PlayBingo';

const router = createBrowserRouter([
    {
      path: "/",
      element: <CreateBingo />
    },
    {
      path: "/play",
      element: <PlayBingo />
    },
]);

export const BingoContentContext = createContext({} as {
    bingoContents: BingoContent
    setBingoContents: React.Dispatch<React.SetStateAction<BingoContent>>
})

const initialContents: BingoContent = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9
}

const App = () => {
    const [bingoContents, setBingoContents] = useState(initialContents)
    return (
        <BingoContentContext.Provider value={{bingoContents, setBingoContents}}>
            <RouterProvider router={router} />
        </BingoContentContext.Provider>
        
    )
}

export default App;