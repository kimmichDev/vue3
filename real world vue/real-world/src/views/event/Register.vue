<template>
  <div>
    <h3>Register Route</h3>
    {{ member.name }}
    <br />
    {{ member.id }}
  </div>
</template>

<script>
export default {
  name: "Register",
  props: ["member", "id"],
};
</script>

<style lang="scss" scoped></style>
