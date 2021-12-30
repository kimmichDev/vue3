<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h2>Member List</h2>
    <div v-if="members">
      <MemberCard v-for="member in members" :key="member.id" :member="member"></MemberCard>
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

    <router-link class="pagination" v-if="pageNo > 1" :to="{ name: 'MemberList', query: { page: $route.query.page - 1 } }">Prev</router-link>
    <router-link class="pagination" v-for="(no, index) in totalPage" :key="index" :to="{ name: 'MemberList', query: { page: no } }">{{ no }} </router-link>
    <router-link class="pagination" v-if="pageNo < totalPage" :to="{ name: 'MemberList', query: { page: pageNo + 1 } }">Next</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import MemberCard from "@/components/MemberCard.vue";
import Service from "@/services/Service.js";
import { watchEffect } from "vue";
export default {
  name: "MemberList",
  props: ["page"],
  components: {
    // HelloWorld,
    MemberCard,
  },
  data() {
    return {
      members: null,
      totalPage: "",
      pageNo: 1,
    };
  },
  created() {
    watchEffect(() => {
      this.members = null;
      if (this.$route.query.page) {
        this.pageNo = Number(this.$route.query.page);
      }
      Service.getMembers(2, this.pageNo).then((response) => {
        this.members = response.data;
        this.totalPage = Math.ceil(response.headers["x-total-count"] / 2);
        console.log(response);
      });
    });
    // console.log(this.page);
    // console.log(this.page.fullPath);
  },
};
</script>
<style lang="css" scoped>
.pagination {
  padding: 3px;
  border: 1px solid #42b983;
  margin: 0 3px;
  color: black;
  text-decoration: none;
}
</style>
