export const createProject = (project)=>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make sync acall to data base
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authorFirstName:'ibra',
            authorLastName: 'ahmed',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT' , project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' , err})
        }) 
        
    }
};