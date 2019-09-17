<template>
    <div class="vote-detail">
         {{title}}
        <input v-model="votename" @focus="cleartext" type="number">
        <div class="votelist-s">
            <div v-for="(vote,index) in votelist" v-bind:key="index">
                       <input type="checkbox" v-model="voteselete" :value="vote"/> {{vote.name}}
            </div>
        </div>
        <br/>
        <p>
            Select vote Type
             <select v-model="votetype"  >
                <option disabled value="">Vote Type</option>
                <option v-for="(votetypes,index) in votetypelsit" :key="index" :value="votetypes">{{votetypes.name}}</option>
            </select>
        </p>
       
        <!-- <span>Selected: {{ selected }}</span> -->
        <!-- <div>You vote Select</div> -->

         <VoteConfirm v-if="isConfirme" 
                    :voteselete="voteconfirm"
                    :vote_name="votename"
                    :vote_type="votetype"
        />
         <p><button v-on:click="handlerClick">{{button_name}}</button></p>
    </div>
</template>
<script>
import VoteConfirm from './voteConfirm'
import http from '../../http'
 /* eslint-disable */ 
export default {
    name: 'VoteSetect',
    components :{ // define for use any component
        VoteConfirm
    },
    props:{
        button_name: { // default props value 
            button_name: String,
            // default: 'Untitled'
        },
        title: { // default props value 
            title : String,
            // default : 'Untitled'
        }
    },
    data: () => {
        return {
            votename:'',
            votelist:['vote-1','vote-2','vote-3','vote-4','vote-5'], //vote checkboxs
            voteselete:[],
            voteconfirm:[],
            isConfirme: false,
            votetype: '',
            votetypelsit:[],
            competitor:[]
        }
    },
    methods: {
        handlerClick : function() {
           if (this.votename == '') {

               alert('Null data input or Untitled')

           }else {
                // this.todos.push(this.votename)
                // console.log(this.votename)
                this.isConfirme = true
                this.voteconfirm = []
                this.voteconfirm = this.voteselete
                // console.log(`${this.votename,this.voteselete,this.votetype}`)
                // eslint-disable-next-line no-console
                // console.log('votename',this.votename)
                // console.log('voteselete',this.voteselete)
                for(let i=0;i<this.voteselete.length;i++) {
                    // console.log(this.voteselete[i].name)
                    this.competitor.push(this.voteselete[i].id)
                }
                // console.log('votetype',this.votetype.id)
                  http.post("/voted",
                            {
                            "prepleid":this.votename,
                            "competitor":this.competitor,
                            "votetype":this.votetype.id
                            }
                  ).then(res=>{
                        alert('saved vote')
                  }).catch(error=>{
                      console.error(error);
                      
                  })
                // this.votename = '' // clear data in input 
                // this.voteselete=[]
                // alert('saved vote ')

           }

        },
        cleartext : function(){
            this.votename = ''
            this.isConfirme = false
        }
    },
    
    mounted() { // active after dom mount
      http.get('/competitor').then(res => {
        // this.d.a = res.data.a;
        this.votelist = res.data
        // console.log(res.data);
        /* eslint-disable */ 
      }).catch(err=>{console.error(err)});

      http.get('/votetype').then(res => {
        // this.d.a = res.data.a;
        this.votetypelsit = res.data
      }).catch(err=>{
          // eslint-disable-next-line no-console
          console.error(err)
      });
     
    }
}
</script>
<style>
.votelist-s{
    margin-top: 2%;
}
</style>