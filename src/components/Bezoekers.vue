<template>
    <div>
        <div :key="bezoeker.id" v-for="bezoeker in bezoekers">
            <bezoeker :bezoeker="bezoeker" @delete-bezoeker="$emit('delete-bezoeker', bezoeker.id)" /> 
        </div>
        <button @click="$emit('add-bezoeker')">Voeg nog een bezoeker toe</button>
    </div>
</template>

<script>
import Bezoeker from './Bezoeker'

export default{
    name: 'Bezoekers',
    props: {
        bezoekers: Array,
    },
    components: {
        Bezoeker,
    },
}
</script>

<style scoped>
    button{
        margin-left: 10px;
    }
</style>
