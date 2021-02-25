export const createProject = (project)=>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make sync acall to data base
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authId= getState().firebase.auth.uid;
        firestore.collection('project').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT' , project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' , err})
        }) 
        
    }
};