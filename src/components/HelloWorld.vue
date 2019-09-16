<template>
  <div class="inder-vote">
      <VoteSetect 
        title="Enter name vote"
        button_name="Confirm"
    />
  </div>

</template>

<script>
import VoteSetect from './voteSetect.vue'
import http from '../../http'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    VoteSetect
  },
  mounted() {
    console.log('hello')
    
  },
  data(){
    return {
      d: {
        a: 0
      },
      submitted: false
    }
  },
  methods: {
    testPost() {
      var data = {
        a: this.d.a
      };

      http.get('/people').then(res => {
        // this.d.a = res.data.a;
        console.log(res);
      }).catch(e => {
        console.log(e); 
      });

      // this.submitted = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inder-vote {
  /* text-align: center; */
  margin-left: 5%;
  margin-top: 5%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
