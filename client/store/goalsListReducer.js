import axios from 'axios'

const initialState = []

const GET_ALL_GOALS = 'GET_ALL_GOALS'

const getAllGoals = goals => ({type: GET_ALL_GOALS, goals})

export const getAllGoalsThunk = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/goals')
        dispatch(getAllGoals(data))
    } catch (error) {
        console.error(error)
    }
}

export default function (state = initialState, action) {
    let newState = [...state]
    switch (action.type) {
        case GET_ALL_GOALS:
            newState = action.goals
            return newState
        default:
            return state
    }
}

// Untested