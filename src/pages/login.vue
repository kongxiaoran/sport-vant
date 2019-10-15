<template>
    <div class="contain">
        <div style="text-align: center;margin-top: 6em;">
            <a style="font-size:1.3em;color:#fff;">高校体育俱乐部</a>
        </div>
        <div style="margin-top:4em;margin:0 auto;width:13em;left: 50%;">
            <div style="border-bottom:.1em solid #fff;width:13em;margin-top: 1em;padding-bottom: .2em;">
                <svg t="1571127424643" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2822" width="24" height="24"><path d="M480 551.68a273.28 273.28 0 1 1 272.64-273.28A273.92 273.92 0 0 1 480 551.68z m0-483.2a209.92 209.92 0 1 0 209.92 209.92A209.92 209.92 0 0 0 480 68.48z" fill="#ffffff" p-id="2823"></path><path d="M602.24 1011.84h-576v-70.4a453.12 453.12 0 0 1 454.4-453.12 32 32 0 0 1 0 64 389.76 389.76 0 0 0-389.76 389.76v7.04h512a32 32 0 0 1 0 64zM921.6 677.76H617.6a31.36 31.36 0 0 1 0-64h304a31.36 31.36 0 0 1 0 64zM921.6 785.28H617.6a31.36 31.36 0 0 1-31.36-31.36 30.72 30.72 0 0 1 31.36-31.36h304a30.72 30.72 0 0 1 31.36 31.36 31.36 31.36 0 0 1-31.36 31.36z" fill="#ffffff" p-id="2824"></path><path d="M921.6 885.12H617.6a31.36 31.36 0 0 1 0-64h304a31.36 31.36 0 0 1 0 64z" fill="#ffffff" p-id="2825"></path></svg>
                <input type="text" name="用户名" id="" placeholder="用户名" autofocus="autofocus">
            </div>
            <div style="border-bottom:.1em solid #fff;width:13em;margin-top: 1em;padding-bottom: .2em;">
                <svg t="1571127463375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3101" width="24" height="24"><path d="M822.4 1016.32H196.48a83.2 83.2 0 0 1-83.2-83.2V467.2A83.2 83.2 0 0 1 196.48 384h625.92a83.2 83.2 0 0 1 83.2 83.2v465.92a83.2 83.2 0 0 1-83.2 83.2zM196.48 448a19.2 19.2 0 0 0-19.2 19.2v465.92a19.2 19.2 0 0 0 19.2 19.2h625.92a18.56 18.56 0 0 0 19.2-19.2V467.2a18.56 18.56 0 0 0-19.2-19.2z" fill="#ffffff" p-id="3102"></path><path d="M285.44 441.6A32.64 32.64 0 0 1 256 409.6V259.84a252.8 252.8 0 0 1 504.96 0 32 32 0 0 1-32 32 32 32 0 0 1-32-32 188.8 188.8 0 0 0-376.96 0V409.6a32 32 0 0 1-34.56 32z" fill="#ffffff" p-id="3103"></path><path d="M508.8 662.4m-88.96 0a88.96 88.96 0 1 0 177.92 0 88.96 88.96 0 1 0-177.92 0Z" fill="#ffffff" p-id="3104"></path><path d="M512 855.04a32 32 0 0 1-32-32v-111.36a32 32 0 1 1 64 0v111.36a32 32 0 0 1-32 32z" fill="#ffffff" p-id="3105"></path></svg>
                <input type="password" name="密码" id=""  placeholder="密码" autofocus="autofocus">
            </div>
            <div style="width:17em;margin-top: 2em;">
                <van-button type="info" size="small" custom-style="border-radius:5px" style="width:17em">登录</van-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
   .contain{
        background-image:linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
        position:absolute;
        width: 100%;
        height: 100%;
   }

   .contain /deep/ input{
        background-color: transparent;
        padding: 0px 0px;
        border-width: 0px;
   }

   .icon{
      position: relative;
      top: 0.3em
    }
</style>

