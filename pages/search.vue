<template>
<section class="section">
    <div class="container">
        <b-field label="Search your fav pics">
            <b-autocomplete
                :data="data"
                placeholder="e.g. ragdoll cat"
                field="title"
                :loading="isFetching"
                @typing="getAsyncData"
                @select="option => selected = option">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                        </div>
                        <div class="media-content">
                            {{ props.option.title }}
                            <br>
                            <small>
                                Released at {{ props.option.release_date }},
                                rated <b>{{ props.option.vote_average }}</b>
                            </small>
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>


        <hr>
        <PostSmall 
            v-for="post in posts"
            :id="post.id"
            :key="post.id" 
            :img="post.img" 
            :userid="post.userid"
            />
    </div>
</section>
</template>

<script>
import PostSmall from "~/components/PostSmall"
import debounce from 'lodash/debounce'

export default {
    data() {
        return{
            posts: [
                {"id": 100, "user": "fadhil", "img": "https://i.picsum.photos/id/100/1200/500.jpg"},
                {"id": 101, "user": "fadhil", "img": "https://i.picsum.photos/id/101/1200/500.jpg"},
                {"id": 102, "user": "fadhil", "img": "https://i.picsum.photos/id/102/1200/500.jpg"}
            ],
            data: [],
            selected: null,
            isFetching: false,
        }
    },
    methods: {
        getAsyncData: debounce(function (name) {
                if (!name.length) {
                    this.data = []
                    return
                }
                this.isFetching = true
                this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}`)
                    .then(({ data }) => {
                        this.data = []
                        data.results.forEach((item) => this.data.push(item))
                    })
                    .catch((error) => {
                        this.data = []
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            }, 500)

    },
    middleware: "auth",
    components: {
        PostSmall
    }
}
</script>

<style>

</style>