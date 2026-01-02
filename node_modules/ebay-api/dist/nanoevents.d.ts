export type EventCallback = (...args: any) => void;
export declare let createNanoEvents: () => {
    events: Record<string, EventCallback[]>;
    emit(event: string, ...args: any[]): void;
    on(event: string, cb: EventCallback): () => void;
};
