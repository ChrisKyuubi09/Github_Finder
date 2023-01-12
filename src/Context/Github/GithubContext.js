import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext()

//const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({children}) => {
    
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    // //This is only for testing purpose
    // const fetchUsers = async () => {

    //     //setLoading()

    //     const response = await fetch(`${GITHUB_URL}/users`)
    //     const data = await response.json()

    //     dispatch({
    //         type: 'GET_USERS',
    //         payload:data,
    //     })
    // }


    // //Set loading
    // const setLoading = () => {
    //     dispatch({
    //         type: 'SET_LOADING'
    //     })
    // }

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        //fetchUsers,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;