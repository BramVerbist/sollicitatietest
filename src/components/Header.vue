<template>
    <header>
        <h1>Een goede dag</h1>
    </header>
</template>

<script>

export default{
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'default'
        }
    },
    computed: {
        homePage(){
            if(this.$route.path === '/'){
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
</style>
