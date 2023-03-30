<template>
    <div class="wrapper" ref="popupWrapper">
        <div class="popup">
            <span class="popup__name">{{ popupName }}</span>
            <slot></slot>
        </div>
    </div>
</template>

 
<script>
  
export default {
  name: 'vPopup',
  props: {
    popupName: {
        type: String,
        default: 'Popup Name'
    }
  },
  methods: {
    closePopup() {
        this.$emit('closePopup')
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    let vm = this
    document.addEventListener('click', (item) =>{
            if (item.target === vm.$refs['popupWrapper']) {
                vm.closePopup()
            }
    })
  }
}
</script>


<style lang="scss">
  .wrapper {
      background: rgba(60,60,60, .4);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
  }
  .popup {
    position: fixed;
    width: 600px;
    box-sizing: border-box;
    border: 1px solid #E1E1E1;
    background: #fff;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5px;
    align-items: baseline;
    z-index: 10;
        &__name {
            margin-top: 5px;
        }
        &__img {
            padding-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            justify-content: space-evenly;
            &-item {
                display: flex;
                width: 33%;
                margin: 15px;
            }
        }
  }
</style>
