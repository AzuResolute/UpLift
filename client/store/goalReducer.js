import axios from 'axios'

const initialState = {}

const GET_GOAL_BY_ID = 'GET_GOAL_BY_ID'
const GET_GOAL_BY_USER_MAIN = 'GET_GOAL_BY_USER_MAIN'

const getGoalByID = goal => ({type: GET_GOAL_BY_ID, goal})
const getGoalByUserMain = goal => ({type: GET_GOAL_BY_USER_MAIN, goal})

export const getGoalByIDThunk = goalId => async dispatch => {
    try {
        const {data} = await axios.get(`/api/goals/goal/${goalId}`)
        dispatch(getGoalByID(data))
    } catch (error) {
        console.error(error)
    }
}

export const getGoalByUserMainThunk = userId => async dispatch => {
    try {
        const {data} = await axios.get(`/api/goals/user/${userId}/main`)
        dispatch(getGoalByUserMain(data))
    } catch (error) {
        console.error(error)
    }
}

export default function (state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_GOAL_BY_ID:
        case GET_GOAL_BY_USER_MAIN:
            newState = action.goal
            return newState
        default:
            return state
    }
}