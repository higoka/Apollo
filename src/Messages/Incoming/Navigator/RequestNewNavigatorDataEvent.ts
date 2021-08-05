import { NewNavigatorCollapsedCategoriesComposer } from 'src/Messages/Outgoing/Navigator/NewNavigatorCollapsedCategoriesComposer';
import { NewNavigatorLiftedRoomsComposer } from 'src/Messages/Outgoing/Navigator/NewNavigatorLiftedRoomsComposer';
import { NewNavigatorMetaDataComposer } from 'src/Messages/Outgoing/Navigator/NewNavigatorMetaDataComposer';
import { MessageHandler } from '../message.handler';

export class RequestNewNavigatorDataEvent extends MessageHandler {
    public handle(): void {
        this.gameClient.send(new NewNavigatorMetaDataComposer().compose());
        this.gameClient.send(new NewNavigatorLiftedRoomsComposer().compose());
        this.gameClient.send(new NewNavigatorCollapsedCategoriesComposer().compose());
    }
}