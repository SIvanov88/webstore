<template>
    <div>
        <div>
            <div class="information">
                <h2>Product Market</h2>
                <span><i class="fa-solid fa-phone"></i>  0898 777 6665</span>
            </div>
                <img class="picWoman" src="../assets/girl-fashion.jpg" alt="picWoman">
        </div>
        <div class="productArea">
            <div class="products" v-for="el in data" :key="el.id">
                <p class="category">{{el.category}}</p>
                <router-link :to="{ name:'singleProduct' , 
                    params: { id: el.id } }">
                    <img class="items" :src="el.image" alt="">
                </router-link>
                <p class="productPrice">Price:{{el.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'homeHeader',
    props:['id'],
    data(){
        return{
                data:'',
                api: 'https://fakestoreapi.com/products?limit=20',
                massage: 'The data is not correct',
            }
    },
    mounted(){
        fetch(this.api).then(array =>{
           return array.json();
        }).then(result =>{
            this.data = result
            console.log(result);
        }).catch(err =>{
            console.log(err,this.massage);
        })
    },
}
</script>

<style>
    h2{
        color: rgb(161, 109, 109);
        text-shadow: 5px 5px 10px rgb(211, 188, 188);
    }
    .picWoman{
        min-width: 1300px;
        height: 250px;
        float: right;
        padding: 0px;
        margin: 0px;
        opacity: .3;
    }
    .information{
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }
    .productArea{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin-top: 200px;
        padding: 50px;
        padding-left: 110px;
        background: linear-gradient(rgb(185, 159, 159) 45% ,rgb(221, 167, 167) 55%)
    }
    .products{
        width: 200px;
        height: 400px;
        padding: 5px;
    }
    .items{
        width: 100px;
        height: 100px;
        border-radius: 30px;
        box-shadow: 5px 5px 10px rgb(163, 145, 145);
        padding: 10px;
        cursor: pointer;
    }
    .items:hover{
        opacity: .3;
        transition: .5s;
        transform: scale(1.1);
    }
    .category{
        max-width: 100px;
        height: 20px;
        padding-left: 50px;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
    }
    .productPrice{
        font-weight: bold;
    }
</style>