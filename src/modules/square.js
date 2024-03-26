const Square = function(x, y) {
    this.x = x;
    this.y = y;

    this.topLeft = [x-1, y-2];
    this.topRight = [x+1, y-2];
    this.midTopLeft = [x-2, y-1];
    this.midTopRight = [x+2, y-1];
    this.midBottomLeft = [x-2, y+1];
    this.midBottomRight = [x+2, y+1];
    this.bottomLeft = [x-1, y+2];
    this.bottomRight = [x+1, y+2];
}

Square.prototype.getCoords = function() {
    return [this.x, this.y];
};

export default Square;