const INITIAL_STATE ={
    all:[],
    selected: null
};


export default (state=INITIAL_STATE,action) => {
   
  switch (action.type){

    case 'FETCH_ELEMENTS':
      
        return {...state, all: action.payload.data};
    case 'FETCH_SINGLE_ELEMENT':
            
            return {...state, selected: action.payload.data};
        
    

  }
    return state;
    
}; 