<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Daniel Parker
      </h1>
      <h2 class="subtitle">
        Software Engineer
      </h2>
      <div class="links">
        <div class="row">
          <div class="col-6 mx-auto">
            <b-button
              variant="primary"
              size="lg"
              to="/consulting/"
              class="col"><i class="fas fa-handshake"/>Consulting</b-button>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12 col-sm-6">
            <b-button
              variant="outline-secondary"
              size="lg"
              to="/cv/"
              class="col"><i class="fas fa-file-user"/> CV</b-button>
          </div>

          <div class="col-12 col-sm-6">
            <b-button
              variant="outline-secondary"
              size="lg"
              href="https://medium.com/generalist-dev"
              target="_blank"
              class="col"><i class="fab fa-medium"/> Blog</b-button>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 col-sm-6">
            <b-button
              variant="outline-secondary"
              size="lg"
              href="https://gitlab.com/GeneralistDev"
              target="_blank"
              class="col"><i class="fab fa-gitlab"/> GitLab</b-button>
          </div>

          <div class="col-12 col-sm-6">
            <b-button
              variant="outline-secondary"
              size="lg"
              href="https://github.com/GeneralistDev"
              target="_blank"
              class="col"><i class="fab fa-github"/> GitHub</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

@media screen and (max-width: 700px) {
  .title {
    font-size: 45px;
  }

  .subtitle {
    font-size: 35px;
  }
}

.links {
  padding-top: 15px;
}
</style>
