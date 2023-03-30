<template>
    <div class="painting">

      <vPopup 
        v-if="popupVisible"
        :popupName="card_data.name"
        @closePopup="closePopup"
      >
        <div class="popup__img">
          <img class="popup__img-item" :src=" require('../assets/' + card_data.img) " alt="img">
          <img class="popup__img-item" :src=" require('../assets/' + card_data.imgOne) " alt="img">
          <img class="popup__img-item" :src=" require('../assets/' + card_data.imgTwo) " alt="img">
          <img class="popup__img-item" :src=" require('../assets/' + card_data.imgThree) " alt="img">
        </div>
        <p class="painting__content-text">{{ card_data.discription }}</p>
        <p class="popup__price" v-if="card_data.sale == ''"> {{ card_data.price }} </p>
        <p class="popup__price" v-if="card_data.sale !== ''"> {{ card_data.sale }} </p>
      </vPopup>

      <img class="painting__img" :src=" require('../assets/' + card_data.img) " alt="img" @click="showPopup">
      <div class="painting__content">
        <h3 class="painting__content-text" @click="showPopup">{{ card_data.name }}</h3>
        <div class="painting__box">
          <div class="painting__box-text">
            <p class="painting__box-price"> {{ card_data.price }} </p>
            <p class="painting__box-sale" v-if="card_data.sale !== ''"> {{ card_data.sale }} </p>
          </div>
          <button  
          v-if="card_data.store == true" 
          @click="addToBasket"
          :class="className"
          >
          {{ title }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import vPopup from './popup.vue'

  export default {
    name: 'vCard',
    components: {
      vPopup,
    },
    methods: {
      addToBasket() {
       this.className.buttonCard = true
       this.title = 'В корзине'
      },
      showPopup() {
        this.popupVisible = true
      },
      closePopup() {
        this.popupVisible = false
      }
    },
    computed: {},
    props: {
      card_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
      return {
        className: {
          button: true,
          buttonCard: false,
        },
        popupVisible: false,
        title: 'Купить'
      }
    },
  }
  </script>
  
  
  <style lang="scss">
    .painting {
      width: 280px;
      height: 328px;
      box-sizing: border-box;
      border: 1px solid #E1E1E1;
        &__box {
          display: flex;
          gap: 5px;
          margin-top: 20px;
          width: 80%;
          justify-content: space-around;
          align-items: center;
          &-text {
            display: flex;
            flex-direction: column;
          }
          &-price {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            align-items: center;
            text-decoration-line: line-through;
            color: #A0A0A0;
          }
          &-sale {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            display: flex;
            align-items: center;
            color: #343030;
          }
        }
        &__content {
          display: flex;
          flex-direction: column;
          align-items: center;
            &-text {
            font-family: 'Merriweather';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            text-align: left;
            color: #343030;
            margin: 15px 0 0 24px;
            }
        }
    }
    .button {
        width: 118px;
        height: 48px;
        background: #382E2B;
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #F4F6F9;
        border-radius: 5px;
        transition: background-color 1s;
        &__loading {
            display: inline;    
        }
    }
    .button:hover {
      background: #776763;
    }
    .buttonCard {
      background: #5B3A32;
      background-image: url(../assets/Vector.png);
      background-repeat: no-repeat;
      background-position: 15% 50%;
      background-size: 15px 15px;
      padding-left: 15px;
    }
  </style>
  