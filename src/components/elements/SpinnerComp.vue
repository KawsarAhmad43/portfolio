   
   <template>

   
   <!-- Spinner Start -->
   <div id="spinner" v-if="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->
    
   </template>


<script>
    export default {
data() {
    return {
      spinner: true,
    }
  },

  mounted() {
    setInterval(()=>{
        this.spinner=false;
    },5000)
   
  },
}
</script>




   
   
   
