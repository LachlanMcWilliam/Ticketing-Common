import { Message, Stan } from "node-nats-streaming";
import { Event } from "../interfaces/base-event";
declare abstract class Listener<T extends Event> {
    abstract readonly subject: T["subject"];
    abstract queueGroupName: string;
    abstract onMessage(data: T["data"], msg: Message): void;
    private client;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
export { Listener as AbstractListener };
