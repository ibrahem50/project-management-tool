const initialState = {
    projects : [
        {id:'1', title: 'help mw find', content: 'blaaah blaah'},
        {id:'2', title:'collect all', content: 'blaaah blaah'},
        {id:'3', title:'egg hunt', content:'blah'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT':
        console.log('create project', action.project);
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.error);
        return state;

      default: return state;
    }
    
  };

export default projectReducer;