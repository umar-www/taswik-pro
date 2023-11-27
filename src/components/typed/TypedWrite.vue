<template>
  <div>
    <p>Мы поможем вам <span style="color: rgba(232, 23, 23, 255)" ref="typedText"></span></p>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  mounted() {
    const options = {
      strings: [
        "создать полный образ для вашей компании",
        "привлечь целевую аудиторию",
        "привлечь новых клиентов",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    this.typed = new Typed(this.$refs.typedText, options);
  },
  beforeUnmount() {
    this.typed.destroy();
  },
};
</script>
