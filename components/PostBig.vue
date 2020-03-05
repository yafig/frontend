<template>
  <div class="big-post">
    Post id {{ id }}
    posted by <nuxt-link :to="'/u/' + userid">  {{ userid }}</nuxt-link>
  </div>
</template>

<script>
export default {
    name: "PostBig",
    props: ["id", "userid"]
}
</script>

<style scoped>
.big-post {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>