<template>
    <div class="vote-detail">
         {{title}}
        <input v-model="votename" @focus="cleartext">
        <div class="votelist-s">
            <div v-for="(vote,index) in votelist" v-bind:key="index">
                       <input type="checkbox" v-model="voteselete" :value="vote"/> {{vote}}
            </div>
        </div>
        <br/>
        <p>
            Select vote Type
             <select v-model="votetype">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
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
export default {
    name: 'InsertName',
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
            votetype: ''
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
}
</script>
<style>
.votelist-s{
    margin-top: 2%;
}
</style>