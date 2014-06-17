function PaginationManager(totalPage) {
    this.defaultMoveClass = "move-page";
    this.defaultAnchorClass = "page-link";
    this.buildPrevPagelink("Prev");
    this.buildPagelink(totalPage);
    this.buildNextPagelink("Next");
}

PaginationManager.prototype.buildPrevPagelink = function (prevTxt) {
    var anchor = this.createAnchor(prevTxt, this.defaultMoveClass);
    this.createNavigation(anchor, "move", '"prev"');
};

PaginationManager.prototype.buildNextPagelink = function (nextTxt) {
    var anchor = this.createAnchor(nextTxt, this.defaultMoveClass);
    this.createNavigation(anchor, "move", '"next"');
};

PaginationManager.prototype.buildPagelink = function (totalPages) {
    var i = 0;
    for (i = 1; i <= totalPages; i++) {
        var anchor = this.createAnchor(i, this.defaultAnchorClass);
        this.createNavigation(anchor, "navigatePage", i - 1);
    }
};

PaginationManager.prototype.createAnchor = function (value, className) {
    var anchor = document.createElement("a");
    anchor.setAttribute("class", className);
    anchor.innerHTML = value;
    return anchor;
};

PaginationManager.prototype.createNavigation = function (anchor, fnName, fnArg) {
    anchor.setAttribute("href", 'javascript:' + fnName + '(' + fnArg + ')');
    var bar = document.getElementById("paginatinBar");
    if (bar) {
        bar.appendChild(anchor)
    }
};