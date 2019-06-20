export class CommonList {
    currentPage: number = 1;
    pageSize: number = 10;
    filter: any = {
        currentPage: 1,
        pageSize: 10
    };
    getData() { }
    constructor() {

    }


    onPage(event) {
        this.currentPage = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        this.filter.currentPage = this.currentPage;
        this.filter.pageSize = this.pageSize;
        this.getData(); 
    }
}