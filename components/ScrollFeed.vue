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
                {
                    "id": 111, 
                    "user": "fadhil", 
                    "img": "https://i.picsum.photos/id/111/1200/500.jpg",
                    "caption": "Hello world"
                },
                {
                    "id": 222, 
                    "user": "fadhil", 
                    "img": "https://i.picsum.photos/id/222/1200/500.jpg",
                    "caption": "Black Flies"
                },
                {
                    "id": 555, 
                    "user": "fadhil", 
                    "img": "https://i.picsum.photos/id/555/1200/500.jpg",
                    "caption": "Promise"
                },
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