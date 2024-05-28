<script setup lang="ts">
import { IEmployee } from "./../models/IEmployee"
import { getEmployees } from "./../services/employeeService"
import { ref,onMounted } from "vue";
import Employee from "./Employee.vue"

const employees = ref<IEmployee[]>();

const accsessEmployees = async () => {
  const response = await getEmployees();
  employees.value = response.data;
};

onMounted(() => {
  accsessEmployees();
});
</script>

<template>
<main class="employeesContainer">
  <Employee v-for="employee in employees" :employee="employee" :key="employee.id"/>
</main>
</template>

<style scoped lang="scss">
.employeesContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  margin: 0 10rem;
}
</style>