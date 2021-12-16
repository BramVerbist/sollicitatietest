<template>
    <div>
        <div>
            <div class="form-control">
                <label>Datum:</label>
                <input v-model="datum" type="text" name="datum" placeholder="dd-mm-yyyy"/>
            </div>

            <div class="form-control">
                <label>Tijdslot:</label>
                <select v-model="tijdslot">
                    <option>10:00-12:00</option>
                    <option>12:00-14:00</option>
                    <option>14:00-16:00</option>
                </select>
            </div>

            <bezoekers :bezoekers="bezoekers" @add-bezoeker="addBezoeker" @delete-bezoeker="deleteBezoeker"/>
        </div>
        <button @click="Reserveer">Reserveer</button>
    </div>
</template>

<script>
import Bezoekers from '../components/Bezoekers'

export default {
    name: "Reservatie",
    data() {
        return {
            datum: '',
            tijdslot: '',
            bezoekers: [],
            bezoekersnr: 0, 
        }
    },
    components: {
        Bezoekers
    },
    methods: {
        addBezoeker(){
            this.bezoekersnr+=1;
            console.log(this.bezoekernr);
            this.bezoekers = [...this.bezoekers, {
                id: this.bezoekersnr,
                voornaam: '',
                achternaam: '',
                abonnementsnummer: '',
            },];    
        },
        deleteBezoeker(id){
            if(confirm('Bent u zeker?')){
                this.bezoekers = this.bezoekers.filter((bezoeker) => bezoeker.id !== id);
                if(this.bezoekers.length == 0 ){
                    this.bezoekers = [
                    {
                        id: 0,
                        voornaam: '',
                        achternaam: '',
                        abonnementsnummer: '',
                    },
                    ]
                    this.bezoekersnr = 0
                }
            }
        },
        Reserveer(){
                        
            if(!this.datum){
                alert('Gelieve de datum in te geven')
                return
            }else{
                const regex = /\d{2}-\d{2}-\d{4}/ig;
                const match = regex.exec(this.datum);
                if(match===null) {
                    alert('De datum is ongeldig')
                    return
                }
            }

            if(!this.tijdslot){
                alert('Gelieve een tijdslot te kiezen')
                return
            }
            var incompleet = false;
            var invalid = '';
            this.bezoekers.forEach(bezoeker => {
                if(!bezoeker.voornaam || !bezoeker.achternaam || !bezoeker.abonnementsnummer) {
                    incompleet = true;
                }
                const regex = /(\d{4})-(\d{4})-(\d{2})/ig;
                const match = regex.exec(bezoeker.abonnementsnummer);
                if(match===null) {
                    invalid = bezoeker.abonnementsnummer;
                }else{
                    if( parseInt(match[3]) != parseInt(match[1]+match[2]) % 98 ){
                        invalid = bezoeker.abonnementsnummer;
                    }
                }
                

            });

            if(incompleet){
                alert('Gelieve de bezoekers te vervolledigen');
                return
            }

            if(invalid != ''){
                alert('Abonnementsnummer ' + invalid + ' is invalid');
                return
            }
            

            const newReservatie = {
                datum: this.datum,
                tijdslot: this.tijdslot,
                bezoekers: this.bezoekers,
            }

            this.$emit("add-reservatie", newReservatie)

            this.datum = ''
            this.tijdslot = ''
            this.bezoekers = [
            {
                id: this.bezoekersnr,
                voornaam: '',
                achternaam: '',
                abonnementsnummer: '',
            }]
            this.bezoekersnr = 0
        },
    },
    created(){
        this.bezoekers = [
            {
                id: this.bezoekersnr,
                voornaam: '',
                achternaam: '',
                abonnementsnummer: '',
            },
        ]
    }
}
</script>

<style scoped>
    form{
        margin: 20px;
    }
    div, input{
        margin-top: 10px;
    }
    label {
        margin-right: 10px;
    }
    button {
        margin-top: 10px;
        background: blue;
        color: white;
        padding: 10px;
    }
</style>
