<template>
    <div :class="lightClasses">
        <div class="light__counter" v-if="lightIsOn">{{ sec }}</div>
        
    </div>
</template>

<script>
    export default {
        name: 'Light',
        props: ['color', 'currentColorIs', 'sec'],
        computed: {
            lightIsOn() {
                return this.color === this.currentColorIs
            },
            lightClasses() {
                return `${this.color} ${this.lightIsOn ? 'light_on' : ''} ${this.lightIsOn && this.sec < 3 ? 'light_blink' : ''}`
            }
        }
    }
</script>

<style scoped>
    @keyframes blink-animation {
        to {
            opacity: 0.5;
        }
    }
    .light_red {
        background-color: red;
        color: white;
        opacity: 0.5;
    }
    .light_green {
        background-color: lightgreen;
        color: white;
        opacity: 0.5;
    }
    .light_yellow {
        background-color: yellow;
        color: black;
        opacity: 0.5;
    }
    .light_on {
        opacity: 1;
    }
    .light__counter {
        width: 30px;
        height: 30px;
        font-size: 1.5em;
        text-align: center;
        align-self: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    .light_blink {
        animation: blink-animation 0.2s steps(10, start) infinite;
    }
</style>