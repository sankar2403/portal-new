import { ACTION_TYPES } from "./action"

const initialState = {
    companyDetails: [],
    categoryFilter: [],
    locationFilter: [],
    dateFilter:[],
    salaryFilter:[]
}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ACTION_TYPES.JOBROLE:
            return { ...state, companyDetails: payload }
        case ACTION_TYPES.UPDATE_COMPANY_AVAILABILITY:
            return { ...state, categoryFilter: payload }
        case ACTION_TYPES.UPDATE_LOCATION_AVALIBILITY:
            return { ...state, locationFilter: payload }
        case ACTION_TYPES.UPDATE_DATE_AVALIBILITY:
            return {...state, dateFilter: payload}
        case ACTION_TYPES.UPDATE_SALARY_AVALIBILITY:
            return {...state, salaryFilter: payload}
        default:
            return initialState;
    }
}

export default reducer

