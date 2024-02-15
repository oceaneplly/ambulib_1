'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Ambulib - Front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Saisissez un texte"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Démarrage</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Vue d&#x27;ensemble
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dépendances
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Propriétés
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AmbulancePageModule.html" data-type="entity-link" >AmbulancePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AmbulancePageModule-32495952b75a25756e9dccc5c4c0cef1cf41c03831f49b1fa6e829b17e70f506d873db5766c56efa48752e175fcd777508aa42364a0677df6898278219478b02"' : 'data-bs-target="#xs-components-links-module-AmbulancePageModule-32495952b75a25756e9dccc5c4c0cef1cf41c03831f49b1fa6e829b17e70f506d873db5766c56efa48752e175fcd777508aa42364a0677df6898278219478b02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AmbulancePageModule-32495952b75a25756e9dccc5c4c0cef1cf41c03831f49b1fa6e829b17e70f506d873db5766c56efa48752e175fcd777508aa42364a0677df6898278219478b02"' :
                                            'id="xs-components-links-module-AmbulancePageModule-32495952b75a25756e9dccc5c4c0cef1cf41c03831f49b1fa6e829b17e70f506d873db5766c56efa48752e175fcd777508aa42364a0677df6898278219478b02"' }>
                                            <li class="link">
                                                <a href="components/AmbulancePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmbulancePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AmbulancePageRoutingModule.html" data-type="entity-link" >AmbulancePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' : 'data-bs-target="#xs-components-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' :
                                            'id="xs-components-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' :
                                        'id="xs-injectables-links-module-AppModule-c24b0a8a59dbc8ee26a1d686914a9fb799cabc60b4bf5127de86b0545fd2db4263001dfcd22522f021c63be1734c2dfbc161d30f3833f55161ea7be3ed0631b9"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartePageModule.html" data-type="entity-link" >CartePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CartePageModule-bc6b3bea97230c2d5540bc54a86c0099b9cc2a10c3b45393ee524bdc88024f02d1bb564927e61eaec9ab001cffeb7de5008926495240d362e22633c8b9bf2c5d"' : 'data-bs-target="#xs-components-links-module-CartePageModule-bc6b3bea97230c2d5540bc54a86c0099b9cc2a10c3b45393ee524bdc88024f02d1bb564927e61eaec9ab001cffeb7de5008926495240d362e22633c8b9bf2c5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CartePageModule-bc6b3bea97230c2d5540bc54a86c0099b9cc2a10c3b45393ee524bdc88024f02d1bb564927e61eaec9ab001cffeb7de5008926495240d362e22633c8b9bf2c5d"' :
                                            'id="xs-components-links-module-CartePageModule-bc6b3bea97230c2d5540bc54a86c0099b9cc2a10c3b45393ee524bdc88024f02d1bb564927e61eaec9ab001cffeb7de5008926495240d362e22633c8b9bf2c5d"' }>
                                            <li class="link">
                                                <a href="components/CartePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartePageRoutingModule.html" data-type="entity-link" >CartePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GestionReservationPageModule.html" data-type="entity-link" >GestionReservationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GestionReservationPageModule-779ec86722ad749e1d45ecb962148da7afb2744abea5a349b70f4de0fbb87f28a456a3c6898599eb443c43162858d54eadeaf81df504d1f29d655852db65b663"' : 'data-bs-target="#xs-components-links-module-GestionReservationPageModule-779ec86722ad749e1d45ecb962148da7afb2744abea5a349b70f4de0fbb87f28a456a3c6898599eb443c43162858d54eadeaf81df504d1f29d655852db65b663"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GestionReservationPageModule-779ec86722ad749e1d45ecb962148da7afb2744abea5a349b70f4de0fbb87f28a456a3c6898599eb443c43162858d54eadeaf81df504d1f29d655852db65b663"' :
                                            'id="xs-components-links-module-GestionReservationPageModule-779ec86722ad749e1d45ecb962148da7afb2744abea5a349b70f4de0fbb87f28a456a3c6898599eb443c43162858d54eadeaf81df504d1f29d655852db65b663"' }>
                                            <li class="link">
                                                <a href="components/GestionReservationPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GestionReservationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GestionReservationPageRoutingModule.html" data-type="entity-link" >GestionReservationPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistoAmbulancePageModule.html" data-type="entity-link" >HistoAmbulancePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HistoAmbulancePageModule-dc5227891a4b3761b00d3f4a17406d1e7699d8961f4082d6e243b2415536a320107eca6628742999f743a5067979694dbb627b6d121ee04ac1fb37c6926a81d2"' : 'data-bs-target="#xs-components-links-module-HistoAmbulancePageModule-dc5227891a4b3761b00d3f4a17406d1e7699d8961f4082d6e243b2415536a320107eca6628742999f743a5067979694dbb627b6d121ee04ac1fb37c6926a81d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoAmbulancePageModule-dc5227891a4b3761b00d3f4a17406d1e7699d8961f4082d6e243b2415536a320107eca6628742999f743a5067979694dbb627b6d121ee04ac1fb37c6926a81d2"' :
                                            'id="xs-components-links-module-HistoAmbulancePageModule-dc5227891a4b3761b00d3f4a17406d1e7699d8961f4082d6e243b2415536a320107eca6628742999f743a5067979694dbb627b6d121ee04ac1fb37c6926a81d2"' }>
                                            <li class="link">
                                                <a href="components/HistoAmbulancePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoAmbulancePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoAmbulancePageRoutingModule.html" data-type="entity-link" >HistoAmbulancePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HistoriquePageModule.html" data-type="entity-link" >HistoriquePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HistoriquePageModule-b3413a13417354e474bb7c5cb65b310580c535aa3061994aad3618f95fb2f59f18e8769cff250d8e219916460eddb958cae7c233a4fa081202e31152e5ce5cda"' : 'data-bs-target="#xs-components-links-module-HistoriquePageModule-b3413a13417354e474bb7c5cb65b310580c535aa3061994aad3618f95fb2f59f18e8769cff250d8e219916460eddb958cae7c233a4fa081202e31152e5ce5cda"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoriquePageModule-b3413a13417354e474bb7c5cb65b310580c535aa3061994aad3618f95fb2f59f18e8769cff250d8e219916460eddb958cae7c233a4fa081202e31152e5ce5cda"' :
                                            'id="xs-components-links-module-HistoriquePageModule-b3413a13417354e474bb7c5cb65b310580c535aa3061994aad3618f95fb2f59f18e8769cff250d8e219916460eddb958cae7c233a4fa081202e31152e5ce5cda"' }>
                                            <li class="link">
                                                <a href="components/HistoriquePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoriquePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoriquePageRoutingModule.html" data-type="entity-link" >HistoriquePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-bs-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InscriptionPageModule.html" data-type="entity-link" >InscriptionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-InscriptionPageModule-179c48f5c308cd6f2eddb290c1b7fc6f4886f4b71d78287afc30573abd3c408c36645e3ca0caebcc648ce0537a26e80e83356fbd96cc90da7c0c0743b7b19282"' : 'data-bs-target="#xs-components-links-module-InscriptionPageModule-179c48f5c308cd6f2eddb290c1b7fc6f4886f4b71d78287afc30573abd3c408c36645e3ca0caebcc648ce0537a26e80e83356fbd96cc90da7c0c0743b7b19282"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InscriptionPageModule-179c48f5c308cd6f2eddb290c1b7fc6f4886f4b71d78287afc30573abd3c408c36645e3ca0caebcc648ce0537a26e80e83356fbd96cc90da7c0c0743b7b19282"' :
                                            'id="xs-components-links-module-InscriptionPageModule-179c48f5c308cd6f2eddb290c1b7fc6f4886f4b71d78287afc30573abd3c408c36645e3ca0caebcc648ce0537a26e80e83356fbd96cc90da7c0c0743b7b19282"' }>
                                            <li class="link">
                                                <a href="components/InscriptionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscriptionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InscriptionPageRoutingModule.html" data-type="entity-link" >InscriptionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParametresAmbuPageModule.html" data-type="entity-link" >ParametresAmbuPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ParametresAmbuPageModule-3fc5d7e7e09c5f7c2a0b74439b119daee666f39813a647b1b5d81c6b6fd6807dd74f794e91b5abf9501bbe2e7677c78850bc8caf3b90f8d978e5f94fbe90ded3"' : 'data-bs-target="#xs-components-links-module-ParametresAmbuPageModule-3fc5d7e7e09c5f7c2a0b74439b119daee666f39813a647b1b5d81c6b6fd6807dd74f794e91b5abf9501bbe2e7677c78850bc8caf3b90f8d978e5f94fbe90ded3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParametresAmbuPageModule-3fc5d7e7e09c5f7c2a0b74439b119daee666f39813a647b1b5d81c6b6fd6807dd74f794e91b5abf9501bbe2e7677c78850bc8caf3b90f8d978e5f94fbe90ded3"' :
                                            'id="xs-components-links-module-ParametresAmbuPageModule-3fc5d7e7e09c5f7c2a0b74439b119daee666f39813a647b1b5d81c6b6fd6807dd74f794e91b5abf9501bbe2e7677c78850bc8caf3b90f8d978e5f94fbe90ded3"' }>
                                            <li class="link">
                                                <a href="components/ParametresAmbuPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParametresAmbuPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParametresAmbuPageRoutingModule.html" data-type="entity-link" >ParametresAmbuPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParametresPageModule.html" data-type="entity-link" >ParametresPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ParametresPageModule-b906e5d7f72acdf1104b5097682c269010eee0db0f96d432c7d31be69ef50cc34230782fac978d779651e3617471a22634febd849d36dbf731e1314455ee2bd1"' : 'data-bs-target="#xs-components-links-module-ParametresPageModule-b906e5d7f72acdf1104b5097682c269010eee0db0f96d432c7d31be69ef50cc34230782fac978d779651e3617471a22634febd849d36dbf731e1314455ee2bd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParametresPageModule-b906e5d7f72acdf1104b5097682c269010eee0db0f96d432c7d31be69ef50cc34230782fac978d779651e3617471a22634febd849d36dbf731e1314455ee2bd1"' :
                                            'id="xs-components-links-module-ParametresPageModule-b906e5d7f72acdf1104b5097682c269010eee0db0f96d432c7d31be69ef50cc34230782fac978d779651e3617471a22634febd849d36dbf731e1314455ee2bd1"' }>
                                            <li class="link">
                                                <a href="components/ParametresPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParametresPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParametresPageRoutingModule.html" data-type="entity-link" >ParametresPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ParticulierPageModule.html" data-type="entity-link" >ParticulierPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ParticulierPageModule-c438ba72fc4cb89307c08e04e903c1a008c23a4b65a8ec4e356f5c8886ce123251e161d44556fd503c591a7273a0bf89b9a00dc7b6c8e03e7f8b6640f7e0e401"' : 'data-bs-target="#xs-components-links-module-ParticulierPageModule-c438ba72fc4cb89307c08e04e903c1a008c23a4b65a8ec4e356f5c8886ce123251e161d44556fd503c591a7273a0bf89b9a00dc7b6c8e03e7f8b6640f7e0e401"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ParticulierPageModule-c438ba72fc4cb89307c08e04e903c1a008c23a4b65a8ec4e356f5c8886ce123251e161d44556fd503c591a7273a0bf89b9a00dc7b6c8e03e7f8b6640f7e0e401"' :
                                            'id="xs-components-links-module-ParticulierPageModule-c438ba72fc4cb89307c08e04e903c1a008c23a4b65a8ec4e356f5c8886ce123251e161d44556fd503c591a7273a0bf89b9a00dc7b6c8e03e7f8b6640f7e0e401"' }>
                                            <li class="link">
                                                <a href="components/ParticulierPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParticulierPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ParticulierPageRoutingModule.html" data-type="entity-link" >ParticulierPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReservationPageModule.html" data-type="entity-link" >ReservationPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ReservationPageModule-35a1df8460e89b0709ba18f0b3d850b1d2f6a252f5e386b07e2fa70ba4ecf81cce81ffa54d42c084083f7606259ac168a192072cc05bd85b1e45cbe2b882f2ca"' : 'data-bs-target="#xs-components-links-module-ReservationPageModule-35a1df8460e89b0709ba18f0b3d850b1d2f6a252f5e386b07e2fa70ba4ecf81cce81ffa54d42c084083f7606259ac168a192072cc05bd85b1e45cbe2b882f2ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReservationPageModule-35a1df8460e89b0709ba18f0b3d850b1d2f6a252f5e386b07e2fa70ba4ecf81cce81ffa54d42c084083f7606259ac168a192072cc05bd85b1e45cbe2b882f2ca"' :
                                            'id="xs-components-links-module-ReservationPageModule-35a1df8460e89b0709ba18f0b3d850b1d2f6a252f5e386b07e2fa70ba4ecf81cce81ffa54d42c084083f7606259ac168a192072cc05bd85b1e45cbe2b882f2ca"' }>
                                            <li class="link">
                                                <a href="components/ReservationPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReservationPageRoutingModule.html" data-type="entity-link" >ReservationPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Composants</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/TestComponent.html" data-type="entity-link" >TestComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EtablissementService.html" data-type="entity-link" >EtablissementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EtablissementService-1.html" data-type="entity-link" >EtablissementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfilService.html" data-type="entity-link" >ProfilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservationService.html" data-type="entity-link" >ReservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservationService-1.html" data-type="entity-link" >ReservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocieteService.html" data-type="entity-link" >SocieteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SocieteService-1.html" data-type="entity-link" >SocieteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilisateurService.html" data-type="entity-link" >UtilisateurService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilisateurService-1.html" data-type="entity-link" >UtilisateurService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Intercepteurs</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MyHttpInterceptor.html" data-type="entity-link" >MyHttpInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Divers</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Couverture de documentation</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation générée avec <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});