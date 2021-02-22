const initialState = {
    projects : [
        {id:'1', title: 'help mw find', content: 'blaaah blaah'},
        {id:'2', title:'collect all', content: 'blaaah blaah'},
        {id:'3', title:'egg hunt', content:'blah'}
    ]
}

const projectReducer = (state = initialState , action) => {
    return state
} 

export default projectReducer;