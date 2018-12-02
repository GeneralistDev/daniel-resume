<template>
  <section>
    <h1>Consulting Services</h1>
    <p>
      I have a wealth of experience helping companies solve their biggest
      software problems by architecting innovative solutions, and training
      in-house staff to be better developers. I offer remote consulting services
      all around the world, and limited in-person consulting in Quito, Ecuador.
      I also provide advisory services to startups, and companies who are starting
      new projects and need help planning their roadmaps.
    </p>
    <h3>Areas of consulting expertise</h3>
    <ul>
      <li>Software planning and roadmapping</li>
      <li>AWS Cloud Billing</li>
      <li>AWS Cloud solutions architecting</li>
      <li>Software architectures</li>
      <li>Web application design and development</li>
      <li>Security best practices</li>
      <li>Serverless computing best practices and architectures</li>
      <li>DevOps automation</li>
    </ul>
    <p>
      <strong>Note: </strong>The above list isn't exhaustive, so if you are looking for expertise in another area
      please don't hesitate to contact me.
    </p>
    <hr>
    <h2 class="text-center">Get in contact for more information</h2>
    <div class="mt-4">
      <form
        name="consulting"
        method="POST"
        class="col-12 col-sm-10 col-md-5 m-auto"
        action="/consulting/thankyou"
        netlify-recaptcha
        netlify>
        <strong>Elements marked with * are required</strong>
        <hr>
        <div class="form-group">
          <label for="name">Name *</label>
          <input
            id="name"
            class="form-control"
            type="text"
            placeholder="Your Name"
            required>
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input
            id="email"
            class="form-control"
            type="email"
            placeholder="Your Email Address"
            required>
          <small
            id="emailHelp"
            class="form-text text-muted">Your email account will not be shared or used for spam or marketing purposes.</small>
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input
            id="country"
            class="form-control"
            type="text"
            placeholder="Your country">
        </div>
        <div class="form-group">
          <label for="comment">What do you need help with?</label>
          <textarea
            id="comment"
            class="form-control"
            rows="10"
            placeholder="Tell me about your business, and what you need assistance with so I can better respond to you."/>
        </div>

        <div class="form-group">
          <b-button type="submit">Submit</b-button>
        </div>
      </form>
    </div>
  </section>
</template>
