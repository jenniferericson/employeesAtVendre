<script setup lang="ts">
import { IEmployee } from "./../models/IEmployee";
import { defineProps, ref } from "vue";

interface EmployeeProp {
  employee: IEmployee;
}

defineProps<EmployeeProp>();
</script>

<template>
<div class="employeeContainer">
    <img class="employeeContainer__img" :src="employee.avatar" alt="Close shot picture of person"/>
    <p class="employeeContainer__name">
      {{ employee.first_name }} <span>{{ employee.last_name }}</span>
    </p>
    <div>
      <a class="employeeContainer__email" :href="'mailto:' + employee.email">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="currentColor"
        class="bi bi-envelope"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
        />
      </svg>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.employeeContainer {
  width: 200px;
  height: 250px;
  margin-bottom: 10px;

  &__img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        object-fit: cover;
    }
  

  &__name {
    font-size: 18px;
    font-family: sans-serif;
  }

  &__email {
    margin-top: 10px;
    color: black;

    :hover {
        color: #5333ED;
    }
  }
}
</style>