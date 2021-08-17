<template>
    <NuxtLink :to="`/products/${card.id}`" class="large-card">
        <div>
             <img :src="require(`@/assets/images/${card.image}`)" alt="" class="image">
        </div>
        <div class="card-content">
            <h3 class="heading">{{ card.title }}</h3>
            <p class="snippet">{{ card.snippet }}</p>
        </div>
    </NuxtLink>
</template>

<script>
    export default {
        props: ['card']
    }
</script>

<style scoped>

    .large-card {
        width: 100%;
        overflow: hidden;
        padding: 0;
        cursor: pointer;
    }

    .image {
        width: 100%;
        height: 12.5rem;
        border-radius: 0.5rem;
    }

    .heading {
        font-size: 1.15rem;
        margin-top: 0.4rem;
        height: 4rem;
        text-decoration: none;
        color: #000;
    }

    .snippet {
        color: grey
    }

</style>