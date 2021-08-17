<template>
    <div class="container">
        <h4 class="heading">{{ cardsSection.title}}</h4>
        <p class="snippet">{{cardsSection.snippet}}</p>
        <div class="cards-container">
            <LargeCard 
                v-for="card in cardsSection.cards"
                :key="card.id"
                :card="card"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cardsSection']
    }
</script>

<style scoped>

  .container {
    margin-top: 2rem;
    text-align: center;
  }

  .headimg {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .snippet {
    color: grey;
    margin-bottom: 1.5rem;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.5rem;
  }

</style>