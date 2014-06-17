function Pagination(showPerPage) {
    this.currentPageValue = 0;
    this.showPerPage = showPerPage;
    this.totalNumberItem = document.getElementById("paginationContent").children.length;
    this.totalPagesCount = Math.ceil(this.totalNumberItem / this.showPerPage);
    this.setCurrentPageValue(this.currentPageValue);
    this.paginationManager = new PaginationManager(this.totalPagesCount);
    this.display(this.currentPageValue);
}

Pagination.prototype.move = function (direction) {
    var index = 0;
    switch (direction) {
    case "prev":
        index = this.currentPageValue - 1;
        if (this.currentPageValue <= 0) {
            index = 0;
        }
        break;
    case "next":
        if (this.currentPageValue < this.totalPagesCount - 1) {
            index = this.currentPageValue + 1;
        } else {
            index = this.totalPagesCount - 1;
        }
        break;
    }
    this.setCurrentPageValue(index);
    this.display(this.currentPageValue);
};

Pagination.prototype.getCurrentPageValue = function () {
    return this.currentPageValue;
};

Pagination.prototype.setCurrentPageValue = function (value) {
    this.currentPageValue = value;
};

Pagination.prototype.hasClass = function (ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

Pagination.prototype.setActivePage = function (childIndex) {
    var contentDiv = document.getElementById("paginatinBar");
    var childs = contentDiv.children;
    var activeCls = "active_page";
    if (contentDiv && childs) {
        var i = 0;
        for (i = 0; i < childs.length; i++) {
            var child = childs[i];
            if (this.hasClass(child, activeCls)) {
                child.classList.remove(activeCls);
            }
        }
        var pageBar = contentDiv.children[this.currentPageValue + 1];
        if (pageBar) {
            pageBar.classList.add("active_page");
        }
    }
};

Pagination.prototype.display = function (pageNo) {
    this.setCurrentPageValue(pageNo);
    this.setActivePage(pageNo);
    start_from = pageNo * this.showPerPage;
    end_on = start_from + this.showPerPage;
    var contentDiv = document.getElementById("paginationContent");
    if (contentDiv) {
        var childrens = contentDiv.children;
        var i = 0;
        for (i = 0; i <= childrens.length; i++) {
            var child = childrens[i];
            if (child) {
                if (i >= start_from && i < end_on) {
                    child.style.display = "block";
                } else {
                    child.style.display = "none";
                }
            }
        }
    }
};