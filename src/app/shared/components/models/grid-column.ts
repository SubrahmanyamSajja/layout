export class GridColumn {
    field: string = '';
    display: string = '';
    isLink?: boolean=false;
    isSortable?: boolean=true;
    routeLinks?=[];
    filter?:string='';
    _event?:string=''; 
    tempColumnName?:string='';
    cellCssClass?:string='';
    rowCssClass?:string='';
    autoClass?:string='';
    filterAddl?:string='';
}
