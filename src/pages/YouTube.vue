<template>
  <h1>Вот, что о нас говорят:</h1>

  <div class="you-tube">
    <span>ВИДЕО ОТЗЫВЫ</span>
    <div class="animation-container">
      <i class="fa-brands fa-youtube"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 43px;
  font-weight: 400;
  font-family: "Montserrat";
  margin-top: 100px;
}
.you-tube {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
span {
  display: flex;
  gap: 100px;
  text-align: center;
  margin-top: 100px;
  font-size: 80px;
  font-weight: 400;
  opacity: 0.15;
}
.you-tube .animation-container {
  position: absolute;
  top: 40%;
  font-size: 100px;
  color: rgba(221, 56, 56, 255);
  cursor: pointer;
  border-radius: 50%;
}
.you-tube i{
    transition: 0.3s;
}
.you-tube i:hover{
    opacity: 0.5;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(360deg);
  }
  75% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.animation-container {
  display: inline-block;
  animation: spin 4s linear infinite;
}
</style>
