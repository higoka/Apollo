export class HexUtils {
    public static getRandom(length: number): string {
        return Math.random().toString(length);
    }
}