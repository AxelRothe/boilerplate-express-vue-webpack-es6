export default {
    template: `<div>{{message}} <button v-on:click="tick()">{{num}}</button></div>`,
    props: ["message"],
    data: () => {
        return {
            num: 0,
        };
    },
    methods: {
        tick() {
            this.num++;
        },
    },
};
