<template>
  <!-- <div>{{ $route.params.id }}</div> -->
  <div v-if="member">
    <router-link :to="{ name: 'MemberDetail' }">Detail</router-link> || <router-link :to="{ name: 'MemberRegister' }">Register</router-link> ||
    <router-link :to="{ name: 'MemberEdit' }">Edit</router-link>
    <router-view :member="member"></router-view>
  </div>
  <div v-else>
    <div class="boxes">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <!-- dribbble -->
    <a class="dribbble" href="https://dribbble.com/shots/5533600-Loading-boxes" target="_blank"><img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="" /></a>
  </div>
</template>

<script>
import Service from "@/services/Service.js";
export default {
  name: "Layout",
  props: {
    id: {
      type: Number,
    },
  },
  //   props ko router ka nay prop:true nae' thel lr tr
  data() {
    return {
      member: null,
    };
  },
  //   this.$route.params.id so p router mhr prop:true ma lote lal ya tl [ id thel tr ]
  created() {
    Service.getMember(this.id)
      .then((response) => {
        this.member = response.data;
        console.log(response);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped></style>
