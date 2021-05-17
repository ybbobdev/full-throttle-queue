# throttleQueue

Creates a queue of promises. Promises can be proccesed in sequence with a fixed or random amount of time
between calls

Development
```
yarn
yarn test
```

usage
```
const tq = new ThrottleQueue();

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
