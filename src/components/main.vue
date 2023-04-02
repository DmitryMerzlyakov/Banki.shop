<template>
  <div class="testTask">
    <div class="testTask__top">
      <h1 class="testTask__top-text">Картины эпохи Возрождения</h1>
    </div>
    <div class="testTask__content">
      <vCard  
        
        v-for="product in filterProduct"
        :key="product.name"
        :thisProduct="product"
        @toBasket="toBasket"
        />
    </div>
  </div>
</template>

<script>
import vCard from '../components/card.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'vMain',
  components: {
    vCard
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions([
      'productsGet',
      'getSearchName',
      'basketPush',
      'loadBasket'
    ]),
    toBasket(data) {
        this.basketPush(data)
      
    }
  },
  computed: {
    ...mapGetters([
      'productsState',
      'searchItemName',
      'basketState'
    ]),
    filterProduct() {
      return this.productsState.filter( (elem) => {
        return elem.name.includes(this.searchItemName) 
      })
    }
  },
  async mounted () {
       await this.productsGet()
       this.loadBasket()
      // if (localStorage.getItem('id')) {
      //   this.id = JSON.parse(localStorage.getItem('id'))
      // } 
      // console.log(this.id);
  },
  // created () {
  //   this.loadBasket()
  // }
}
</script>


<style lang="scss">
  .testTask {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0 75px 100px;
    &__top {
      margin: 45px 0 45px 0;
        &-text {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 150%;
            display: flex;
            align-items: center;
            color: #343030;
        }
    }
    &__content {
      display: flex;
      justify-content: flex-start;
      gap: 32px;
    }
  }
</style>
