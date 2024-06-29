<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- DISINI PASTE NAVBAR BOOTSTRAP-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About Us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/aset">Aset</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/aset">Supplier</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/aset">Pegawai</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/aset">Order</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/aset">Pinjam</RouterLink>
        </li>
       

      </ul>
     
    </div>
  </div>
</nav>
     <!--END NAVBAR BOOTSTRAP-->

  </header>

  <RouterView />
</template>

<style scoped>

</style>
