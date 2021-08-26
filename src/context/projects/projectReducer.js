import { FORM_PROJECT, OBTAIN_PROJECTS} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case OBTAIN_PROJECTS :
            return {
                ...state,
                projects: action.payload    
            }
        default:
            return state;
    }
}