<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h2>Member List</h2>
    <MemberCard v-for="member in members" :key="member.id" :member="member"></MemberCard>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import MemberCard from "@/components/MemberCard.vue";
import Service from "@/services/Service.js";

export default {
  name: "MemberList",
  components: {
    // HelloWorld,
    MemberCard,
  },
  data() {
    return {
      members: null,
    };
  },
  created() {
    Service.getMembers()
      .then((response) => (this.members = response.data))
      .catch((error) => console.log(error));
  },
};
</script>
