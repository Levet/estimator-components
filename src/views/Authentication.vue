<template>
  <main id="content" role="main" class="main">
    <div class="position-fixed top-0 right-0 left-0 bg-img-hero" style="height: 32rem; background-image: url(./svg/components/abstract-bg-4.svg);">
      <!-- SVG Bottom Shape -->
      <figure class="position-absolute right-0 bottom-0 left-0">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
          <polygon fill="#fff" points="0,273 1921,273 1921,0 "></polygon>
        </svg>
      </figure>
      <!-- End SVG Bottom Shape -->
    </div>

    <!-- Content -->
    <div class="container py-5 py-sm-7">
      <a class="d-flex justify-content-center mb-5" href="index.html">
        <img class="z-index-2" src="../../public/img/coltLogo.png" alt="Image Description" style="width: 8rem;">
      </a>

      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <!-- Card -->
          <div class="card card-lg mb-5">
            <div class="card-body">
              <!-- Form -->
              <form class="js-validate" novalidate="novalidate">
                <div class="text-center">
                  <div class="mb-5">
                    <h1 class="display-4">Sign in</h1>
                  </div>

                  <a class="btn btn-lg btn-block btn-white mb-4" href="#">
                        <span class="d-flex justify-content-center align-items-center">
                          <img class="avatar avatar-xss mr-2" src="../../public/svg/brands/microsoft-teams.svg" alt="Image Description">
                          Sign in with Microsoft Teams
                        </span>
                  </a>
                </div>
              </form>
              <!-- End Form -->
            </div>
          </div>

          <!-- End Card -->
          <div class="text-center">
            <a @click="$router.go(-1)" href="#">
              <small class="text-cap mb-4">Go back</small>
            </a>
          </div>

        </div>
      </div>
    </div>
    <!-- End Content -->
  </main>
</template>
<script>
export default {
}
</script>
