<template>
  <!-- <div>{{ $route.params.id }}</div> -->
  <div v-if="member">
    <h1>{{ member.name }}</h1>
    <p>{{ member.age }} Old</p>
    <address>{{ member.address }}</address>
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
export default {
  name: "MemberDetail",
  props: {
    id: {
      type: Number,
    },
    member: {
      type: Object,
    },
    //   },
    //   //   props ko router ka nay prop:true nae' thel lr tr
    //   data() {
    //     return {
    //       member: null,
    //     };
    //   },
    //   //   this.$route.params.id so p router mhr prop:true ma lote lal ya tl [ id thel tr ]
    //   created() {
    //     Service.getMember(this.id)
    //       .then((response) => {
    //         this.member = response.data;
    //         console.log(response);
    //       })
    //       .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped></style>
