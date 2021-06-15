export abstract class MessageComposer {
    public data: any[];

    protected abstract composeInternal(): void;

    public compose(): any[] {
        this.composeInternal();
        return this.data;
    }
}