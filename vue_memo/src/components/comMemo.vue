<template>
  <div class="memo">
    <ul>
      <li>메모 1 내용</li>
      <li>메모 2 내용</li>
      <li>메모 3 내용</li>
      <li>메모 4 내용</li>
      <li>메모 5 내용</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped> /* scoped는 이 파일 안에서만 쓴다는 얘기 */
.memo ul {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin: 5px;
    padding: 5px 10px;
  }
}
</style>