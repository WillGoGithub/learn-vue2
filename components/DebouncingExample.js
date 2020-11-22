app.component('debouncing-example', {
    created() {
        // Debouncing with Lodash
        this.debouncedClick = _.debounce(this.click, 500)
    },
    unmounted() {
        // Cancel the timer when the component is removed
        this.debouncedClick.cancel()
    },
    methods: {
        click() {
            // ...
        }
    },
    template: /* html */ `
        <button @click="debouncedClick">
            Save
        </button>
    `
})