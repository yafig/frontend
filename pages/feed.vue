<template>
  <section class="section">
      <ScrollFeed :key="scrollFeed"/>
  </section>
</template>

<script>
import ScrollFeed from "~/components/ScrollFeed"

export default {
    components: {
        ScrollFeed
    },
    middleware: "auth"

}
</script>

<style>

</style>