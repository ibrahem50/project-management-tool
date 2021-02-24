const initialState = {
    authError: null
}

const authReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_Error':
            console.log('signup error');
            return{
                ...state,
                authError: action.err.message
            }

        default: return state
    }
} 

export default authReducer;