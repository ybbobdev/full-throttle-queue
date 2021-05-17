import { expect } from 'chai';
import { describe, it } from 'mocha';
import { ThrottleQueue, IThrottleQueue } from './ThrottleQueue';

describe('ThrottleQueue', () => {
  describe('length', () => {
    it('works when empty', () => {
      const tq: IThrottleQueue = new ThrottleQueue();
      expect(tq.length()).to.equal(0);
    });
    it('works when items are added', () => {
      const tq: IThrottleQueue = new ThrottleQueue();

      tq.enqueue(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 1000);
        });
      });

      tq.enqueue(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 1000);
        });
      });

      expect(tq.length()).to.equal(2);
    });
  });
  describe('dequeue', () => {
    it('removes items',  () => {
      const tq: IThrottleQueue = new ThrottleQueue();

      tq.enqueue(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('this is one');
            resolve();
          }, 1000);
        });
      });

      tq.enqueue(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('this is two');
            resolve();
          }, 1000);
        });
      });

      tq.dequeue();
      tq.dequeue();

      expect(tq.length()).to.equal(0);
    });
  });
});
