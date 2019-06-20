import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'searchpipe'
})
export class SearchPipe implements PipeTransform {
  transform(value, args?, columns?, cp?, rpp?): Array<any> {

    if (value) {
      return this.search(value, args, columns, cp, rpp);
    }
  }
  quote(str) {
    if (str != null && str != undefined)
      return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    else
      return str;
  };
  search(objArray, args, columns, cp, rpp) {
    if (rpp < 0)
      return objArray;
    columns = columns || [];
    rpp = (rpp < 0) ? 10000000 : rpp;
    let startPos = ((cp - 1) * rpp);
    let endPos = (cp * rpp);
    let result = [];
    let searchText = new RegExp(this.quote(args), 'ig');
    let cCount = 0;
    for (let _il = 0; _il < objArray.length; _il++) {
      let v = objArray[_il];
      let addThis = (typeof args == 'undefined' || args == '' || args == null || args.length == 0);
      if (!addThis) {
        addThis = this.searchObj(v, searchText, columns,false);
        /*for (var k in v) {
            if (typeof k != 'undefined' && k != '' && v[k] != null && typeof v[k].search == 'function' && columns != null && ( columns.length == 0 || columns.indexOf(k) >= 0 )) {
                if (v[k].search(searchText) !== -1)
                    addThis = true;
            }
        }
        */
      }

      if (addThis) {
        result.push(v);
        cCount++
      }
    }
    return result;
  }
  searchObj(v, searchText, columns,startWith=false) {
    let addThis = false;
    for (var k in v) {
      if (typeof v[k] == "object" && v[k] != null && typeof v[k].length == "undefined" && !addThis) {
        addThis = this.searchObj(v[k], searchText, columns,startWith);
      } else {
        if (typeof k != 'undefined' && k != '' && v[k] != null && (typeof v[k].search == 'function' || typeof v[k] == "number") && columns != null && (columns.length == 0 || columns.indexOf(k) >= 0)) {
          if(!startWith){
            if (('' + v[k]).search(searchText) !== -1)
              addThis = true;
          } else {
            if (('' + v[k]).search(searchText) === 0)
              addThis = true;
          }
        }
      }
    }
    return addThis;
  }
}
