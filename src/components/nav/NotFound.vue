<template>
<div>
  <div class="not-found-container">
    <div class="not-found-center">
      <p>
        <b>404 Error - Page Not Found</b> <br><br>
        The page you are looking for does not exist.<br>
        Head to the <a href="/">homepage</a> to choose a new direction.
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'NotFound',

}
</script>

<style scoped>
p {
  display: inline;
  word-wrap: break-word;
}

a {
  text-decoration: underline;
  color: inherit;
}

.not-found-container {
  height: calc(100vh - 202px);

  margin-top: 50px;
  box-sizing: content-box;
}

.not-found-center {
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
}

@media only screen and (max-width: 1000px) {
.not-found-container {
  height: calc(100vh - 382px);

  margin-top: 50px;
  box-sizing: content-box;
}

img {
    max-width: 400px;
    width: 100%;
  }
}

</style>