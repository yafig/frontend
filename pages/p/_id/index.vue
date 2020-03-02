<template>
    <div>
        <PostDetail :id=$route.params.id />
    </div>
</template>
<script>
import PostDetail from "~/components/PostDetail"

export default {
    components: {
        PostDetail
    }
    
}
</script>