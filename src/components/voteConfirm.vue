<template>
   <div id='vote-confirm'>
            <!-- <div>vote your confirm</div> -->
            <div><b>Vote Name:</b>{{vote_name}}</div>
            <div><b>Type Vote:</b>{{vote_type.name}}</div>
            <br/>
            <table>
                <tr>
                    <th>No. Vote</th>
                    <th>Name Vote</th>
                </tr>
                <tr v-for="(vote,index) in voteselete" :key="index">
                    <td>{{vote.id}}</td>
                    <td>{{vote.name}}</td>
                </tr>
            </table>
    </div>
</template>
<script>
export default {
    name: 'VoteConfirm',
    props:{
        voteselete : Array,
        vote_name: String,
        vote_type: ''
    }
}
</script>
<style scope>
table {
  font-family: arial, sans-serif;
  bvote-collapse: collapse;
  width: 50%;
}

td, th {
  bvote: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
#vote-confirm {
    /* margin-left: 5%; */
}
</style>