<template>
  <div>
      This is feed page
      <ScrollFeed/>
  </div>
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