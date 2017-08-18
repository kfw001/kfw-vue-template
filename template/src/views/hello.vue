<style lang="scss">
@import "~scss_vars";

h1, h2{
    font-weight: normal
}
ul{
    list-style-type: none;
    padding: 0
}

li{
    display: inline-block;
    margin: 0 10px
}

a{
    color: $linkColor
}

.app{
    @include fonts;
    text-align: center;
    color: $color;
    margin-top: 60px
}

</style>
<template lang="html">
    <div class="app">
        <img src="../assets/images/logo.png">
        <div class="hello">
            <h1></h1>
            <h2>Essential Links</h2>
            <ul>
                <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
                <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
                <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
                <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
                <br>
                <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
            </ul>
            <h2>Ecosystem</h2>
            <ul>
                <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
                <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
            </ul>
            <h2>About me</h2>
            <ul>
                <li>
                    <a class="icon-family icon-git"
                        href="https://github.com/helloLaoYang"
                        target="_blank">
                        Github
                    </a>
                </li>
                <li>
                    <a class="icon-family icon-email"
                        href="mailto:aaron@codonas.cn"
                        target="_blank">
                        Email: &lt;aaron@codonas.cn&gt;
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ipg-hello',
    async created(){
        try {
            const res = await this.$http.post('login', {
                user: 'admin'
            });
            console.log( res );
        } catch (e) {
            console.log(e);
        };
    }
}
</script>
