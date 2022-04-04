<template>
   <div class="mainColor">
        <div class="position">
        <button class="btnBack" @click="goBack()">Go Back</button>
        <h1 class="titleProduct">Product Details</h1>
        <h3>Articul:{{ id }}</h3>
        <h2>{{ data.title }}</h2>
        <div class="elements">
                <img class="productImg"  :src="data.image" alt="">
            <div class="itemInfo">
                <p class="itemPrice">Price:{{data.price}}</p>
                <p class="informantionProduct"><b>Description:</b> {{ data.description }}</p>
                <p>Rating: {{ data.rating }} </p>
            </div>
        </div>
    </div>
   </div>
</template>

<script>

export default {
    name:'singleProduct',
    props:['id'],
    data(){
        return{
            api: 'https://fakestoreapi.com/products/',
            data:'',
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    },
    mounted(){
        fetch(this.api + this.id).then(element =>{
           return element.json();
        }).then(result =>{
            this.data = result;
            console.log(this.data);
        })
    }
}
</script>
   
<style scoped>
    .titleProduct{
        color: rgb(143, 114, 114);
    }
    .position{
        margin-left: 100px;
        max-width: 300px;
        text-align: left;
    }
    .itemInfo{
        max-height: 280px;
        max-width: 500px;
        padding: 10px;
        margin-left: 10px;
        border: 3px solid rgb(214, 203, 203);
        background-color: rgb(143, 114, 114);
        box-shadow: 5px 5px 5px rgb(194, 176, 176);
        color: white;
    }
    b{
        color: black;
    }
    .itemPrice{
        font-size: 25px;
        text-shadow: 5px 5px 5px white;
    }
    .productImg{
        width: 300px;
        height: 300px;
        padding: 3px;
        box-shadow: 5px 5px 5px rgb(194, 176, 176);
        background: rgb(121, 86, 86);
        margin-right: 15px;
    }
    .informantionProduct{
        max-width: 800px;
    }
    .btnBack{
        width: 300px;
        padding: 20px;
        font-size: 15px;
        border-radius: 10px;
        background: rgb(143, 114, 114);
        box-shadow: 5px 5px 5px rgb(184, 171, 171);
    }
    .btnBack:active{
        opacity: .7;
        transition: .7s;
        transform: scale(1.05);
    }
    .elements{
        display: flex;
        flex-direction: row;
        width: 1000px;
        height: 700px;
    }
    .mainColor{
        box-shadow: 5px 5px 5px rgb(177, 136, 136);
        background: rgb(236, 206, 206);
        margin-top: 50px;
        padding-top: 20px;
    }
</style>