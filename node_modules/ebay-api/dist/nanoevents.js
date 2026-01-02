export let createNanoEvents = () => ({
    events: {},
    emit(event, ...args) {
        const callbacks = this.events[event] || [];
        for (let i = 0, length = callbacks.length; i < length; i++) {
            callbacks[i](...args);
        }
    },
    on(event, cb) {
        if (this.events[event]) {
            this.events[event].push(cb);
        }
        else {
            this.events[event] = [cb];
        }
        return () => {
            this.events[event] = this.events[event]?.filter(i => cb !== i);
        };
    }
});
