import * as PF from "pathfinding";

export class PathfinderDefs {
    private aStar: PF.AStarFinder;

    constructor() {
        var roomMap: Array<Array<number>> = [
            [0, 0, 0, 1, 0],
            [1, 0, 0, 0, 1],
            [0, 0, 1, 0, 0]
        ];

        var grid: PF.Grid = new PF.Grid(roomMap);
        grid.setWalkableAt(0, -1, true);

        this.aStar = new PF.AStarFinder({
            diagonalMovement: 4
        });
    }
}