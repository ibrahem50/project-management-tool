export const createProject = (project)=>{
    return (dispatch,getState)=>{
        // make sync call to data base
        dispatch({ type: 'CREATE_PROJECT' , project})
    }
};