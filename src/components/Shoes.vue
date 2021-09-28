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
                        <img src="../assets/arrow16.png" class="button-image" alt="Arrow">
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
                        <img src="../assets/arrow16.png" alt="Arrow">
                        <span> Oznake</span>
                    </button>
                    <div v-if="showLabel">
                        <h4>STEPEN ZAŠTITE HTZ OBUĆE</h4>
                            •   S1 - Pored osnovne zaštite nožnih prstiju pomoću zaštitne kape, S1 osigurava da obuća ima antistatičku zaštitu, otporna je na ulje i apsorbuje energiju u peti.<br>
                            •   S2 - Ima istu zaštitu kao i S1, plus dodatnu zaštitu koja sprečava prodor vode i absorciju vode u gornjem delu.<br>
                            •	S3 - Obuhvata iste nivoe zaštite kao i S2, plus zaštitu od probijanja oštrog predmeta odozdo pomoću zaštitnog lista u đonu.<br>
                        <h4>SKRAĆENICE</h4>
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
                    <div class="article-container mt-2">
                        <div class="article-card d-flex flex-column">
                          <div class="card-img-top-container">
                              <img class="card-img-top img-fluid" src="../assets/Shoes/image001.png" alt="Article image">
                          </div>
                          <div class="card-body">
                              <div class="d-flex justify-content-between">
                                  <h5 class="card-title fw-bold mt-3">DAKAR VAR.16</h5>
                              </div>
                              <h7 class="card-title fw-bold mt-3">CRNA</h7>
                              <p class="card-text text-wrap">
                                CAT: S3 HRO HI SRC <br>
                                ĐON: 2022 RUBBERUMA+POLIURETAN 
                                ČELIČNA PLOČA, 
                                ČELIČNA KAPA ZA PRSTE
                                POLIURETANSKI VRH  
                              </p>
                              <span>Cena: 6,374.00din bez PDV-a</span>
                          </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image003.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.16</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: 2022 GUMA+POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena: 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image005.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.17</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: 2022 GUMA+POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image007.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.1</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TAMNO PLAVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: 2022 MONO POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena 5,472.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image009.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.6</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/CRVENA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: 2022 MONO POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena 5,472.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image011.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.16</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI WR SRC <br>
                                  ĐON: 2022 GUMA+POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena: 9,273.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image013.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.30</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM  
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena: 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image015.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.42</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">LONTRA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena: 6,662.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image017.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.30</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: HARD WORK VIBRAM POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena: 7,065.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image019.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.42</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">LONTRA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: HARD WORK VIBRAM POLIURETAN 
                                  ČELIČNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                  POLIURETANSKI VRH  
                                </p>
                                <span>Cena: 7,065.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image021.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.12</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: HAMMER POLIURETAN DVOSTRUKE GUSTINE + POLIURETAN 
                                  NEMETALNA PLOČA, 
                                  POLIMERNA KAPA ZA PRSTE
                                </p>
                                <span>Cena: 6,604.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image023.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.6</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">MILITARY</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 7,180.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image025.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.25</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SIVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1 + P SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 6,547.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image027.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.4</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO CI WR HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  POLIMERNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 10,464.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image029.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.8</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO WR HI SRC <br>
                                  ĐON: POLIURETAN + GUMA/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  POLIMERNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 8,025.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image031.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.26</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 7,276.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image033.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.26</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 7,008.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image035.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.1</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">NERO</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 8,678.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image037.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.7</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">ANTHRACITE</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1 + P SRC <br>
                                  ĐON: COMPACT MONO PU 
                                  NEMETALNA PLOČA,
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 4,934.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image039.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ALASKA VAR.7</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 5,841.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image041.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.10</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">NERO</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 5,990.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image043.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ALASKA VAR.7</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 5,971.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image045.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.10</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: COMPACT PU/PU DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 6,124.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image047.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.1</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TAMNO BEŽ</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC <br>
                                  SOLE : 2022 RUBBERUMA+POLIURETAN 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                </p>
                                <span>Cena: 5,049.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image049.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.35</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TORBA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P <br>
                                  ĐON: POLIURETAN DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 5,088.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image051.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">SCAMOSCIATO VAR.22</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">TAMNO PLAVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC <br>
                                  ĐON: COMPACT POLIURETAN + POLIURETAN 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                </p>
                                <span>Cena: 5,433.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image053.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.3</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">BRAON</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 SRC <br>
                                  ĐON: POLIURETAN + TERMOPLASTIČNI POLIURETAN/VIBRAM 
                                  NEMETALNA PLOČA, 
                                  ČELIČNA KAPA ZA PRSTE
                                </p>
                                <span>Cena: 7,392.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image055.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ANDROID VAR.4</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/NARANDŽASTA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE  
                                </p>
                                <span>Cena: 6,796.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image057.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">ELEMENT VAR.46</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SIVA/LIME</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 6,950.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image059.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">POLY VAR.17</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/NARANDŽASTA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC <br>
                                  ĐON: POLIURETAN + GUMA
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 6,969.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image061.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">POLY VAR.12</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/BELA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC ESD(CLASS1) <br>
                                  ĐON: POLIURETAN + GUMA + ESD 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 7,065.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image063.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">POLY VAR.12</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA/BELA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI SRC ESD(CLASS1)<br>
                                  ĐON: POLIURETAN + GUMA + ESD 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 7,776.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image065.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">FIORE VAR.1</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI CI WR SRC <br>
                                  ĐON: RANGER VIBRAM ZAŠTITA 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE
                                </p>
                                <span>Cena: 14,860.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image067.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DAKAR VAR.6</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SIVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S3 HRO HI CI WR SRC <br>
                                  ĐON: RANGER VIBRAM ZAŠTITA 
                                  NEMETALNA PLOČA, 
                                  FAJBERGLAS KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 12,729.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image069.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DIGITEX VAR.24</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">SVETLO PLAVA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC <br>
                                  ĐON: POLIURETAN DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ALUMINIJUMSKA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 6,566.00din bez PDV-a</span>
                            </div>
                        </div>
                        <div class="article-card d-flex flex-column">
                            <div class="card-img-top-container">
                                <img class="card-img-top img-fluid" src="../assets/Shoes/image071.png" alt="Article image">
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title fw-bold mt-3">DIGITEX VAR.17</h5>
                                </div>
                                <h7 class="card-title fw-bold mt-3">CRNA</h7>
                                <p class="card-text text-wrap">
                                  CAT: S1+P SRC ESD <br>
                                  ĐON: POLIURETAN DVOSTRUKE GUSTINE 
                                  NEMETALNA PLOČA, 
                                  ALUMINIJUMSKA KAPA ZA PRSTE 
                                </p>
                                <span>Cena: 6,624.00din bez PDV-a</span>
                            </div>
                        </div>
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
        showLabel: false    
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
}

.article-card .card-text{
    height: 72px;
    font-size: 12px;
}

.article-card .card-title{
    font-size: 20px;
}
.article-card .card-img-top{
    /*height: 20vw;*/
    object-fit: cover;
    transition: .5s transform;
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
.button-style .button-image:focus{
    rotate: 90;
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
</style>
