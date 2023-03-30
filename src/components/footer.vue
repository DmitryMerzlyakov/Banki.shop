<template>
  <div class="footer">
    <div class="footer__link">
        <a class="footer__link-href" href="">Каталог</a>
        <a class="footer__link-href" href="">Доставка</a>
        <a class="footer__link-href" href="">Оплата</a>
        <a class="footer__link-href" href="">Контакты</a>
        <a class="footer__link-href" href="">О компании</a>
    </div>
    <div class="footer__nav">
      <a class="footer__nav-contact" href="tel:+7 (812) 555-55-55">+7 (812) 555-55-55</a>
      <a class="footer__nav-contact" href="">
        <img src="../assets/Vector.svg" alt="location">
        г. Санкт-Петербург, ул. Ефимова, 3</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vFooter',
  props: {}
}
</script>


<style lang="scss">
  .footer {
    padding: 37px 0 38px 0;
    background: #ECEAEA;
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
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
    &__nav {
      display: flex;
      gap: 54px;
      &-contact {
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #555555;
        gap: 5px;
      }
    }
  }

</style>
    