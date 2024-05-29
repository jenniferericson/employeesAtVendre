<script setup lang="ts">
import { IEmployee } from "./../models/IEmployee"
import { getEmployees } from "./../services/employeeService"
import { ref,onMounted } from "vue";
import Employee from "./Employee.vue"

const employees = ref<IEmployee[]>();
const currentPage = ref(1);
const totalPages = ref(0);

const accsessEmployees = async (page: number) => {
  const response = await getEmployees(page);
  employees.value = response.data;
  totalPages.value = response.total_pages;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    accsessEmployees(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    accsessEmployees(currentPage.value);
  }
};

onMounted(() => {
  accsessEmployees(currentPage.value);
});
</script>

<template>
<main class="employeesContainer">
  <Employee v-for="employee in employees" :employee="employee" :key="employee.id"/>
</main>
<div class="pagination">
      <button class="pagination__btn" :class="{ disabledBtn: currentPage === 1 }" @click="prevPage"> &laquo; </button>
      <span class="pagination__text">Sida {{ currentPage }} av {{ totalPages }}</span>
      <button class="pagination__btn" :class="{ disabledBtn: currentPage === totalPages }" @click="nextPage">&raquo;</button>
  </div>
</template>

<style scoped lang="scss">
.employeesContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  margin: 0 5rem;
}

.pagination {
  margin-bottom: 1rem;

  &__text {
    font-size: 1rem;
    margin: 6px;
  }

  &__btn {
    border: none;
    background-color: white;
    color: #5333ED;
    font-size: 1.5rem;
  }
}

  .disabledBtn {
    border: none;
    background-color: white;
    color: #5333ED;
    opacity: 20%;
    font-size: 1.5rem;
  }

</style>