<template>
<section class="section">
    <div class="container">
        <input type="text" placeholder="Search here" v-model="search" @change="search_img">
        <hr>
        <PostSmall 
            v-for="post in posts"
            :id="post.id"
            :key="post.id" 
            :img="post.img" 
            :userid="post.userid"
            />
    </div>
</section>
</template>

<script>
import PostSmall from "~/components/PostSmall"

export default {
    data() {
        return{
            posts: [
                {"id": 1, "user": "fadhil", "img": "https://i.picsum.photos/id/100/1230/500.jpg"},
                {"id": 2, "user": "fadhil", "img": "https://i.picsum.photos/id/101/1230/500.jpg"},
                {"id": 3, "user": "fadhil", "img": "https://i.picsum.photos/id/102/1230/500.jpg"}
            ],
            search: ''
        }
    },
    methods: {
        search_img() {
            console.log(this.search)
        }
    },
    components: {
        PostSmall
    }

}
</script>

<style>

</style>