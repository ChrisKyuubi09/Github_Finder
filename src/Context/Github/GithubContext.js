import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({children}) => {
    
    const initialState = {
        users: [],
        isLoading: false
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    //This is only for testing purpose
    const fetchUsers = async () => {

        setLoading()

        const response = await fetch(`${GITHUB_URL}/users`)
        const data = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload:data,
        })
    }

    //Search user
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)

        const {items} = await response.json()

        dispatch({
            type: `GET_USERS`,
            payload: items
        })
    }

    //Clear Users
    const clearUsers = async () => {
        setLoading()
        dispatch({
            type:'CLEAR_USERS'
        })
    }

    //Set loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return <GithubContext.Provider value={{
        users:state.users,
        isLoading:state.isLoading,
        fetchUsers,
        searchUsers,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;