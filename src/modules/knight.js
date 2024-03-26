const Knight = function(coordinates) {
    this.coordinates = coordinates;
    this.x = coordinates[0];
    this.y = coordinates[1];

    this.topLeft = [x-1, y-2];
    this.topRight = [x+1, y-2];
    this.midTopLeft = [x-2, y-1];
    this.midTopRight = [x+2, y-1];
    this.midBottomLeft = [x-2, y+1];
    this.midBottomRight = [x+2, y+1];
    this.bottomLeft = [x-1, y+2];
    this.bottomRight = [x+1, y+2];
};

//NOT SURE IF I NEED THESE PROTOTYPE FUNCS YET

Knight.prototype.getTopLeft = function (coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-1, y-2]
};
Knight.prototype.getTopRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+1, y-2]
};
Knight.prototype.getMidTopLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-2, y-1]
};
Knight.prototype.getMidTopRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+2, y-1]
};
Knight.prototype.getMidBottomLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-2, y+1]
};
Knight.prototype.getMidBottomRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+2, y+1]
};
Knight.prototype.getBottomLeft = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x-1, y+2]
};
Knight.prototype.getBottomRight = function(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];

    return [x+1, y+2]
};
