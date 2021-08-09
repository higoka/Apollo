export class ArrayUtils {
    public static clearArray(array: Array<any>): Array<any> {
        for (var i = 0; i < array.length; i++) {
            array[i] = null;
        }
        return array;
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