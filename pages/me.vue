<template>
  <section class="section">
      <div class="container">
          <div class="content">
              <div class="columns is-mobile is-vcentered">
                <div class="column is-one-quarter">
                    <figure class="image is-5by4">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                </div>
                <div class="column ">
                    <div class="columns is-mobile">
                        <div class="column">
                            <h1 class="title">Posts</h1>
                            <h2 class="subtitle">36</h2>
                        </div>
                        <div class="column">
                            <h1 class="title">Followers</h1>
                            <h2 class="subtitle">36</h2>
                        </div>
                        <div class="column">
                            <h1 class="title">Following</h1>
                            <h2 class="subtitle">36</h2>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div>
                <h2 class="title">{{ loggedInUser }}</h2>
                <h2 class="subtitle">She's my pride and joy</h2>
          </div>

        <PostSmall 
            v-for="post in posts"
            :id="post.id"
            :key="post.id" 
            :img="post.img" 
            userid="fadhil"
        />

      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import PostSmall from "~/components/PostSmall"

export default {
    data() {
        return {
            posts: [
                {"id": 100, "user": "fadhil", "img": "https://i.picsum.photos/id/100/1200/500.jpg"},
                {"id": 101, "user": "fadhil", "img": "https://i.picsum.photos/id/101/1200/500.jpg"},
                {"id": 102, "user": "fadhil", "img": "https://i.picsum.photos/id/102/1200/500.jpg"}
            ],
        }
    },
    computed: {
        ...mapGetters(['loggedInUser'])
    },
    middleware: "auth",
    components: {
        PostSmall
    }
}
</script>

<style>
</style>