<template>
  <div id="homepage">
    <div id="homepage-content">
        <div class="container-fluid navigation-container px-0">
            <div class="container-fluid d-none d-lg-block px-0">
                <img src="../assets/full-logo.png" alt="Brand logo" class="full-logo pt-2">
            </div>
            <div class="container d-lg-none px-0">
                <img src="../assets/full-logo.png" alt="Brand logo" class="foodly-logo">
            </div>
            <nav class="navbar navbar-expand-lg reverse-row">
                <div class="container-fluid px-0">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
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
                                <a class="nav-link mt-1 py-0" href="#" aria-current="page">Plaćanje</a>
                            </div>
                            </li>
                            <li class="nav-item">
                            <div class="nav-link-container">
                                <a class="nav-link mt-1 py-0" href="#" aria-current="page">Kontakt</a>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <p>
            O nama
            Kompanija GRISHOES, Kraljevo, je ovlašćeni zastupnik kompanije
            GRISPORT, Italija, koja je jedna od najvećh i najkvalitetnijih proizvođača specijalizovane HTZ i military obuće u Evropi.
            Nadamo se da će vaša renomirana kompanija prepoznati izuzetan kvalitet i dizajn ove obuće koja se proizvodi u EU i 
            poseduje sve neophodne sertifikate što se tiče kvaliteta i bezbednosti, takođe izdate od ovlašćene agencije za sertifikate MADE IN EU.
            Zamolili bi Vas da nam zakažete sastanak na kome bi vam prezentovali uzorke.U prilogu Vam dostavljamo elektronskikatalog sa cenama i uslovima kupovine robe.
        </p>
    </div>
    <footer class="text-white" id="footer">
        <div class="container p-4 pb-0">
          <section class="footer-info d-flex flex-row mb-4">
            <div class="d-flex flex-column text">
              <div class="basic-title">
                Vlasnik:
              </div>
              <span class="mb-2 mt-2">
                Bojan Bajagić
              </span>
              <span>
                Tel: 063-261-381
              </span>
            </div>
            <div class="d-flex flex-column ms-5">
              <div class="basic-title">
                Menadžer prodaje:
              </div>
              <span class="mb-2 mt-2">
                Aleksa Boškić
              </span>
              <span>
                Tel: 062-127-41-12
              </span>
            </div>
            <div class="d-flex flex-column">
              <div class="basic-title">
                E-mail: grishoeskv@gmail.com
              </div>
              <span class="mb-2 mt-2">
                GRISHOES d.o.o
              </span>
              <span>
                Kraljevo, Lađevci
              </span>
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
  name: 'Homepage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homepage{
    object-fit: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow-x: hidden;
}
#homepage-content{
    position: relative;
}
.navigation-container{
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: lighter;
    top:0;
    color: whitesmoke !important;;
}
.nav-item {
    padding-left: 0.8vw;
    padding-right: 0.8vw;
    color: whitesmoke !important;
}
.navbar-collapse{
    justify-content: flex-end;
}
.navbar{
    min-height: 75px;
    background-color: #5C4209;
}
@media screen and (min-width: 992px){
    .nav-link-container{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 992px) {
    .navbar-collapse{
        justify-content: center;
        margin-left: 7.292vw;
    }
    .nav-item{
        padding: 0.2rem 1.3vw ;
    }
}
.navbar-toggler{
    justify-content: center;
    margin-left: 7.292vw;
    margin-bottom: 12px;
}
.full-logo{
    width: 172px;
    position: absolute;
    margin-left: 7.292vw;
    z-index: 1;
}
.foodly-logo{
    position: absolute;
    margin:auto;
    padding-top: 10px;
    width: 100px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
}

.full-logo:hover{
    cursor: pointer;
}

.foodly-logo:hover{
    cursor: pointer;
}
img{
    image-rendering: crisp-edges;
}

a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
}

a:hover {
    cursor: pointer;
}

img::selection {
    background-color:transparent;
} 

img::-moz-selection{
    background-color:transparent;
}

img{        
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;

    /*You just need this if you are only concerned with android and not desktop browsers.*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
footer{
    margin-top: auto;
    background-color: #5C4209;
}

footer .copyright{
    background-color: #5C4209;
}

.footer-info{
    justify-content: space-between;
}
</style>
