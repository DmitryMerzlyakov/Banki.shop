<template>
    <div class="header">
      <div class="header__link">
          <a class="header__link-href" href="">Каталог</a>
          <a class="header__link-href" href="">Доставка</a>
          <a class="header__link-href" href="">Оплата</a>
          <a class="header__link-href" href="">Контакты</a>
          <a class="header__link-href" href="">О компании</a>
      </div>
      <div class="header__inputBox">
          <input 
          placeholder="Поиск по названию картины" 
          class="header__inputBox-input" 
          type="text"
          v-model="searchName">
          <button class="header__inputBox-button"
          @click="search(searchName)">Найти</button>
      </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'vHeader',
  props: {},
  computed: {
    ...mapGetters([
      'searchItemName'
    ])
  },
  methods: {
    ...mapActions([
      'getSearchName'
    ]),
    search(value) {
      this.getSearchName(value)

    }
  },
  data () {
    return {
      searchName: ''
    }
  }
}
</script>
  

<style lang="scss">
  .header{
      border-bottom: 1px solid #E1E1E1;
      display: flex;
      justify-content: space-evenly;
      align-items: stretch;
      padding: 37px 0 37px 0;
      &__link {
        display: flex;
        gap: 48px;
        align-items: center;
        &-href {
          font-family: 'Merriweather';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #343030;
        }
      }
      &__inputBox {
        display: flex;
          &-input {
            box-sizing: border-box;
            border: 1px solid #E1E1E1;
            padding: 13px 70px 14px 16px;
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            align-items: center;
            :hover {
              color: #343030;
            }
          }
          &-button {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            width: 122px;
            background: #403432;
            border-radius: 0px;
          }
      }
  }
</style>
 