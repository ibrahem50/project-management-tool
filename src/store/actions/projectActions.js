export const createProject = (project)=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        // make sync call to data base
        dispatch({ type: 'CREATE_PROJECT' , project})
    }
}; 