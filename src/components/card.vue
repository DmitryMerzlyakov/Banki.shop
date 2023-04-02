<template>
    <div class="painting">
      
      <vPopup 
        v-if="popupVisible"
        :popupName="thisProduct.name"
        @closePopup="closePopup"
      >
        <div class="popup__img">
          <img class="popup__img-item" :src=" require('../assets/' + thisProduct.img) " alt="img">
          <img class="popup__img-item" :src=" require('../assets/' + thisProduct.imgOne) " alt="img">
          <img class="popup__img-item" :src=" require('../assets/' + thisProduct.imgTwo) " alt="img">
          <img class="popup__img-item" :src=" require('../assets/' + thisProduct.imgThree) " alt="img">
        </div>
        <p class="painting__content-text">{{ thisProduct.discription }}</p>
        <p class="popup__price" v-if="thisProduct.sale == ''"> {{ thisProduct.price }} </p>
        <p class="popup__price" v-if="thisProduct.sale !== ''"> {{ thisProduct.sale }} </p>
      </vPopup>
        <img :class="{painting__img, none}" :src=" require('../assets/' + thisProduct.img) " alt="img" @click="showPopup">
        <div class="painting__content">
          <h3 class="painting__content-text" @click="showPopup">{{ thisProduct.name }}</h3>
          <div class="painting__box">
            <div class="painting__box-text">
              <p class="painting__box-price"> {{ thisProduct.price }} </p>
              <p class="painting__box-sale" v-if="thisProduct.sale !== ''"> {{ thisProduct.sale }} </p>
            </div>
            <button  
            v-if="thisProduct.store == true" 
            @click="addToBasket"
            :class="{button, buttonCard, loader}"
            >
            {{ buttonTitle }}
          </button>
          </div>
        </div>
    </div>
  </template>
  
  <script>

import vPopup from './popup.vue'
import { mapGetters } from 'vuex'

    export default {
    name: 'vCard', 
    components: {
      vPopup,
    },
    computed: {
      ...mapGetters([
        'inBasket'
      ]),
      /* eslint-disable */
      buttonTitle() {
        if (this.inBasket(this.thisProduct.id) ) {
          this.buttonCard = true
          return 'В корзине'
        } else { 
          return 'Купить'
        }
      }
    },
    methods: {
      addToBasket() {
        setTimeout(() => 
        this.loader = true,
        this.title = '')

        setTimeout(() => {
          this.buttonCard = true
          this.loader = false
        },2000)

        this.$emit('toBasket',this.thisProduct)
       
      },
      showPopup() {
        this.popupVisible = true
      },
      closePopup() {
        this.popupVisible = false
      }
    },
    props: {
      thisProduct: {
          type: Object,
          default() {
              return {}
          }
        }
    },
    mounted() {
     if (this.thisProduct.store == false) {
      this.none = true
     }
    },

    data() {
      return {
        painting: true,
        none: false,
        loader: false,
        button: true,
        buttonCard: false,
        popupVisible: false,
        title: 'Купить'
      }
    }
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
            margin: 15px 0 0 0;
            width: 220px;
            }
        }
        &__img {
          width: 100%;
        }
    }
    .none {
      opacity: .3;
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
        cursor: pointer;
        
    }
    .buttonCard {
      background: #5B3A32;
      background-image: url(../assets/Vector.png);
      background-repeat: no-repeat;
      background-position: 15% 50%;
      background-size: 15px 15px;
      padding-left: 15px;
    }
    .loader {
      pointer-events: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid transparent;
      border-top-color: #ffffff;
      animation: an1 1s ease infinite;
    }
    @keyframes an1 {
      0% {
        transform: rotate(0turn);
      }
      100% {
        transform: rotate(1turn);
      }
    }
  </style>
  