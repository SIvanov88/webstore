<template>
<div class="contanct">
     <div v-if="status" class="form">
        <label for="name">Name:</label>
        <input class="input" type="text" name="" id="name" v-model="name">
        <label for="email">Email:</label>
        <input class="input" type="text" name="" id="email" v-model="email">
        <label for="subject">Subject:</label>
        <input class="input" type="text" name="" id="subject" v-model="subject">
        <label for="massage">Massage:</label>
        <textarea class="input" name="" id="massage" cols="30" rows="10" maxlength="300" v-model="massage"></textarea>
      <button @click='status=false,show=true,sendData()'  class="submit">Submit</button>
     </div>
     <div v-if="show" class="profilDIv">
        <h1>Thank you for your massage !!!</h1>
        <div class="sendInfo">
            <h3 class="text-style">Name:{{name}}</h3>
            <p class="text-style">Email:{{ email }}</p>
            <p class="text-style">Subject:{{subject}}</p>
            <p class="text-style">Massage:{{ massage }}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
   name: 'Contanct',
   data(){
      return {
         name:'',
         email:'',
         subject:'',
         massage:'',
         show:false,
         status:true,
         server:'https://jsonplaceholder.typicode.com/todos/1',
      }
   },
   components:{
   },
   methods:{
      sendData(){
         
      }
   },
   mounterd(){
      fetch('server')
      .then(response => response.json())
      .then(json => console.log(json))
   }
   
}
</script>

<style scoped>
   .contanct{
      padding: 50px;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(172, 129, 129);
      max-height: 600px;
      box-shadow: 5px 5px 15px rgb(95, 80, 80);
   }
   .form{
      display: flex;
      flex-direction: column;
      max-width: 300px;
   }
   .form label{
      text-align: left;
      font-weight: bold;
      text-shadow: 5px 5px 15px rgb(95, 80, 80);
   }
   .form input{
      height: 30px;
      border: 3px solid black;
      border-radius: 10px;
      margin-bottom: 15px;
      max-width: 600px;
      box-shadow: 5px 5px 15px rgb(95, 80, 80);
   }
   .dataSend {
      margin-top: 10px;
      height: 40px;
      border-radius: 10px;
      padding: 0px;
      background: rgb(143, 114, 114);
   }
   .dataSend:hover{
      background-color: rgb(172, 129, 129);
   }
   .submit {
      width: 300px;
      height: 50px;
      margin-top: 20px;
      border-radius: 10px;
      background: rgb(143, 114, 114);
      color: rgb(204, 146, 146);
      font-size: 20px;
      box-shadow: 5px 5px 15px rgb(95, 80, 80);
   }
   .form textarea{
      max-width: 600px;
      border: 3px solid black;
      border-radius: 10px;
      box-shadow: 5px 5px 15px rgb(95, 80, 80);
   }
    .profilDIv{
         
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 100px;
      background-color: rgb(172, 129, 129);
      max-height: 600px;
      box-shadow: 5px 5px 15px rgb(95, 80, 80);
        
    }
    .sendInfo{
      width: 900px;
      
    }
    .text-style{
        color:rgb(228, 208, 208);
        text-shadow: 5px 5px 5px rgb(56, 52, 52);
        text-align: left;
        padding: 20px;
    }
    h1{
        color:rgb(228, 208, 208);
        text-shadow: 5px 5px 5px rgb(56, 52, 52);
    }
</style>
