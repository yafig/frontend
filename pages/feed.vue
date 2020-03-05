<template>
  <section class="section">
      <div class="container">
        <ScrollFeed :key="scrollFeed"/>
      </div>
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