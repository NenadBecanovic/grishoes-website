<template>
    <div id="homepage">
        <div id="homepage-content">
            <div class="container-fluid navigation-container px-0">
                <div class="container-fluid d-none d-lg-block px-0">
                <img src="../assets/full-logo.png" alt="Brand logo" class="full-logo pt-2"/>
                </div>
                <div class="container d-lg-none px-0">
                <img src="../assets/full-logo.png" alt="Brand logo" class="foodly-logo pt-2"/>
                </div>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid px-0">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="../assets/navbar.png" alt="Navigation" />
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <div class="nav-link-container">
                                    <a class="nav-link mt-1 py-0" href="#" aria-current="page">Početna</a>
                                </div>
                                </li>
                                <li class="nav-item">
                                <div class="nav-link-container">
                                    <a class="nav-link mt-1 py-0" href="#" aria-current="page">Obuća</a>
                                </div>
                                </li>
                                <li class="nav-item">
                                <div class="nav-link-container">
                                    <a class="nav-link mt-1 py-0" @click="scroll" aria-current="page">Kontakt</a>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="homepage-body mb-5">
                <div class="mt-4 d-flex flex-row">
                    <div class="article-container mt-2">
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image001.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">Naslov</h5>
                                    <h5 class="card-title fw-bold mt-3">Color</h5>
                                </div>
                                <p class="card-text text-wrap">Gdfbgjkdfgdfjkghdfjkgdfkjgdfhgkjdfhgdfjkghhfdhfdhdfdfkjgfdhgkjdfgh</p>
                                <span>Cena 6500din</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image001.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">Naslov</h5>
                                    <h5 class="card-title fw-bold mt-3">Color</h5>
                                </div>
                                <p class="card-text">gfhgfh</p>
                                <span>Cena 6500din</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-white" id="footer">
            <div class="container p-4 pb-0">
                <section class="footer-info d-flex flex-row mb-4">
                    <div class="d-flex flex-column text">
                        <div class="basic-title">Vlasnik:</div>
                        <span class="mb-2 mt-2"> Bojan Bajagić </span>
                        <span> Tel: 063-261-381 </span>
                    </div>
                    <div class="d-flex flex-column ms-5">
                        <div class="basic-title">Menadžer prodaje:</div>
                        <span class="mb-2 mt-2"> Aleksa Boškić </span>
                        <span> Tel: 062-127-41-12 </span>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="basic-title">E-mail: grishoeskv@gmail.com</div>
                        <span class="mb-2 mt-2"> GRISHOES d.o.o </span>
                        <span> Kraljevo, Lađevci </span>
                    </div>
                </section>
            </div>
            <div class="text-center copyright">
                © Grisport d.o.o, Lađevci, Kraljevo
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: "Shoes",
  methods: {
    scroll() {
      const element = document.getElementById('footer');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homepage {
  object-fit: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow-x: hidden;
}
#homepage-content {
  position: relative;
}
.navigation-container {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: lighter;
  top: 0;
  color: whitesmoke !important;
}
.nav-item {
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  color: whitesmoke !important;
}
.navbar-collapse {
  justify-content: flex-end;
}
.navbar {
  min-height: 75px;
  background-color: #5c4209;
}
@media screen and (min-width: 992px) {
  .nav-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 992px) {
  .navbar-collapse {
    justify-content: center;
    margin-left: 1vw;
  }
  .nav-item {
    padding: 0.2rem 1.3vw;
  }
}
.navbar-toggler {
  justify-content: center;
  margin-left: 1vw;
  margin-bottom: 12px;
  color: whitesmoke;
}
.full-logo {
  width: 172px;
  position: absolute;
  margin-left: 7.292vw;
  z-index: 1;
}
.foodly-logo {
  position: absolute;
  margin: auto;
  padding-top: 10px;
  width: 172px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
}

.full-logo:hover {
  cursor: pointer;
}

.foodly-logo:hover {
  cursor: pointer;
}
img {
  image-rendering: crisp-edges;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

a:hover {
  cursor: pointer;
}

img::selection {
  background-color: transparent;
}

img::-moz-selection {
  background-color: transparent;
}

img {
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  -ms-user-select: none;
  user-select: none;

  /*You just need this if you are only concerned with android and not desktop browsers.*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
footer {
  margin-top: auto;
  background-color: #5c4209;
}

footer .copyright {
  background-color: #5c4209;
}

.footer-info {
  justify-content: space-between;
}
.article-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2vw;
}
.article-card{
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.10);
    border-radius: 15px;
    border-width: 0px;
    background-color: #5c4209;
}

.article-card .card-img-top-container{
    border-radius: 15px 15px 0px 0px;
    height: 207px;
    
    overflow: hidden;
}

.article-card .card-text{
    height: 72px;
}

.article-card .card-title{
    font-size: 20px;
}
.article-card .card-img-top{
    object-fit: cover;
    transition: .5s transform;
}

.article-card .card-img-top:hover{
    transform: scale(1.1);
}
.homepage-body {
  padding-left: 7.292vw;
  padding-right: 7.292vw;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: lighter;
}
</style>
