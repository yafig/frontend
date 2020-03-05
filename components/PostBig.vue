<template>
  <div class="big-post">
    <nuxt-link :to="'/p/' + id"><img :src="img"/></nuxt-link>
    <br>
    Post id {{ id }}
    posted by <nuxt-link :to="'/u/' + userid">  {{ userid }}</nuxt-link>
  </div>
</template>

<script>
export default {
    name: "PostBig",
    props: ["id", "userid", "img"]
}
</script>

<style scoped>
.big-post {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>