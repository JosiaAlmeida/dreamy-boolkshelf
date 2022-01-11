<template>
  <div class="nav-bar">
    <div class="nav-back-drop"></div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="nav-bar-wrapper d-flex align-items-center w-100" style="">
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >Sobre DB</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">A estante dos sonhos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sala de artes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CLube dos sonhos</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Eventos</a>
              </li>
              <li class="nav-item ml-auto">
                <div class="nav-right-content">
                  <div class="social-media">
                    <a href="#"> <i class="fab fa-pinterest-square"></i></a>
                    <a href="#"> <i class="fab fa-instagram"></i></a>
                  </div>
                  <div class="lang-option">
                    <a href="#">PT</a>
                    <span>|</span>
                    <a href="#">EN</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.nav-bar {
  background-image: url('/assets/img/armario.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
}
.nav-back-drop {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgb(116 115 113 / 23%);
}
.nav-bar-wrapper {
  column-gap: 7rem;
  justify-content: space-evenly;
  column-gap: 7rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
}
.navbar-nav {
  width: 100;
  column-gap: 8rem;
  justify-content: space-around;
}
.nav-right-content {
  display: flex;
  align-items: center;
  column-gap: 3rem;
}
.social-media {
  display: flex;
  column-gap: 1rem;
}
.lang-option {
  display: flex;
  column-gap: 1rem;
}
</style>
