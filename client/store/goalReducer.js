import axios from 'axios'

const initialState = {}

const GET_GOAL = 'GET_GOAL'

const getGoal = goal => ({type: GET_GOAL, goal})

export const getGoalThunk = goalId => async dispatch => {
    try {
        const {data} = await axios.get(`/api/goals/goal/${goalId}`)
        dispatch(getGoal(data))
    } catch (error) {
        console.error(error)
    }
}

export default function (state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_GOAL:
            newState = action.goal
            return newState
        default:
            return state
    }
}