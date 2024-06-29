<template>
    <div class="container mt-8">
        <div class="card">
            <div class="card-header">
                <h4>Edit Aset</h4>
            </div>


            <div class="card-body">
         
                <div class="mb-3">
                    <label for="">Nama - {{ model.aset.tbmaId }}</label>
                    <input type="text" v-model="model.aset.tbmaNama" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Satus </label>
                    <input type="text" v-model="model.aset.tbmaStatus" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Qty</label>
                    <input type="text" v-model="model.aset.tbmaQty" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">tbmaTbmsId</label>
                    <input type="text" v-model="model.aset.tbmaTbmsId" class="form-control" />
                </div>
               
                <div class="mb-3">
                   <button type="button" @click="updateAset" class="btn btn-primary">Save</button>
                </div>

            </div>
        </div>    

            

       
    </div>
            
     
</template>

<script>

import axios from 'axios';
export default {
    name: 'asetEdit',
    data(){
        return{
            tbmaId:'',
            errorList:'',
            model: {
                aset:{
                    tbmaNama: '',
                    tbmaStatus: '',
                    tbmaQty:'',
                    tbmaTbmsId: ''
                }
            }
        }
    },
    mounted(){
       //console.log('33'+this.$route.params.tbmaId);
     //  this.tbmaId = this.$route.params.tbmaId;
       this.getAsetData(this.$route.params.tbmaId);
       //this.getAsetData();


    },
    methods: {
        getAsetData(tbmaIdd){
            axios.get(`http://localhost:9000/asset/get-aset/${tbmaIdd}`)
            .then(res => {
               //
                //this.model.aset = res.data.aset
                
                this.model.aset = res.data;
               // console.log('xxbb= '  + );
                //this.aset = res.data


            });

        },
        updateAset(){
           // var mythis = this;
            axios.post('http://localhost:9000/asset/save-aset', this.model.aset).then(res => {
                console.log('idwer='+res)
                alert(res.data.message);

                // this.model.aset = {
                //     tbmaNama:'',
                //     tbmaStatus: '',
                //     tbmaQty:'',
                //     tbmaTbmsId: ''

                // }
                 
                
            })
        }
    }
}
</script>