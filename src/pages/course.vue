<template>
    <!-- <van-nav-bar
    title="ddd"
    left-text="返回"
    left-arrow
    :fixed='true'
    @click-left="onClickLeft"
    > 
    </van-nav-bar> -->
    <div>
        <div class="header">
            <p style="font-size:1.2em">总人数 <font color="blue">|</font> 已打卡 <font color="blue">|</font> 异常 <font color="blue">|</font> 未打卡</p>
            <p style="font-size:1.2em">
                <a style="color:blue;margin-left:1.5em;margin-right:1.7em;">45</a>
                <a style="color:blue;margin-left:1em;margin-right:1.7em;">34</a>
                <a style="color:red;margin-left:1em;margin-right:1.7em;">1</a>
                <a style="color:red;margin-left:.5em;margin-right:1.7em;">10</a>
            </p>
        </div>
        <div style="margin-top:1em;margin-left:.8em;margin-right:.8em">
            <svg t="1570068086733" class="icon" viewBox="0 0 1131 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="852" width="24" height="24"><path d="M20.920965 855.751111m35.555556 0l853.333333 0q35.555556 0 35.555556 35.555556l0 0q0 35.555556-35.555556 35.555555l-853.333333 0q-35.555556 0-35.555556-35.555555l0 0q0-35.555556 35.555556-35.555556Z" p-id="853" fill="#1296db"></path><path d="M530.929854 9.671111L11.676521 512.426667a38.115556 38.115556 0 0 0-11.662222 28.444444l6.684444 188.017778a28.444444 28.444444 0 0 0 28.444444 27.306667l177.208889 2.275555a37.688889 37.688889 0 0 0 27.022223-10.808889l519.111111-503.466666a34.417778 34.417778 0 0 0 0-48.64L578.858743 10.666667a34.417778 34.417778 0 0 0-47.928889-0.995556z m149.191111 211.768889l-38.968889 37.831111a3.413333 3.413333 0 0 1-4.835555 0l-123.875556-128a3.555556 3.555556 0 0 1 0-4.835555l39.111111-37.831112a3.413333 3.413333 0 0 1 4.835556 0l123.875555 128a3.413333 3.413333 0 0 1-0.142222 4.835556zM195.569854 686.933333l-113.777778-1.422222a4.551111 4.551111 0 0 1-4.693333-4.551111l-5.262222-123.875556a9.244444 9.244444 0 0 1 2.702222-6.968888l382.008889-369.777778a3.413333 3.413333 0 0 1 4.835555 0l123.875556 128a3.413333 3.413333 0 0 1 0 4.835555L202.112076 685.084444a8.675556 8.675556 0 0 1-6.542222 1.848889z" p-id="854" fill="#1296db"></path></svg>
            <font size="4">打卡考勤</font>
        </div>
        <div class="contain">
            <div class="item"> 
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=241645350,1567395892&fm=26&gp=0.jpg">
                <div class="item-header">
                    <a style="font-size:1em">张三S</a><a style="position: relative;font-size: 1.4em;margin-left: 6em;top: 1em;">正常</a>
                    <p style="color:#d7d1c9;margin-top:.5em">学号: 1704091016</p>
                    <a style="font-size:.8em;margin-left:-5em;;">上课时间: 09:45:00</a>
                    <a style="font-size:.8em;margin-right:-5em;">下课时间: 09:45:00</a>
                </div>
            </div>
            <div class="item"> 
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=241645350,1567395892&fm=26&gp=0.jpg">
                <div class="item-header">
                    <a style="font-size:1em">张三S</a><a style="position: relative;font-size: 1.4em;margin-left: 6em;top: 1em;">正常</a>
                    <p style="color:#d7d1c9;margin-top:.5em">学号: 1704091016</p>
                    <a style="font-size:1.1em;margin-left:-5em;;">上课时间: 09:45:00</a>
                    <a style="font-size:1.1em;margin-right:-5em;">下课时间: 09:45:00</a>
                </div>
            </div>
            <div class="item"> 
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=241645350,1567395892&fm=26&gp=0.jpg">
                <div class="item-header">
                    <a style="font-size:1em">张三S</a><a style="position: relative;font-size: 1.4em;margin-left: 6em;top: 1em;">正常</a>
                    <p style="color:#d7d1c9;margin-top:.5em">学号: 1704091016</p>
                    <a style="font-size:1.1em;margin-left:-5em;;">上课时间: 09:45:00</a>
                    <a style="font-size:1.1em;margin-right:-5em;">下课时间: 09:45:00</a>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .header{
        border-radius:10px;
        width:19em;
        height:5em;
        float:center;
        margin:0 auto;
        background-color: aliceblue;
        text-align: center;
    }

    .header p font{
        margin-left:.2em;
        margin-right:.2em
    }

    .icon{
        position: relative;
        top: 0.3em
    }

    .item{
        border-radius:15px;
        background-color: aliceblue;
        width: 100%;
        height:8em;
        float: left;
        margin-bottom: 1em
    }

    .item img{
        width: 4em;
        height: 4em;
        margin-left:.8em;
        margin-top:.5em;
    }

    .item .item-header{
        position: relative;
        width: 15em;
        height: 4em;
        top: -4em;
        left: 5.5em;
    }

    .contain{
        margin-left: 1em;
        margin-right: 1em;
        margin-top: .5em
    }
</style>


