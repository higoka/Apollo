export class ArrayUtils {
    public static clearArray(array: Array<any>): Array<any> {
        for (var i = 0; i < array.length; i++) {
            array[i] = null;
        }
        return array;
    }
}