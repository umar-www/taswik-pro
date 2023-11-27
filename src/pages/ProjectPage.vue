<template>
  <div class="ourProject">
    <h1>Наши проекты</h1>

    <div class="controls">
      <ul class="desktopControl">
        <div
          v-for="(item, idx) in controlTitle"
          :key="idx"
          class="control"
          @click="handleClick(idx)"
        >
          <li :class="{ active: currentIdx === idx }">{{ item }}</li>
          <i
            :class="{ handleIcon: currentIdx === idx }"
            class="fa-regular fa-hand-pointer"
          ></i>
        </div>
      </ul>

      <ul class="mobileControl">
        <div
          v-for="(item, idx) in controlTitle"
          :key="idx"
          class="control"
          @click="handleClick(idx)"
        >
          <li :class="{ active: currentIdx === idx }">{{ item }}</li>
          <i
            :class="{ handleIcon: currentIdx === idx }"
            class="fa-regular fa-hand-pointer"
          ></i>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const controlTitle = [
  "Контент-менеджмент",
  "Таргетированная реклама",
  "Контекстная реклама",
  "Спец проекты",
];

const currentIdx = ref(+localStorage.getItem("control"));

const handleClick = (idx) => {
  localStorage.setItem("control", idx);

  currentIdx.value = idx;
};
</script>

<style scoped>
.ourProject {
  font-family: "Montserrat";
  margin-top: 180px;
}
.ourProject h1 {
  font-size: 45px;
  font-weight: 600;
  text-align: center;
}
.controls .mobileControl{
  display: none;
}


.controls ul {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.controls ul li {
  list-style: none;
  border-bottom: 4px solid #ccc;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
}
.controls .control {
  text-align: center;
}

.control i {
  opacity: 0;
  margin-top: 30px;
  color: rgba(232, 23, 23, 255);
  transition: 0.3s;
  font-size: 25px;
}

.control:hover i {
  opacity: 1;
  transform: translateY(-20px);
}

ul .control:hover li {
  border-color: rgba(232, 23, 23, 255);
}

ul .control .active {
  border-color: rgba(232, 23, 23, 255);
}

ul .control .handleIcon {
  opacity: 1;
  transform: translateY(-20px);
}

@media screen and (max-width: 1300px) {
  .ourProject h1 {
    font-size: 32px;
  }

  .controls ul li {
    font-size: 16px;
  }
}

@media screen and (max-width: 1200px) {
  .ourProject h1 {
    font-size: 32px;
  }

  .controls ul li {
    font-size: 14px;
  }

  .control i {
    font-size: 22px;
  }
}

@media screen and (max-width: 776px) {
  .controls .desktopControl{
    display: none;
  }
  .controls .mobileControl{
    display: block;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
  
}
</style>
