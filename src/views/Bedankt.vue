<template>
    <div>
        <h1>Bedankt voor uw reservatie</h1>

        <p>{{json}}</p>

        <router-link to="/">Terug naar reservatie</router-link>
    </div>
</template>

<script>
    export default{
        name: 'Bedankt',
        props:{
            json: String,
        },
    }
</script>
