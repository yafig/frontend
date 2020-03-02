<template>
  <div>
      <nuxt-link :to="'/p/' + id">
          Post id {{ id }} {{ image }} by {{ userid }}
      </nuxt-link>
  </div>
</template>

<script>
export default {
    name: "PostSmall",
    props: ["id", "image", "userid"]
}
</script>

<style>

</style>