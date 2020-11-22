const app = Vue.createApp({
    custom: 'hello',
    inject: ['user'],
    template: /* html */ `
        <div>
            {{ user }}
        </div>
    `
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

app.config.isCustomElement = tag => tag.startsWith('ico-')

app.config.optionMergeStrategies.hello = (toVal, fromVal) => toVal || fromVal

app.mixin({
    custom: 'goodbye',
    created() {
        console.log(this.$option.custom)
    },
})

// 開啟效能追蹤
app.performance = true

app.directive('focus', {
    beforeMount() { },
    mounted(el) {
        el.focus()
        // <input v-focus />
    },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { }
})

app.mount('#my-app')

app.provide('user', 'admin')

setTimeout(() => {
    app.unmount('#my-app')
}, 5000);