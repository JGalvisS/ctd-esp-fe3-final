export const reducer = (state,action)=>{
    switch (action.type){
        case 'GET_DENTISTS':
            return{...state, list: action.payload}
        case 'GET_DENTIST':
            return{...state, dentistDetail: action.payload}
        case 'ADD_FAV':
            return{...state, favorito: [...state.favorito, action.payload]}
        case 'CHANGE_THEME':
            return{...state, theme: action.payload}
    }
}