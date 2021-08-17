<template>
    <div class="hero">
        <img src="~assets/images/fire-extinguisher.svg" alt="" class="image" />
        <div class="text-container">
            <h1 class="heading">Find your Fire Extinguisher</h1>
            <p class="snippet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button class="button btn">Start Looking</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .hero {
      width: 100%;
      padding: 5rem 0rem;
      margin: 0 auto;
      overflow: hidden;
      text-align: center;
    }
    @media screen and (min-width: 50rem) {
      .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
      }
    }

    .text-container {
      margin-top: 2rem;
      text-align: center;
    }
    @media screen and (min-width: 50rem) {
      .text-container {
        text-align: left;
        width: 50%;
      }  
    }

    .button {
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        width: 20rem;
        font-weight: 700;
        transition: 0.5s;
    }

    .button:hover {
        width: 21.5rem;
    }

    .image {
      max-width: 20rem;
    }
    @media screen and (min-width: 50rem) {
      .image {
        margin-left: 2rem;
      }
    }

    
</style>