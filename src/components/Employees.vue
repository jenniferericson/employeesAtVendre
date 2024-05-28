<script setup lang="ts">
import { IEmployee } from "./../models/IEmployee"
import { getEmployees } from "./../services/employeeService"
import { ref,onMounted } from "vue";

const employees = ref<IEmployee[]>();

const accsessEmployees = async () => {
  const response = await getEmployees();
  employees.value = response.data;
};

onMounted(() => {
  accsessEmployees();
});
</script>

<template></template>

<style scoped lang="scss"></style>