<template>


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5">
        <a href="/#home" class="navbar-brand d-block d-lg-none">
            <h1 class="text-primary fw-bold m-0"> Ahmad </h1>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">

                <a href="/#home" class="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                <h1 class="text-primary fw-bold m-0" style="color:crimson">Ahmad</h1>
            </a>


                <a href="/#home" class="nav-item nav-link active">Home</a>
                <a href="/#about" class="nav-item nav-link">About</a>
                <a href="/#skill" class="nav-item nav-link">Skills</a>
                <a href="/#service" class="nav-item nav-link">Services</a>
               
                <a href="/#project" class="nav-item nav-link">Projects</a>
                <!--  -->
                
                <router-link class="nav-item nav-link" to="/contact">Contact</router-link>
            </div>

            <div class="navbar-nav me-auto py-0">
              
                
            </div>
        </div>
    </nav>
    <!-- Navbar End -->



</template>

<script>
export default{
    name: "NavHeader",
    data(){

        return{

        }

    },

}
</script>
<style>
   
</style>