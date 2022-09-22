<template>
  <div>
    <br /><br /><br />
    <div class="container" style="margin: 20px auto">
      <div class="card" style="padding: 20px">
        <card-title><h1 class="text-center">Say Hi To Me!</h1></card-title>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <img src="assets/img/send.gif" style="width: 100%" alt="" />
            </div>
            <div class="col-md-6">
              <form v-on:submit.prevent>
                <div class="form-group">
                  <label for="email">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="text"
                    placeholder="Enter Your Name"
                    name="name"
                    v-model="name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    v-model="email"
                  />
                </div>
                

                <div class="form-group">
                  <label for="exampleFormControlTextarea1"
                    >Your Message...</label
                  >
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    v-model="message"
                  ></textarea>
                </div>


                <button @click="SendMsg()" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  margin: 10px;
}
button {
  width: 100%;
}
label {
  margin-bottom: 10px;
}
</style>

<script>

import axios from "axios";
import swal from 'sweetalert';
export default {

  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },


  methods: {
    async SendMsg() {
      swal("Successfully Sent, Thank you!");
  try {
    const sender = await axios.post(
      "https://formspree.io/f/moqbeyzz", 
      {
        name: this.name,
        email : this.email,
        message: this.message
      }

    );

    console.log(sender)
  } catch(e) {
    console.log(e);
  }
},

},

}
</script>