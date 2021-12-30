<template>
  <router-link :to="{ name: 'MemberDetail', params: { id: member.id } }">
    <div class="card">
      {{ $route.params.id }}
      <p>Name : {{ member.name }}</p>
      <hr />
      <p>Age is {{ member.age }}</p>
      <hr />
      <p>Address is {{ member.address }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MemberCard",
  props: {
    member: Object,
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  padding: 15px;
  border: 1px solid black;
  margin: 20px auto;
  transition: all 1s;
}
.card:hover {
  transform: scale(1.1);
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
}
</style>
