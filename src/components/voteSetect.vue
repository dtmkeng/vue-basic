<template>
    <div class="vote-detail">
         {{title}}
        <input v-model="votename" @focus="cleartext">
        <div class="votelist-s">
            <div v-for="(vote,index) in votelist" v-bind:key="index">
                       <input type="checkbox" v-model="voteselete" :value="vote"/> {{vote.name}}
            </div>
        </div>
        <br/>
        <p>
            Select vote Type
             <select v-model="votetype"  >
                <option disabled value="">Please select one</option>
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
export default {
    name: 'VoteSetect',
    components :{
        VoteConfirm
    },
    props:{
        button_name: { // default props value 
            button_name: String,
            default: 'Untitled'
        },
        title: { // default props value 
            title : String,
            default : 'Untitled'
        }
    },
    data: () => {
        return {
            votename:'Untitled',
            votelist:['vote-1','vote-2','vote-3','vote-4','vote-5'], //vote checkboxs
            voteselete:[],
            voteconfirm:[],
            isConfirme: false,
            votetype: '',
            votetypelsit:[]
        }
    },
    methods: {
        handlerClick : function() {
           if (this.votename == '' || this.votename == 'Untitled') {

               alert('Null data input or Untitled')

           }else {
                // this.todos.push(this.votename)
                // console.log(this.votename)
                this.isConfirme = true
                this.voteconfirm = []
                this.voteconfirm = this.voteselete
                // console.log(`${this.votename,this.voteselete,this.votetype}`)
                console.log('votename',this.votename)
                console.log('voteselete',this.voteselete)
                   console.log('votetype',this.votetype)
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
    mounted() {
      http.get('/competitor').then(res => {
        // this.d.a = res.data.a;
        this.votelist = res.data
        // console.log(res.data);
      }).catch(console.error);
      http.get('/votetype').then(res => {
        // this.d.a = res.data.a;
        this.votetypelsit = res.data
        console.log(res.data);
      }).catch(console.error);

     
    }
}
</script>
<style>
.votelist-s{
    margin-top: 2%;
}
</style>