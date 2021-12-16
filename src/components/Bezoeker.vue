<template>
    <div id='single-bezoeker'>
        <div>
            <div class="form-control">
                <label>Voornaam:</label>
                <input v-model="bezoeker.voornaam" type="text" name="voornaam" placeholder="voornaam"/>
            </div>

            <div class="form-control">
                <label>Achternaam:</label>
                <input v-model="bezoeker.achternaam" type="text" name="achternaam" placeholder="achternaam"/>
            </div>

            <div class="form-control">
                <label>Abonnementsnummer:</label>
                <input v-model="bezoeker.abonnementsnummer" type="text" name="abonnementsnummer" placeholder="abonnementsnummer" style=""/>
            </div>
        </div>
        <button @click="$emit('delete-bezoeker',bezoeker.id)">delete</button>
    </div>
</template>

<script>
export default{
    name: 'Bezoeker',
    props: {
        bezoeker: Object,
    },
}
</script>

<style scoped>
    #single-bezoeker {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin: 10px;
        padding: 10px;
        background: rgba(128, 128, 128, 0.089)
    }
    button {
        margin: 15px;
    }
    .form-control {
        margin: 5px;
    }
    label {
        margin-right: 5px;
    }
    #invalid {
        background: red;
    }
</style>
