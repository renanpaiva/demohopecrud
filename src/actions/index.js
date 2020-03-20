import axios from 'axios';

export const fetchElements= () =>{
    const request = axios.get('http://10.0.0.148:3000/cards');
    
        
        return {
            type : 'FETCH_ELEMENTS',
            payload : request
        };
}

export const fetchElement = (id) =>{
    
    const request = axios.get(`http://10.0.0.148:3000/cards/${id}`);
        
    return{
        type : 'FETCH_SINGLE_ELEMENT',
        payload : request
    };

}

export const saveElement =(card) =>{
    const request = axios.post("http://10.0.0.148:3000/cards",card);
    return{
        type : 'SAVE_ELEMENT',
        payload : request
    }
}

export const changeTitle =(title) =>{
    

    return{
        type : 'CHANGE_TITLE',
        payload : title
    }
}

export const changeBody =(body) =>{
   

    return{
        type : 'CHANGE_BODY',
        payload : body
    }
}