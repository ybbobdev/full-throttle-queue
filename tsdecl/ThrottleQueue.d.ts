/**
 * Throttle Queue
 * @param ThrottleQueue.enqueue
 * @return the value that should be returned
 */
interface IProcessQueue {
    randomThrottle: boolean;
}
export interface IThrottleQueue {
    throttleTime: number;
    elements: Array<() => Promise<void>>;
    enqueue: (e: () => Promise<void>) => void;
    dequeue: () => void;
    isEmpty: () => boolean;
    length: () => void;
    peek: () => () => Promise<void> | undefined;
    processQueue: (options: IProcessQueue) => Promise<void | boolean>;
}
export declare class ThrottleQueue implements IThrottleQueue {
    throttleTime: number;
    elements: Array<() => Promise<void>>;
    constructor();
    enqueue(e: () => Promise<void>): void;
    dequeue(): void;
    isEmpty(): boolean;
    length(): number;
    peek(): () => Promise<void> | undefined;
    processQueue(options: IProcessQueue): Promise<void | boolean>;
    throttle(ms: number): Promise<void>;
    randomNumber(min: number, max: number): number;
}
export {};
