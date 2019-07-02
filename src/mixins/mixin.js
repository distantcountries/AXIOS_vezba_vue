export const mixin1 = {
    data() {
        return {
            user: ''
        }
    },
    created() {
        this.user = "Misa";
        console.log('Called from mixin 1')
    },

    methods: {
        gerUserName() {
            return this.user
        }
    }
}

export const mixin2 = {
    data() {
        return {
            user: ''
        }
    },
    created() {
        this.user = "Pera";
        console.log('Called from mixin 2')
    },
}

export const mixin3 = {
    data() {
        return {
            user: ''
        }
    },
    created() {
        this.user = "Zika";
        console.log('Called from mixin 3')
    },

    mounted() {
        console.log('Called from mounted')
    }
}



export const mixinDate = {

    data() {
        return {
            date: new Date(),
        }
    },

    methods: {
        getFormatedDate(date) {
            return new Intl.DateTimeFormat().format(date);
        }
    }

}