<template>
  <div>
    Post id {{ id }}
    posted by <nuxt-link :to="'/u/' + userid">  {{ userid }}</nuxt-link>
  </div>
</template>

<script>
export default {
    name: "PostDetail",
    props: ["id", "userid"]
}
</script>

<style>

</style>