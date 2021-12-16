<template>
    <body>
        <h1>Reserveer je bezoek aan de Zoo!</h1>

        <Reservatie @add-reservatie = 'addReservatie'/>
    </body>
</template>

<script>
import Reservatie from '../components/Reservatie'

export default {
    name: 'Home',
    components: {
        Reservatie,
    },
    methods: {
        addReservatie(reservatie){
            const json = JSON.stringify(reservatie);
            this.$emit('get-json',json);
            this.$router.push({path: '/bedankt', props: true});
        },
    },
    
}
</script>
