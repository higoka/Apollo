export class ArrayUtils {
    public static clearArray(array: Array<any>): Array<any> {
        return array = null;
    }

    public static isEmpty(array: Array<any>): boolean {
        if (array.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    public static removeFromArray(array: Array<any>, element: string | number): Array<any> {
        return array[element] = null;
    }
}