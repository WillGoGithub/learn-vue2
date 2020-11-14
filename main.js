const app = Vue.createApp({

})

app.config.errorHandler = (err, vm, info) => {
    // handle error
    // `info` is a Vue-specific error info, e.g. which lifecycle hook
    // the error was found in
}

app.config.warnHandler = (msg, vm, trace) => {
    // `trace` is the component hierarchy trace
}

// Type: [key: string]: any
// Default: undefined
app.config.globalProperties.foo = 'bar'