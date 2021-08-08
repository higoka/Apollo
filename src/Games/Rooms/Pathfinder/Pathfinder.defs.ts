import * as PF from "pathfinding";
import { ArrayUtils } from "src/Utils/ArrayUtils";
import { PathfinderTypeEnum } from "./PathfinderType.enum";

export class PathfinderDefs {
    private grid: PF.Grid;
    public roomMap: Array<Array<number>>;
    public type: PathfinderTypeEnum;
    public isTeleporting: boolean = false;
    public isKicked: boolean;

    constructor() {
        this.roomMap = new Array<Array<number>>();

        if (ArrayUtils.isEmpty(this.roomMap)) {
            return;
        }

        this.grid = new PF.Grid(this.roomMap);
        this.grid.setWalkableAt(0, -1, true);
    }

    public calculate(startX: number, startY: number, endX: number, endY: number): void {
        

        var aStar: PF.AStarFinder = new PF.AStarFinder({
            diagonalMovement: 4
        });

        var find: number[][] = aStar.findPath(startX, startY, endX, endY, this.grid);
        console.log(find);
    }
}