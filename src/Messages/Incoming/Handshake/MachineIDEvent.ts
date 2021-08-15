import { MachineIDComposer } from "src/Messages/Outgoing/Handshake/MachineIDComposer";
import { HexUtils } from "src/Utils/HexUtils";
import { MessageHandler } from "../message.handler";

export class MachineIDEvent extends MessageHandler {
    private HASH_LENGTH: number = 64;

    public handle(): void {
        var storedMachineId: string = this.entryPacket.readString();
        var clientFingerprint: string = this.entryPacket.readString();
        var capabilities: string = this.entryPacket.readString();

        if (storedMachineId.startsWith("~") || storedMachineId.length != this.HASH_LENGTH) {
            storedMachineId = HexUtils.getRandom(this.HASH_LENGTH);
            this.gameClient.send(new MachineIDComposer(storedMachineId).compose());
        }
    }
}