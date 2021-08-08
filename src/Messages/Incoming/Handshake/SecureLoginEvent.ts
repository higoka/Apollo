import { EmulatorService } from 'src/Core/Database/Emulator/Emulator.service';
import { EmulatorSettingsEntity } from 'src/Core/Database/Emulator/EmulatorSettings.entity';
import { HabboDefs } from 'src/Games/User/Habbo.defs';
import { HabboService } from 'src/Games/User/Habbo.service';
import { AvailabilityStatusMessageComposer } from 'src/Messages/Outgoing/Handshake/AvailabilityStatusMessageComposer';
import { LoginOKComposer } from 'src/Messages/Outgoing/Handshake/LoginOKComposer';
import { PingComposer } from 'src/Messages/Outgoing/Handshake/PingComposer';
import { GenericAlertComposer } from 'src/Messages/Outgoing/Notifications/GenericAlertComposer';
import { MessagesForYouComposer } from 'src/Messages/Outgoing/Notifications/MessagesForYouComposer';
import { UserPermissionComposer } from 'src/Messages/Outgoing/User/UserPermissionComposer';
import { MessageHandler } from "../message.handler";

export class SecureLoginEvent extends MessageHandler {
    constructor(
        private readonly habboService: HabboService,
        private readonly emulatorService: EmulatorService
    ) {
        super();
    }

    public handle(): void {
        var sso: string = this.entryPacket.readString();

        if (sso == "") {
            return;
        }

        if (this.gameClient.habbo == null) {
            this.habboService.loadHabbo(sso).then((habbo: HabboDefs) => {
                if (habbo != null) {
                    habbo.client = this.gameClient;
                    this.gameClient.habbo = habbo;

                    if (this.gameClient.habbo.habboInfo == null) {
                        return;
                    }

                    this.habboService.online.set(habbo.habboInfo.id, habbo);
                    this.gameClient.send(new LoginOKComposer().compose());
                    this.gameClient.send(new UserPermissionComposer(this.gameClient.habbo).compose());
                    this.gameClient.send(new AvailabilityStatusMessageComposer(true, false, true).compose());
                    this.gameClient.send(new PingComposer().compose());

                    setTimeout(() => {
                        this.emulatorService.getSettingsByKey("hotel.welcome.alert.enabled").then((result: EmulatorSettingsEntity) => {
                            if (parseInt(result.value) == 1) {
                                this.emulatorService.getSettingsByKey("hotel.welcome.alert.oldstyle").then((stile: EmulatorSettingsEntity) => {
                                    this.emulatorService.getSettingsByKey("hotel.welcome.alert.message").then((message: EmulatorSettingsEntity) => {
                                        if (parseInt(stile.value) == 1) {
                                            this.gameClient.send(new MessagesForYouComposer(message.value.replace("%user%", this.gameClient.habbo.habboInfo.username).split("<br/>")).compose());
                                        } else {
                                            this.gameClient.send(new GenericAlertComposer(message.value.replace("%user%", this.gameClient.habbo.habboInfo.username)).compose());
                                        }
                                    });
                                });
                            }
                        })
                    }, 5000);
                }
            });
        }
    }
}