<template>
  <div class="container">
    <h1>
      <span style="color: rgba(251, 155, 60, 255); font-weight: 600">Э</span
      >тапы работы
    </h1>

    <button @click="prevSlide()" class="nextButton">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button @click="nextSlide()" class="prevButton">
      <i class="fa-solid fa-chevron-right"></i>
    </button>

    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div id="carousel-item" class="carousel-item active">
          <img id="itemImg" src="../assets/images/category.svg" alt="" />
          <div class="title">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos vero doloribus, impedit omnis vel similique ut labore
              recusandae sit cupiditate asperiores ipsa dolorem magnam aperiam
              soluta nisi distinctio tenetur. Recusandae?
            </p>
          </div>
        </div>
        <div id="carousel-item" class="carousel-item">
          <img id="itemImg" src="../assets/images/category.svg" alt="" />
          <div class="title">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos vero doloribus, impedit omnis vel similique ut labore
              recusandae sit cupiditate asperiores ipsa dolorem magnam aperiam
              soluta nisi distinctio tenetur. Recusandae?
            </p>
          </div>
        </div>
        <div id="carousel-item" class="carousel-item">
          <img id="itemImg" src="../assets/images/category.svg" alt="" />
          <div class="title">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos vero doloribus, impedit omnis vel similique ut labore
              recusandae sit cupiditate asperiores ipsa dolorem magnam aperiam
              soluta nisi distinctio tenetur. Recusandae?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const nextSlide = () => {
  var carousel = document.getElementById("carouselExample");
  var carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.next();
};
const prevSlide = () => {
  var carousel = document.getElementById("carouselExample");
  var carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.prev();
};
</script>

<style scoped>
.container {
  margin-top: 150px;
  position: relative;
}
.container h1 {
  font-size: 53px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 130px;
}

#itemImg {
  width: 180px;
}

#carousel-item {
  text-align: center;
  padding: 0px 250px;
}
#carousel-item .title {
  margin-top: 30px;
}
#carousel-item .title h3 {
  font-size: 26px;
  font-weight: bold;
  border-bottom: 3px solid rgba(251, 155, 60, 255);
}
#carousel-item .title p {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 400;
}

.nextButton,
.prevButton {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 55%;
  font-size: 18px;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(251, 155, 60, 255);
  color: #fff;
  z-index: 1;
}
.nextButton {
  left: 0;
}

.prevButton {
  right: 0;
}

@media screen and (max-width: 1100px) {
  .container h1 {
    font-size: 35px;
  }
  #carousel-item {
    text-align: center;
    padding: 0px 150px;
  }
}
@media screen and (max-width: 992px) {
  #carousel-item {
    text-align: center;
    padding: 0px 30px;
  }
}
@media screen and (max-width: 776px) {
  #carousel-item .title h3 {
    font-size: 22px;
  }
  #carousel-item .title p {
    font-size: 16px;
  }
}
@media screen and (max-width: 576px) {
  .nextButton {
    left: 20px;
  }

  .prevButton {
    right: 20px;
  }
}
</style>
