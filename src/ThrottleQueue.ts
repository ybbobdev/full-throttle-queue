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

export class ThrottleQueue implements IThrottleQueue {
  public throttleTime: number;
  public elements: Array<() => Promise<void>>;

  constructor() {
    this.elements = [];
    this.throttleTime = 2000;
  }

  public enqueue(e: () => Promise<void>): void {
    this.elements.push(e);
  }

  public dequeue(): void {
    this.elements.shift();
  }

  public isEmpty(): boolean {
    return this.elements.length === 0;
  }

  public length(): number {
    return this.elements.length;
  }

  public peek(): () => Promise<void> | undefined {
    return !this.isEmpty() ? this.elements[0] : undefined;
  }

  public async processQueue(options: IProcessQueue): Promise<void | boolean> {
    if (!this.length()) {
      return false;
    }

    // make call
    await this.peek()();

    // update queue
    this.dequeue();

    // wait 1 to 20 seconds or fallback to default
    const throttleAmount: number = options.randomThrottle
      ? this.randomNumber(1000, 20000)
      : this.throttleTime;
    console.log(`wait ${throttleAmount / 1000} seconds!`);
    await this.throttle(throttleAmount);

    // continue
    console.log(this.length(), 'continue with processQueue');
    return await this.processQueue(options);
  }

  public throttle(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
