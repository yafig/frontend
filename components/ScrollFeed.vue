<template>
  <div>
        <PostBig v-for="item in id" :key="item" :id="item.id" :userid="item.user"/>
  </div>
</template>

<script>
import PostBig from "~/components/PostBig"

export default {
    data() {
        return{
            id: [
                {"id": 1, "user": "fadhil", "image": "http://image.com"}
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