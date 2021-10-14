<template>
    <div class="card">
        <div class="container">
            <Light 
                class="light light_red" 
                color="red" 
                :currentColorIs="currentColorIs" 
                :sec="counter"
            ></Light>
            <Light 
                class="light light_yellow" 
                color="yellow" 
                :currentColorIs="currentColorIs" 
                :sec="counter"
            ></Light>
            <Light 
                class="light light_green" 
                color="green" 
                :currentColorIs="currentColorIs" 
                :sec="counter"
            ></Light>
        </div>
    </div>
</template>

<script>
import Light from '@/components/Light.vue'

export default {
    name: 'start',
    props: ['currentColorIs'],
    data() {
        return {
            counter: null,
            interval: null,
            ligthsConfig: {
                'red': 10000,
                'yellow': 3000, 
                'green': 15000
            }
        }
    },
    computed: {
        getNextColor() {
            this.$store.commit('setNextColor', this.currentColorIs)
            return this.$store.state.nextColor
        }
    },
    watch: {
        currentColorIs() {
            this.setTimer()
        }
    },
    mounted() {
        this.setTimer()
    },
    methods: {
        setTimer() {
            const timer = this.ligthsConfig[this.currentColorIs];

            setTimeout(() => { 
                this.$router.push(this.getNextColor)
            }, timer)

            this.counter = this.ligthsConfig[this.currentColorIs] / 1000

            if (this.interval) {
                clearInterval(this.interval)
            }

            this.interval = setInterval(() => {
                this.counter--
            }, 1000)

        }
    },
    components: {
        Light
    }
}
</script>

<style scoped>
    .container {
        border: 1px solid black;
        border-radius: 5px;
        width: 80px;
        margin: 100px auto;
        padding: 10px;
        background-color: black;
    }
    .light {
        width: 60px;
        height: 60px;
        margin: 5px auto;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
</style>