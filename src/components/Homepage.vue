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
                                    <a class="nav-link mt-1 py-0" @click="showShoes" aria-current="page">Obuća</a>
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
                <div class="company-info mb-3">
                    <div class="company-details-container d-flex flex-column me-5">
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <img src="../assets/homepage-description/eco.png" alt="Eco picture"/>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <span>
                                Grisport održava najstrože standarde ekološke održivosti
                                pri izboru sirovina. Štaviše, fotonaponski sistem
                                na fabričkom krovu, koji se prostire na približno 15.000 m2,
                                isporučuje 70% snage potrebne za proizvodnju (što je
                                oko 850.000 kW/h godišnje).
                            </span>
                        </div>
                    </div>
                    <div class="company-details-container d-flex flex-column me-5">
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <img src="../assets/homepage-description/italian-company.png" alt="Italian company picture"/>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <span>
                                Italijanska kompanija od 1977. Grisport obuća potiče iz
                                italijanskog dizajna, važnog lanca proizvodnje,
                                pažnje na detalje i proizvodne tehnologije koja se
                                ogleda u ponudi udobne i efikasne obuće sa
                                originalnim stilom.
                            </span>
                        </div>
                    </div>
                    <div class="company-details-container d-flex flex-column me-5">
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <img src="../assets/homepage-description/responsibility.png" alt="Responsibility picture"/>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <span>
                                Grisport je izradio Povelju o ljudskim odgovornostima, ili
                                Etički kodeks, kako bi se osiguralo da je kompanija posvećena
                                poštovanju prava, rada i dostojanstva uključenih ljudi
                                na svim nivoima i u svim oblastima proizvodnje naših proizvoda.
                            </span>
                        </div>
                    </div>
                    <div class="company-details-container d-flex flex-column">
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <img src="../assets/homepage-description/traceability.png" alt="Traceability picture"/>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center">
                            <span>
                                Grisport je implementirao efikasan sistem sledljivosti koji
                                omogućava da pratimo svaki korak u proizvodnom procesu,
                                tako da uvek znamo koji su materijali korišćeni.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <p class="description">
                        O nama<br /><br />
                        Kompanija GRISHOES, Kraljevo, je ovlašćeni zastupnik kompanije
                        GRISPORT, Italija, koja je jedna od najvećh i najkvalitetnijih
                        proizvođača specijalizovane HTZ i military obuće u Evropi. Nadamo se
                        da će vaša renomirana kompanija prepoznati izuzetan kvalitet i
                        dizajn ove obuće koja se proizvodi u EU i poseduje sve neophodne
                        sertifikate što se tiče kvaliteta i bezbednosti, takođe izdate od
                        ovlašćene agencije za sertifikate MADE IN EU. Zamolili bi Vas da nam
                        zakažete sastanak na kome bi vam prezentovali uzorke.
                    </p>
                    <img src="../assets/homepage-description/banner.jpg" alt="Banner picture" class="banner ms-2"/>
                </div>
            </div>
        </div>
        <footer class="text-white" id="footer">
            <div class="container p-4 pb-0 d-none d-md-block">
                <section class="footer-info d-flex flex-row mb-4">
                    <div class="d-flex flex-column text">
                        <div class="basic-title">Vlasnik:</div>
                        <span class="mb-2 mt-2"> Bojan Bajagić </span>
                        <span> Tel: 063-261-831 </span>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="basic-title">E-mail: grishoeskv@gmail.com</div>
                        <span class="mb-2 mt-2"> GRISHOES d.o.o </span>
                        <span> Kraljevo, Lađevci </span>
                    </div>
                </section>
            </div>
            <div class="container small-info pt-4 d-md-none">
                <section class="footer-small-info d-flex flex-column mb-4">
                        <div class="basic-title">Vlasnik:</div>
                        <span class="mb-2 mt-2"> Bojan Bajagić </span>
                        <span> Tel: 063-261-831 </span>
                        <div class="basic-title mt-2">E-mail: grishoeskv@gmail.com</div>
                </section>
            </div>
            <div class="text-center copyright">
                © Grishoes d.o.o, Lađevci, Kraljevo
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: "Homepage",
  methods: {
    scroll() {
      const element = document.getElementById('footer');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    showShoes(){
        this.$router.push('obuca');
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
.footer-small-info {
  justify-content: flex-start;
}
.small-info{
    margin-left: 7.92vw !important;
    padding-left: 0px !important;
}
.description {
  display: flex;
  font-size: 24px;
}
.banner {
  width: 44.97vw;
  height: 43vw;
}
.company-info {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}

.company-details-container {
  height: auto;
  width: 100vw;
  flex-shrink: 2;
  margin-left: 25px;
}
@media screen and (max-width: 1090px) {
  .company-details-container {
    margin-left: 0;
  }

  .banner {
    width: 0vw;
    height: 0vw;
    display: none;
  }
}

@media screen and (max-width: 840px) {
  .company-info {
    flex-direction: column !important;
  }

}

@media screen and (max-width: 1200px) {
  .company-details-container {
    width: 100%;
  }
}
.homepage-body {
  padding-left: 7.292vw;
  padding-right: 7.292vw;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: lighter;
}
</style>
