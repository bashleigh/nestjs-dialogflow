import { Component } from '@nestjs/common';
import { DialogFlowFulfillmentResponse, DialogFlowIntent, DialogFlowResponse } from '../../../lib';
import { DialogFlowAction } from '../../../lib/decorators/dialog-flow-action.decorator';

@Component()
export class AppComponent {
    /* Into your dialogflow account, create the appropriate intent that has to be reference in this file. */

    @DialogFlowAction('events.debug')
    public handleEventDebug(dialogFlowResponse: DialogFlowResponse): DialogFlowFulfillmentResponse {
        console.log('action handled');
        return { fulfillmentText: 'events.debug action well received.', fulfillmentMessages: [] };
    }

    @DialogFlowIntent('Events:get')
    public handleEventDebug2(dialogFlowResponse: DialogFlowResponse): DialogFlowFulfillmentResponse {
        console.log('intent handled');
        return { fulfillmentText: 'Events:debug intent well received.', fulfillmentMessages: [] };
    }
}