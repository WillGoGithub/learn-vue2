app.component('computed-example', {
    data() {
        return {
            author: {
                firstName: 'Jhon',
                lastName: 'Joe',
                books: [
                    'V1',
                    'V2',
                    'V3'
                ]
            }
        }
    },
    computed: {
        // A computed getter
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'N'
        },
        now() {
            // property will never update, because Date.now is not a reactive dependency
            // use methods instead
            return Date.now()
        },
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) {
                const names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
})