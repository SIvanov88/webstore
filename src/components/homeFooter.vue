<template>
    <div class="main">
        <div class="ullist">
            <ul class="list">
                <li>Shouce</li>
                <li>Jakets</li>
                <li>Electronics</li>
                <li>Clothing</li>
            </ul>
        </div>
        <div class="social">
            <i class="fa-brands fa-facebook mediaIcon"></i>
            <i class="fa-brands fa-twitter mediaIcon"></i>
            <i class="fa-brands fa-youtube mediaIcon"></i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
     .social{
        float: right;
        
    }
    .mediaIcon {
        max-width: 200px;
        max-height: 200px;
        padding: 15px;
        margin: 10px;
        border: 5px;
        border-radius: 30px;
        background: rgb(161, 109, 109);
        box-shadow: 5px 5px 10px rgb(211, 188, 188);
    }
    .mediaIcon:hover{
        background: rgb(168, 150, 150);
    }

    .mediaIcon:active{
        opacity: .7;
        transition: .3s;
        transform: scale(2);
        background: rgb(202, 20, 20);
    }
    .ullist{
        padding: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: -100px;
        color: rgb(211, 188, 188);
        background:linear-gradient(140deg, rgb(180, 175, 175) 10px 45%, rgb(163, 121, 121) 50px);
    }
    .list li{
        list-style-type: none;
        font-size: 20px;
    }
</style>