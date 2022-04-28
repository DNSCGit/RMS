<template>
  <div class="flex w-full">
    <div class="w-1/6">
    <!--SideBAr-->
      <Navbar />
    </div>
    <div class="w-5/6">
    <!--For Footer-->
      <Topbar />
      <router-view class="px-6" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Topbar from "../components/Topbar.vue";

export default {
  components: {
    Navbar,
    Topbar,
   
  },
};
</script>