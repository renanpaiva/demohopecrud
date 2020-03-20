const INITIAL_STATE ={
    title:"",
    body:"",
    id:""
};
export default (state=INITIAL_STATE,action) => {
   
    switch (action.type){
  
     case 'CHANGE_TITLE':
         return {...state,title: action.payload};

      case 'CHANGE_BODY':
            return {...state,body: action.payload};
          
      case 'SAVE_ELEMENT':
              console.log(action.payload.data.id);
              return {...state, id: action.payload.data.id};
  
    }
      return state;
      
  }; 
