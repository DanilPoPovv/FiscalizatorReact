export function createColumn(label,field,options = {}){
    return {
        label : label, 
        field : field, 
        visible : options.visible ?? true,
        isSearchCriteria: options.isSearchCriteria ?? false,
        isAction: options.isAction ?? false
    }
}