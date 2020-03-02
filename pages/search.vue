<template>
  <div>
      Search page
      <PostSmall 
        v-for="post in posts"
        :id="post.id"
        :key="post.id" 
        :image="post.image" 
        :userid="post.userid"
        />
  </div>
</template>

<script>
import PostSmall from "~/components/PostSmall"

export default {
    data() {
        return {
            posts: [
                {"id": 1, "image": "abv123", "userid": "fadhil"}
            ]
        }
    },
    components: {
        PostSmall
    }

}
</script>

<style>

</style>