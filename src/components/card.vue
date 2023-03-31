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
        <img :class="{painting__img, none}" :src=" require('../assets/' + card_data.img) " alt="img" @click="showPopup">
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
            :class="{button, buttonCard, loader}"
            >
            {{ title }}
          </button>
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
        setTimeout(() => 
        this.loader = true,
        this.title = '')

        setTimeout(() => {
          this.buttonCard = true
          this.title = 'В корзине'
          this.loader = false
        },2000)
        
        this.cardId.unshift(this.card_data.id)
        localStorage.setItem('id', JSON.stringify(this.cardId))
      },
      showPopup() {
        this.popupVisible = true
      },
      closePopup() {
        this.popupVisible = false
      },
      met () {
      }
    },
    computed: {
    },
    props: {
      card_data: {
          type: Object,
          default() {
              return {}
          }
        }
    },
    mounted() {
     if (this.card_data.store == false) {
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
        title: 'Купить',
        cardId: []
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
  