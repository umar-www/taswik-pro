<template>
  <div id="ourProject" class="ourProject">
    <h1>Наши проекты</h1>

    <div class="controls">
      <ul class="desktopControl">
        <div
          v-for="(item, idx) in controlTitle"
          :key="idx"
          class="control"
          @click="handleClick(idx)"
        >
          <li :class="{ active: currentIdx === idx }">
            {{ item }}
          </li>
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
          <li :class="{ active: currentIdx === idx }">
            {{ item }}
          </li>
          <i
            :class="{ handleIcon: currentIdx === idx }"
            class="fa-regular fa-hand-pointer"
          ></i>
        </div>
      </ul>
    </div>

    <div>
      <Content v-if="openContentPage || currentIdx === 0" />
      <Target v-if="openTargetPage || currentIdx === 1" />
      <Reklama v-if="openReklamaPage || currentIdx === 2" />
      <ProjectSpace v-if="openSpacePage || currentIdx === 3" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import {
  Content,
  ProjectSpace,
  Reklama,
  Target,
} from "../pages/ProjectControls/index";

const controlTitle = [
  "Контент-менеджмент",
  "Таргетированная реклама",
  "Контекстная реклама",
  "Спец проекты",
];

const openContentPage = ref(false);
const openTargetPage = ref(false);
const openSpacePage = ref(false);
const openReklamaPage = ref(false);

const currentIdx = ref(+localStorage.getItem("control"));

const handleClick = (idx) => {
  localStorage.setItem("control", idx);

  currentIdx.value = idx;

  if (currentIdx.value === 0) {
    openContentPage.value = true;
    openSpacePage.value = false;
    openReklamaPage.value = false;
    openTargetPage.value = false;
  }
  if (currentIdx.value === 1) {
    openContentPage.value = false;
    openTargetPage.value = true;
    openReklamaPage.value = false;
    openSpacePage.value = false;
  }

  if (currentIdx.value === 2) {
    openContentPage.value = false;
    openTargetPage.value = false;
    openSpacePage.value = false;
    openReklamaPage.value = true;
  }
  if (currentIdx.value === 3) {
    openContentPage.value = false;
    openTargetPage.value = false;
    openReklamaPage.value = false;
    openSpacePage.value = true;
  }
};
</script>

<style scoped>
.ourProject {
  font-family: "Montserrat";
  margin-top: 70px;
}
.ourProject h1 {
  font-size: 45px;
  font-weight: 600;
  text-align: center;
}
.controls{
  padding: 0px 50px;
}
.controls .mobileControl {
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
  .controls .desktopControl {
    display: none;
  }
  .controls .mobileControl {
    display: block;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    padding: 0;
  }
  .mobileControl .control li {
    text-align: center;
    height: 30px;
  }
}
@media screen and (max-width: 576px) {
  .controls .mobileControl {
    grid-template-columns: 1fr;
    gap: 0px;
  }

  .mobileControl {
    margin: 0;
  }
}
</style>
