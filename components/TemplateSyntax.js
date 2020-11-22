app.component('template-syntax', {
    template: /* html */ `
        <span v-once>This will nerver change: {{ msg }}</span>
        <span v-html="rawHtml"></span>
        <a :[attrName]="url"></a>
        <a @[eventName]="doSometing"></a>
    `,
})