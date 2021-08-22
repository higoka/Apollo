import { HabboDefs } from "src/HabboHotel/Habbo/Habbo.defs";
import { PluginEventInterface } from "../PluginEvent.interface";

export class UserLoggedInEvent implements PluginEventInterface {
    public habbo: HabboDefs;
    public sso: string;
}