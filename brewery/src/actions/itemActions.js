import {
    GET_ITEMS, 
    ADD_ITEMS, 
    DELETE_ITEM, 
    INCREASE_ITEM,
    DECREASE_ITEM, 
    TOTAL_ITEMS,
    DETAILS} from './types';



    //for getting the initial showing items
    export const getItems =() => {
        return{
            type:GET_ITEMS
        }
    }