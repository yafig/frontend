<template>
  <div>
      <nuxt-link :to="'/p/' + id">
            <img :src="img" :alt="'photos by' + userid" width="550"/>
      </nuxt-link>
  </div>
</template>

<script>
export default {
    name: "PostSmall",
    props: ["id", "img", "userid"]
}
</script>

<style>

</style>