<template>
    <div>
         {{title}}
        <input v-model="username">
        <!-- <p>{{username}}</p> -->
        <!-- <ul>
            <li v-for="(todo,index) in todos" v-bind:key="index"  style="list-style-type:none;">
                {{ todo }}
            </li>
       </ul> -->
       <div class="orderlist-s">
            <div v-for="(order,index) in orderlist" v-bind:key="index">
                       <input type="checkbox" v-model="orderselete" :value="order"/> {{order}}
            </div>
            <!-- <span>{{orderselete}}</span> -->
        </div>
        <br/>
        <div>You Order Select</div>
        <!-- <span>{{orderselete}}</span> -->
       

        <div>
            <!-- <div>Order your confirm</div> -->
            <table>
                <tr>
                    <th>No. Order</th>
                    <th>Name Order</th>
                </tr>
                <tr v-for="(order,index) in orderselete" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{order}}</td>
                </tr>
            </table>
        </div>
         <p><button v-on:click="handlerClick">{{button_name}}</button></p>
    </div>
</template>
<script>
import { all } from 'q';
export default {
    name: 'InsertName',
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
            username:'Untitled',
            todos: ['test1'],
            orderlist:['order-1','order-2','order-3','order-4','order-5'],
            orderselete:[],
            order:[]
        }
    },
    methods: {
        handlerClick : function() {
           if (this.username == '' || this.username == 'Untitled') {

               alert('Null data input or Untitled')

           }else {
                // this.todos.push(this.username)
                console.log(this.username)
                this.username = '' // clear data in input 
                this.orderselete=[]
                alert('saved order ')

           }

        }
    },
}
</script>
<style>
.orderlist-s{
    margin-top: 2%;
}
</style>