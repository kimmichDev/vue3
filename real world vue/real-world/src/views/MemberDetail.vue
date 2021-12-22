<template>
  <div>{{ $route.params.id }}</div>
  <h1>{{ member.name }}</h1>
</template>

<script>
import Service from "@/services/Service.js";
export default {
  name: "MemberDetail",
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
      .then((response) => (this.member = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped></style>
