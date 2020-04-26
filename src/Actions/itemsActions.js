// creates actions which gets called in components when needed. These actions when called get checked in the reduce which check for cases that matches the action type to execute the change of the state. The parameter of the action is the argument given when invoked ex: after a promise get return from a fetch to send some informations to change the state.

export const fetchItems = (items) => {
    return {
        type: "FETCH_ITEMS", 
        items
    }
}

export const decreaseItemQuantity = (item) => {
    return{
        type: "DECREASE_ITEM_QUANTITY",
        item
    }
}

export const increaseItemQuantity = (item) => {
    return{
        type: "INCREASE_ITEM_QUANTITY",
        item
    }
}

export const searchItems = (value) => {
    return{
        type: "SEARCH_ITEMS",
        value
    }
}

export const sortByPrice = (checkItems) => {
    return{
        type: "SORT_BY_PRICE",
        checkItems
    }
}