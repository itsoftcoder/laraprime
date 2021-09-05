<template>
    <div>

        <Content></Content>

    </div>
</template>

<script>
import Content from './Content';
export default {
    name:'About',
    components:{
        Content
    },
    mounted() {
        console.log(this.$route.path)
        this.$emit('rtest',this.$route.path);
    },
}
</script>
