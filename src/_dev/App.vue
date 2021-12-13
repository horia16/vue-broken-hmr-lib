<template>
  <ParentComponent>
    <!-- HMR WORKS HERE -->
    <ChildComponent style="background-color: aqua" />
  </ParentComponent>
</template>
<script setup lang="ts">
import ParentComponent from "@/components/ParentComponent.vue";
import ChildComponent from "@/components/ChildComponent.vue";
</script>
