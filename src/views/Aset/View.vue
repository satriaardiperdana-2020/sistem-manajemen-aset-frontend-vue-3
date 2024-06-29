<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    <RouterLink to="/aset/create" class="btn btn-primary float-end">
                        Add Aset
                    </RouterLink>
                </h4>
            </div>
            <div class>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tanggal</th>
                            <th>Nama</th>
                            <th>Satus</th>
                            <th>Qty</th>
                            <th>tbmaTbmsId</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.aset.length > 0">
                    <tr v-for="(aset, index) in this.aset" :key="index">
                        <td>{{ aset.tbmaId }}</td>    
                        <td>{{ aset.tbmaCreatedDate }}</td>
                        <td>{{ aset.tbmaNama }}</td>
                        <td>{{ aset.tbmaStatus }}</td>
                        <td>{{ aset.tbmaQty }}</td>
                        <td>{{ aset.tbmaTbmsId }}</td>
                        <td>
                            <RouterLink :to="{ path: '/aset/'+aset.tbmaId+'/edit'}" class="btn btn-success mx-2">
                                Edit 
                            </RouterLink> 
                            <button type="button" @click="deleteAset(aset.tbmaId)" class="btn btn-danger mx-2">
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td colspan="7">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </template>

  <script>
  import axios from 'axios';
    export default {
        name: 'aset',
        data(){
            return{
                aset: []
            }
        },
        mounted(){
            this.getAset();
            
        },
        methods: {
            getAset(){
                axios.get('http://localhost:9000/asset/get-aset').then(res => {
                    this.aset = res.data
                    console.log(this.aset)
                
               });
            },
            deleteAset(tbmaId){
                console.log(tbmaId)
                if(confirm('Are you sure?')){
                    axios.delete(`http://localhost:9000/asset/delete-aset/${tbmaId}`).then(res => {
                        this.getAset();
                    }

                    );
                }this.getAset();

            },
        },
        

    }
  </script>
  