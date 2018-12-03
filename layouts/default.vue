<template>
  <div>
    <b-navbar
      toggleable="md"
      type="light"
      variant="light">

      <b-container>
        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse
          id="nav_collapse"
          is-nav>

          <b-navbar-nav class="mx-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/consulting/">Consulting</b-nav-item>
            <b-nav-item to="/cv/">CV</b-nav-item>
            <b-nav-item to="/contact/">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <section class="container body">
        <nuxt/>
      </section>
    </b-container>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.nav-link {
  color: rgba(0, 0, 0, 0.7) !important;
}

.nav-link:hover {
  color: rgba(0, 0, 0, 1) !important;
}

.body {
  margin-top: 20px;
}
</style>
