<template>
    <div class="container mt-8">
        <div class="card">
            <div class="card-header">
                <h4>Add Aset</h4>
            </div>


            <div class="card-body">
                
                <div class="mb-3">
                    <label for="">Nama</label>
                    <input type="text" v-model="model.aset.tbmaNama" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Satus</label>
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
                   <button type="button" @click="saveAset" class="btn btn-primary">Save</button>
                </div>

            </div>
        </div>    

            

       
    </div>
            
     
</template>

<script>

import axios from 'axios';
export default {
    name: 'asetCreate',
    data(){
        return{
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
    methods: {
        saveAset(){
            axios.post('http://localhost:9000/asset/save-aset', this.model.aset).then(res => {
                console.log(res)
                alert(res.data.message);
                
            })
        }
    }
}
</script>