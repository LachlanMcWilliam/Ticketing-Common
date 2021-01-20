import { Stan } from "node-nats-streaming";
import { Event } from "../interfaces/base-event";
declare abstract class Publisher<T extends Event> {
    abstract readonly subject: T["subject"];
    private client;
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}
export { Publisher as AbstractPublisher };
