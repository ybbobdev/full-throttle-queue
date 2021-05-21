# full-throttle-queue

Creates a queue of promises. Promises are processed with a fixed or random amount of time between calls.

install
```bash
yarn add @types/node tslib -D
yarn add full-throttle-que

# or
npm install @types/node tslib -D
npm install full-throttle-que
```

usage
```typescript
import ThrottleQueue from "full-throttle-queue";

// populate queue
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

// execute all functions in the queue with 2 second throttle
tq.processQueue({randomThrottle: false})

// populate queue
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

// execute all functions in the queue with random time between 1 to 20 second throttle
tq.processQueue({randomThrottle: true})

```

Development
```bash
yarn
yarn test
```
