<template>
  <div>
        <PostBig 
            v-for="item in posts" 
            :key="item" 
            :id="item.id" 
            :userid="item.user" 
            :img="item.img"
        />
  </div>
</template>

<script>
import PostBig from "~/components/PostBig"

export default {
    data() {
        return{
            posts: [
                {"id": 1, "user": "fadhil", "img": "https://i.picsum.photos/id/1010/1230/500.jpg"},
                {"id": 2, "user": "fadhil", "img": "https://i.picsum.photos/id/1011/1230/500.jpg"},
                {"id": 3, "user": "fadhil", "img": "https://i.picsum.photos/id/1012/1230/500.jpg"}
            ]
        }
    },
    components: {
        PostBig
    },
    name: "ScrollFeed"
}
</script>

<style>

</style>