<template>
    <div id="homepage">
        <div id="homepage-content">
            <div class="container-fluid navigation-container px-0">
                <div class="container-fluid d-none d-lg-block px-0">
                <img src="../assets/full-logo.png" alt="Brand logo" @click="showHomepage" class="full-logo pt-2"/>
                </div>
                <div class="container d-lg-none px-0">
                <img src="../assets/full-logo.png" alt="Brand logo" @click="showHomepage" class="foodly-logo pt-2"/>
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
                                    <a class="nav-link mt-1 py-0" @click="showHomepage" aria-current="page">Početna</a>
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
                <div class="mt-4">
                    <button type="button" class="btn btn-light shadow-none button-style" @click="showSizeTable">
                        <img v-if="!showTable" src="../assets/arrow16.png" class="mb-2" alt="Arrow">
                        <img v-if="showTable" src="../assets/arrow-down.png" class="mb-2" alt="Arrow">
                        <span> Tabela veličina</span>
                    </button>
                    <table class="sizeTable" v-if="showTable">
                        <tr>
                            <td>EUR</td>
                            <td>35</td>
                            <td>36</td>
                            <td>37</td>
                            <td>38</td>
                            <td>39</td>
                            <td>40</td>
                            <td>41</td>
                            <td>42</td>
                            <td>43</td>
                            <td>44</td>
                            <td>45</td>
                            <td>46</td>
                            <td>47</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Dužina u MM</td>
                            <td>234</td>
                            <td>240</td>
                            <td>247</td>
                            <td>254</td>
                            <td>260</td>
                            <td>267</td>
                            <td>273</td>
                            <td>280</td>
                            <td>287</td>
                            <td>293</td>
                            <td>300</td>
                            <td>306</td>
                            <td>313</td>
                            <td>320</td>
                        </tr>
                    </table>
                    <br>
                    <button type="button" class="btn btn-light shadow-none button-style" @click="showLabels">
                        <img v-if="!showLabel" src="../assets/arrow16.png" alt="Arrow" class="mb-2">
                        <img v-if="showLabel" src="../assets/arrow-down.png" class="mb-2" alt="Arrow">
                        <span> Stepen zaštite obuće</span>
                    </button>
                    <div v-if="showLabel" class="protection">
                        <h4>STEPEN ZAŠTITE HTZ OBUĆE</h4>
                            •   S1 - Pored osnovne zaštite nožnih prstiju pomoću zaštitne kape, S1 osigurava da obuća ima antistatičku zaštitu, otporna je na ulje i apsorbuje energiju u peti.<br>
                            •   S2 - Ima istu zaštitu kao i S1, plus dodatnu zaštitu koja sprečava prodor vode i absorciju vode u gornjem delu.<br>
                            •	S3 - Obuhvata iste nivoe zaštite kao i S2, plus zaštitu od probijanja oštrog predmeta odozdo pomoću zaštitnog lista u đonu.<br><br>
                        <h4>OZNAKE</h4>
                        A - Antistatične osobine<br>
                        E - Apsorber energije u prednjem delu<br>
                        P - Đon otporan na probijanje<br>
                        AN - Zaštita zgloba<br>
                        WRU - Vododbojno gornjište<br>
                        WR - Vodonepropusna obuća<br>
                        HRO - Otpornost pri kraćim kontaktima sa toplim površinama<br>
                        HI - Otpornost pri dužim kontaktima sa toplim površinama<br>
                        CI - Zaštita od hladnoće<br>
                        M - Metatarzalna zaštita<br>
                        FO - Otpornost đona na ugljovodonike<br>
                        ESD - Otpornost na elektrostatičko pražnjenje<br>
                        SRA - Protivkliznost đona na keramici po kojoj se nalazi razblaženi deterdžent<br>
                        SRB - Protivkliznost đona na čeliku na kome se nalazi glikol<br>
                        SRC - Protivkliznost đona SRA+SRB<br>
                    </div>
                    <br>
                    <h3><b>SVI MODELI IMAJU GARANCIJU 2 GODINE, OSIM NA MEHANIČKA I FIZIČKA OŠTEĆENJA.</b></h3>
                    <div class="shoe-categories justify-content-between">
                        <button type="button" class="btn shadow-none shoes-type me-2" @click="showHTZShoes">
                            <span v-if="!showMilitary"><u>HTZ obuća</u></span>
                            <span v-if="showMilitary">HTZ obuća</span>
                        </button>
                        <button type="button" class="btn shadow-none shoes-type ms-2" @click="showMilitaryShoes">
                            <span v-if="showMilitary"><u>Military obuća</u></span>
                            <span v-if="!showMilitary">Military obuća</span>
                        </button>
                    </div>
                    <div class="article-container mt-2">
                        <template v-if="!showMilitary">
                        <div class="article-card d-flex flex-column">
                          <div class="card-img-top-container">
                              <img class="card-img-top img-fluid" src="../assets/Shoes/image001.png" alt="Article image">
                          </div>
                          <div class="card-body">
                              <div class="d-flex justify-content-between">
                                  <h5 class="card-title fw-bold mt-3">ASIAGO</h5>
                              </div>
                              <h7 class="card-title fw-bold mt-3">CRNA</h7>
                              <p class="card-text text-wrap">
                                CAT: S3 HRO HI SRC <br>
                                ĐON: 2022 RUBBERUMA+POLIURETAN 
                                ČELIČNA PLOČA, 
                                ČELIČNA KAPA ZA PRSTE
                                POLIURETANSKI VRH  
                              </p>
                              <span>Cena(VP): 6,374.00din bez PDV-a</span>
                          </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image003.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">CORTINA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: 2022 GUMA+POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image005.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">CORTINA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: 2022 GUMA+POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image007.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ISCHIA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TAMNO PLAVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: 2022 MONO POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 5,472.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image009.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ISCHIA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/CRVENA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: 2022 MONO POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 5,472.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image011.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">STROMBOLI</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI WR SRC <br>
                                  ĐON: 2022 GUMA+POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 9,273.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image013.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">PORDOI</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM<br>  
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image015.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">PORDOI</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">LONTRA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image017.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MARMOLADA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: HARD WORK VIBRAM POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 7,065.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image019.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MARMOLADA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">LONTRA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: HARD WORK VIBRAM POLIURETAN<br> 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena(VP): 7,065.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image021.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">TRENTO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: HAMMER POLIURETAN DVOSTRUKE GUSTINE + POLIURETAN<br> 
                                  NEMETALNA PLOČA, 
                                  POLIMERNA KAPA ZA PRSTE
                                </p>
                                <span>Cena(VP): 6,604.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image023.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ADRIA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">MILITARY</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 7,180.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image025.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MISANO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SIVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1 + P SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 6,547.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image027.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">VESUVIO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO CI WR HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  POLIMERNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 10,464.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image029.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">VALSUGANA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO WR HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM<br>
                                  NEMETALNA PLOČA, 
                                  POLIMERNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 8,025.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image031.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MARANELLO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 7,276.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image033.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MUGELLO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 7,008.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image035.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">IMOLA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">NERO</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 8,678.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image037.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">CAPRI</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">ANTHRACITE</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1 + P SRC <br>
                                  ĐON: COMPACT MONO PU<br> 
                                  NEMETALNA PLOČA,
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 4,934.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image039.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">BASSANO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 5,841.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image041.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">BASSANO</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">NERO</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 5,990.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image043.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MAROSTICA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 5,971.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image045.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MAROSTICA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 6,124.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image047.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">CAPRERA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TAMNO BEŽ</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC <br>
                                  SOLE : 2022 RUBBERUMA+POLIURETAN<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                </p>
                                <span>Cena(VP): 5,049.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image049.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ELBA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TORBA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P <br>
                                  ĐON: POLIURETAN DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 5,088.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image051.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">MONZA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TAMNO PLAVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC <br>
                                  ĐON: COMPACT POLIURETAN + POLIURETAN<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                </p>
                                <span>Cena(VP): 5,433.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image053.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">GARDA</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM<br> 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                </p>
                                <span>Cena(VP): 7,392.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image055.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">WIND</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/NARANDŽASTA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA<br> 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE  
                                </p>
                                <span>Cena(VP): 6,796.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image057.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ICEBERG</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SIVA/LIME</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA<br> 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 6,950.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image059.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">BREEZE</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/NARANDŽASTA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA<br>
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 6,969.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image061.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SPRINT</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/BELA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC ESD(CLASS1) <br>
                                  ĐON: POLIURETAN + GUMA + ESD<br> 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 7,065.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image063.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">RUSH</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/BELA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC ESD(CLASS1)<br>
                                  ĐON: POLIURETAN + GUMA + ESD<br> 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 7,776.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image065.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">HERCULES</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI CI WR SRC <br>
                                  ĐON: RANGER VIBRAM ZAŠTITA<br> 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE
                                </p>
                                <span>Cena(VP): 14,860.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image067.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">POSEIDON</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SIVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI CI WR SRC <br>
                                  ĐON: RANGER VIBRAM ZAŠTITA<br> 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 12,729.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image069.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SPEED</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SVETLO PLAVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC <br>
                                  ĐON: POLIURETAN DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ALUMINIJUMSKA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 6,566.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image071.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">FAST</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC ESD <br>
                                  ĐON: POLIURETAN DVOSTRUKE GUSTINE<br> 
                                  NEMETALNA PLOČA, 
                                  ALUMINIJUMSKA KAPA ZA PRSTE 
                                </p>
                                <span>Cena(VP): 6,624.00din bez PDV-a</span>
                            </div>
                        </div>
                        </template>
                        <template v-if="showMilitary">
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military001.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11339C62KE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">CAI NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ.O2 HRO HI CI WR FO SRC 
                                    </p>
                                    <span>Cena(VP): 7,956.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military003.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11339D48E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 7,140.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military005.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11407D73KE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAC NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 HRO HI CI WR FO SRC  
                                    </p>
                                    <span>Cena(VP): 8,833.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military007.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11455DV18G</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">  
                                    </p>
                                    <span>Cena(VP): 8,792.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military009.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11473D38KE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAC NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ.O2 HRO HI FO CI WR SRC  
                                    </p>
                                    <span>Cena(VP): 10,383.60din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military011.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11483M19KE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSC NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. OBE WRU FO HRO HI CI WR SRC  
                                    </p>
                                    <span>Cena(VP): 9,016.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military013.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11501D1E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. OBE HRO HI FO SRC  
                                    </p>
                                    <span>Cena(VP): 8,445.60din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military015.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11637M13</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSC NERO</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 8,078.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military017.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11637SV6</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA COYOTE</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 8,160.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military019.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">11953S11</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA 1284 DESERTO</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 8,384.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military021.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13223DV2G</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 7,568.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military023.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13431D19KE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAC MARRONE</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 HRO HI CI WR FO SRC 
                                    </p>
                                    <span>Cena(VP): 7,915.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military025.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13431D20KE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAC NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 HRO HI CI WR FO SRC
                                    </p>
                                    <span>Cena(VP): 7,915.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military027.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13801D3T</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAI NERO</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 8,976.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military029.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13801S23</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA 1284 DESERTO</h7>
                                    <p class="card-text text-wrap">
                                      
                                    </p>
                                    <span>Cena(VP): 8,058.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military031.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13815M3G</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSR NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 8,894.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military033.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13817L49</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">LR9 BACK BLACK</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 10,016.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military035.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13817M48T</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSI NERO</h7>
                                    <p class="card-text text-wrap">  
                                    </p>
                                    <span>Cena(VP): 10,036.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military037.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13821M3Y</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSI NERO</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 9,710.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military039.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13821S4</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA 1284 DESERTO</h7>
                                    <p class="card-text text-wrap">  
                                    </p>
                                    <span>Cena(VP): 7,854.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military041.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13831M5</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSI NERO</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 8,384.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military043.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13831S3</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA 1284 DESERTO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 8,221.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military045.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13831S4</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SAP COYOTE</h7>
                                    <p class="card-text text-wrap">  
                                    </p>
                                    <span>Cena(VP): 8,221.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military047.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13833D2WT</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAI NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 10,852.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military049.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13841O1T</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">OID NERO</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 9,996.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military051.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13931P5E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">PRB COLORE TRUE BLACK</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O1 FO SRC 
                                    </p>
                                    <span>Cena(VP): 6,793.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military053.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13933L100tE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">L4G NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 CI WR FO SRC
                                    </p>
                                    <span>Cena(VP): 9,098.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military055.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">14001C17G</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">CAL NERO</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 7,323.60din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military057.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">14003D50G</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAS NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 7,119.60din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military059.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">14005o49G</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">OLI NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 7,731.60din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military061.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">40424S1</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA DESERTO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 5,548.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military063.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">40426S1</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA DESERTO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 5,406.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military065.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">40428S68V</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA DESERTO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 5,773.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military067.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">42003P248</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">PMA NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 6,566.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military069.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">42027P218V</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">PIU NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 7,099.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military071.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">42820S74E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SAC NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 FO SRC ESD
                                    </p>
                                    <span>Cena(VP): 6,364.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military073.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">42824A108E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">ASP 136 NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O1 FO SRC ESD
                                    </p>
                                    <span>Cena(VP): 5,304.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military075.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7013E52E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">ELR 6 NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O1 FO HRO HI SRC
                                    </p>
                                    <span>Cena(VP): 6,120.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military077.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7019DV4t</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 9,730.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military079.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7039CD6tE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAI NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O3 FO HRO HI CI WR SRC
                                    </p>
                                    <span>Cena(VP): 13,810.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military081.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7039S5E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA 1284 DESERTO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 FO HRO HI SRC
                                    </p>
                                    <span>Cena(VP): 12,464.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military083.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7041CD2WTE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAI NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. 7041 O3 FO HRO HI CI WR SRC
                                    </p>
                                    <span>Cena(VP): 11,995.20din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military085.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7055M5tE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MSC NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 FO HRO HI CI WR SRC
                                    </p>
                                    <span>Cena(VP): 8,812.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military087.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7055S6tE</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCY 813 MIELLE</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O2 FO HRO HI CI WR SRC 
                                    </p>
                                    <span>Cena(VP): 8,690.40din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military089.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7057M1EY</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MIS NERO</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 11,628.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military091.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7057NV2Y</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">NAB GIAL</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 12,280.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military093.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">7105D1WT</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAI NERO</h7>
                                    <p class="card-text text-wrap"> 
                                    </p>
                                    <span>Cena(VP): 13,545.60din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military095.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">76836D3E</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">
                                    CALZ. O1 FO SRC 
                                    </p>
                                    <span>Cena(VP): 7,996.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military097.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">90120D3</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">DAK NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 6,670.80din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military099.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13847S1</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">SCA MIELLE</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 8,262.00din bez PDV-a</span>
                                </div>
                            </div>
                            <div class="article-card d-flex flex-column">
                                <div class="card-img-top-container">
                                    <img class="card-img-top img-fluid" src="../assets/Shoes/military101.png" alt="Article image">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h5 class="card-title fw-bold mt-3">13847M2</h5>
                                    </div>
                                    <h7 class="card-title fw-bold mt-3">MIS NERO</h7>
                                    <p class="card-text text-wrap">
                                    </p>
                                    <span>Cena(VP): 8,221.20din bez PDV-a</span>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-white" id="footer">
            <div class="container p-4 pb-0 d-none d-md-block">
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
            <div class="container small-info pt-4 d-md-none">
                <section class="footer-small-info d-flex flex-column mb-4">
                        <div class="basic-title">Vlasnik:</div>
                        <span class="mb-2 mt-2"> Bojan Bajagić </span>
                        <span> Tel: 063-261-381 </span>
                        <div class="basic-title mt-2">Menadžer prodaje:</div>
                        <span class="mb-2 mt-2"> Aleksa Boškić </span>
                        <span> Tel: 062-127-41-12 </span>
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
  name: "Shoes",
  data: function(){
    return {
        showTable: false,
        showLabel: false,
        showMilitary: false    
    }
  },
  methods: {
    scroll() {
      const element = document.getElementById('footer');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    showSizeTable(){
        if(this.showTable){
            this.showTable = false;
        }else{
            this.showTable = true;
        }
    },
    showLabels(){
        if(this.showLabel){
            this.showLabel = false;
        }else{
            this.showLabel = true;
        }
    },
    showMilitaryShoes(){
        this.showMilitary = true;
    },
    showHTZShoes(){
        this.showMilitary = false;
    },
    showHomepage(){
        this.$router.push({name: 'Home'});
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
.article-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
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
    height: 230px;
    overflow: hidden;
    background-color: white;
}

.article-card .card-text{
    height: 72px;
    font-size: 12px;
}

.article-card .card-title{
    font-size: 20px;
}
.article-card .img-fluid{
    height: 230px;
}

.article-card .card-img-top:hover{
    transform: scale(1.1);
}

.article-card:hover{
    transform: scale(1.1);
    font-size: 16px;
}

.homepage-body {
  padding-left: 7.292vw;
  padding-right: 7.292vw;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: lighter;
}
.button-style{
    border: none;
    background: none;
    color: whitesmoke;
    font-size: 24px;
}
.button-style:hover{
    border: none;
    background: none;
    color: whitesmoke;
    font-size: 24px;
}
.button-style:focus{
    border: none;
    background: none;
    color: whitesmoke;
    font-size: 24px;
}
table,tr,td{
    border: 2px solid whitesmoke;
    padding: 5px;
    text-align: center;
}
td{
    height: 3vw;
    width: 3vw;
}
.sizeTable{
    margin-left: auto;
    margin-right: auto;
}
.protection{
    font-size: 20px;
}
.shoes-type{
    background-color: #5c4209;
    color: antiquewhite;
    width: 44vw;
    height: 15vw;
    font-size: 36px;
    border-radius: 15px;
}
.shoes-type:hover{
    background-color: #74530b;
}
.shoe-categories {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  width: 100%;
  flex-direction: row;
}

@media screen and (max-width: 840px) {
  .shoe-categories {
    flex-direction: column !important;
  }
  .shoes-type{
      width: 100%;
      margin-bottom: 1rem;
      margin-right: 0px !important;
      margin-left: 0px !important;
  }
}
@media screen and (max-width: 425px) {
  .shoe-categories {
    flex-direction: column !important;
  }
  .shoes-type{
      height: 20vw;
  }
}
</style>
