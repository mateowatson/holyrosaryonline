import { getMysteriesForCurrDay } from './utils';

let mysteryVersesMarkup = {
    joyful: [
        null,
        '<hro-localize>Luke 1:26-31</hro-localize>',
        '<hro-localize>Luke 1:39-45</hro-localize>',
        '<hro-localize>Luke 2:1-7</hro-localize>',
        '<hro-localize>Luke 2:25-32</hro-localize>',
        '<hro-localize>Luke 2:41-51</hro-localize>'
    ],
    luminous: [
        null,
        '<hro-localize>Matthew 3:13-16</hro-localize>',
        '<hro-localize>John 2:1-11</hro-localize>',
        '<hro-localize>Mark 1:14-15</hro-localize>',
        '<hro-localize>Matthew 17:1-2</hro-localize>',
        '<hro-localize>Matthew 26:26-28</hro-localize>'
    ],
    sorrowful: [
        null,
        '<hro-localize>Matthew 26:36-39</hro-localize>',
        '<hro-localize>Matthew 27:24-26</hro-localize>',
        '<hro-localize>Matthew 27:28-29</hro-localize>',
        '<hro-localize>Matthew 27:32</hro-localize>',
        '<hro-localize>Matthew 27:46-54</hro-localize>'
    ],
    glorious: [
        null,
        '<hro-localize>John 20:1-9</hro-localize>',
        '<hro-localize>Luke 24:44-53</hro-localize>',
        '<hro-localize>Acts 2:1-4</hro-localize>',
        '<hro-localize>From the Sermons of St. John of Damascus. Second on the Falling-asleep of Blessed Mary.</hro-localize>',
        '<hro-localize>Sermon of St. Peter Canisius, Priest On the Incomparable Virgin Mary, Mother of God</hro-localize>'
    ]
};

export default {
    settings: {
        mysteries: localStorage.getItem('mysteries') || getMysteriesForCurrDay(),
        language: localStorage.getItem('language') || 'EN',
        rosaryLanguage: localStorage.getItem('rosaryLanguage') || 'EN',
        rosaryColor: localStorage.getItem('rosaryColor') || '#f1e4c4',
        hideImages: localStorage.getItem('hideImages') === 'true' ? true : false,
        hidePrayers: localStorage.getItem('hidePrayers') === 'true' ? true : false,
        divineMercy: localStorage.getItem('divineMercy') === 'true' ? true : false,
    },
    localization: {
        ES: {
            "Holy Rosary Online": "Santo Rosario en Línea (Holy Rosary Online)",
            "Settings": "Configuración",
            "About": "Información",
            "Home": "Página Principal",
            "Reset": "Reinicie",
            "Next Prayer": "Adelante",
            "Previous": "Atrás",
            "Next": "Adelante",
            "Sign of the Cross": "La Señal de la Cruz",
            "Our Father": "Padre Nuestro",
            "Hail Mary": "Ave María",
            "Medallion, end of rosary": "Medallón, fin del rosario",
            "Language": "Idioma",
            "Mysteries": "Misterios",
            "By day": "Por día",
            "Joyful": "De gozos",
            "Luminous": "De luz",
            "Sorrowful": "De dolor",
            "Glorious": "De gloria",
            "Latin": "Latín",
            "Rosary Color": "Color del rosario",
            "Reset Color": "Use el color predeterminado",
            "Hide the prayer images.": "Esconda las pinturas de los misterios.",
            "Hide the words to the prayers. Click blank space to go to the next prayer.": "Esconda las palabras de las oraciones. Haga clíc en el espacio blanco para ir adelante.",
            "Pray the Divine Mercy Chaplet instead.": "Rece la Coronilla de la Divina Misericordia",
            "Enable Latin": "Rece en Latín",
            "Artwork Titles, Artist Names and Links": "Las obras de arte, los artistas, y vínculos",
            "Depictions of the joyful mysteries": "Pinturas de los misterios de gozo",
            "Depictions of the luminous mysteries": "Pinturas de los misterios de luz",
            "Depictions of the sorrowful mysteries": "Pinturas de los misterios de dolor",
            "Depictions of the glorious mysteries": "Pinturas de los misterios de gloria",
            "Artist": "Artista",
            "Source": "Fuente",
            "Annunciation": "La Anunciación",
            "Visitation": "La Visitación",
            "Nativity with the Annunciation to the Shepherds": "Natividad con el anuncio a los pastores",
            "Presentation of Jesus Christ at the Temple": "La Presentación de Jesucristo en el Templo",
            "Christ among the Doctors": "Cristo entre los doctores",
            "The Baptism of Christ": "El Bautismo de Cristo",
            "The Marriage Feast at Cana": "Bodas de Caná",
            "Sermon on the Mount": "Sermón de la Montaña",
            "Transfiguration": "La Transfiguración",
            "The Last Supper": "La Santa Cena",
            "The Agony in the Garden": "La Oración del Huerto",
            "The Scourging of Christ": "La Flagelación de Cristo",
            "Christ Crowned with Thorns": "La Coronación de Espinas",
            "Christ Carrying the Cross": "Cristo Camino del Calvario",
            "Christ Crucified": "Cristo crucificado",
            "The Resurrected Christ Appears to the Virgin": "Cristo Resucitado Apareciéndose a Su Madre",
            "The Ascension": "La Ascención",
            "Pentecost": "Pentecostés",
            "Assumption of the Virgin": "La Asunción de la Virgen",
            "Coronation of the Virgin": "La Asunción de la Virgen",
            "Virgin and Child with a Rosary": "Virgen del Rosario con el Niño",
            "Luke 1:26-31": "San Lucas 1, 26-31",
            "Luke 1:39-45": "San Lucas 1, 39-45",
            "Luke 2:1-7": "San Lucas 2, 1-7",
            "Luke 2:25-32": "San Lucas 2, 25-32",
            "Luke 2:41-51": "San Lucas 2, 41-51",
            "Matthew 3:13-16": "San Mateo 3, 13-16",
            "John 2:1-11": "San Juan 2, 1-11",
            "Mark 1:14-15": "San Marcos 1, 14-15",
            "Matthew 17:1-2": "San Mateo 17, 1-2",
            "Matthew 26:26-28": "San Mateo 26, 26-28",
            "Matthew 26:36-39": "San Mateo 26, 36-39",
            "Matthew 27:24-26": "San Mateo 27, 24-26",
            "Matthew 27:28-29": "San Mateo 27, 28-29",
            "Matthew 27:32": "San Mateo 27, 32",
            "Matthew 27:46-54": "San Mateo 27, 46-54",
            "John 20:1-9": "San Juan 20, 1-9",
            "Luke 24:44-53": "San Lucas 24, 44-53",
            "Acts 2:1-4": "Apóstoles 2, 1-4",
            "From the Sermons of St. John of Damascus. Second on the Falling-asleep of Blessed Mary.": "Sermón de San Juan Damasceno. Segundo sobre la dormición de la Santísima Virgen.",
            "Sermon of St. Peter Canisius, Priest On the Incomparable Virgin Mary, Mother of God": "Sermón de San Pedro Canisio, Presbítero. De María Madre de Dios, Virgen incomparable",
            "Conclude with (three times):": "Al terminar (3 veces):",
            "(Repeat 3 times)": "(Repita 3 veces)",
            "Optional Opening": "Oración Opcional",
            "Optional Closing": "Oración Opcional"
        }
    },
    prayers: {
        signOfTheCross: {
            EN: {
                title: 'Sign of the Cross',
                text: '<span class="red-text">+</span> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Sign of the Cross',
                text: '<span class="red-text">+</span> In the name of the Father, and of the Son, and of the Holy Ghost. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            },
            ES: {
                title: 'La Señal de la Cruz',
                text: '<span class="red-text">+</span> En el nombre del Padre, y del Hijo, y del Espíritu Santo.',
                source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
            },
            LA: {
                title: 'Signum Crucis',
                text: '<span class="red-text">+</span> In Nómine Patris, et Fílii, et Spíritus Sancti. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            }
        },
        apostlesCreed: {
            EN: {
                title: 'Apostle&rsquo;s Creed',
                text: 'I believe in God, the Father almighty, Creator of Heaven and earth. And in Jesus Christ, His only Son, our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate; was crucified, died, and was buried. He descended into Hell. The third day He rose again from the dead. He ascended into Heaven, and sits at the right hand of God, the Father almighty. He shall come again to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Apostle&rsquo;s Creed',
                text: 'I believe in God the Father Almighty, Creator of heaven and earth. And in Jesus Christ, His only Son, our Lord, Who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and buried: He descended into Hell, the third day He rose again from the dead, He ascended into heaven, sitteth at the right hand of God the Father Almighty, from thence He shall come to judge the living and the dead. I believe in the Holy Ghost, the holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            },
            ES: {
                title: 'Símbolo de los Apóstoles',
                text: 'Creo en Dios Padre, Todopoderoso, Creador del cielo y de la tierra. Y en Jesucristo su único Hijo, Nuestro Señor; que fue concebido por obra y gracia del Espíritu Santo; y nació de Santa María Virgen; padeció bajo el poder de Poncio Pilato; fué crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos; subió a los cielos y está sentado a la diestra de Dios Padre Todopoderoso; desde allí ha de venir a juzgar a los vivos y a los muertos. Creo en el Esprítu Santo, en la Santa Iglesia Católica; la comunión de los santos; el perdón de los pecados; la resurrección de la carne y la vida eterna. Amén.',
                source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
            },
            LA: {
                title: 'Symbólum Apostolórum',
                text: 'Credo in Deum, Patrem omnipoténtem, Creatórem cœli et terræ. Et in Jesum Christum, Fílium ejus únicum, Dóminum nostrum; qui concéptus est de Spíritu Sancto, natus ex María Vírgine; passus sub Póntio Piláto, crucifíxus, mórtuus et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis: ascéndit ad cœlos, sedet ad déxteram Dei Patris omnipoténtis; inde ventúrus est judicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, Sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            }
        },
        ourFather: {
            EN: {
                title: 'Our Father',
                text: 'Our Father, Who art in Heaven, hallowed be Thy Name. Thy kingdom come, Thy will be done on earth as it is in Heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Our Father',
                text: 'Our Father, who art in heaven, hallowed be Thy Name. Thy kingdom come. Thy will be done on earth, as it is in heaven: Give us this day our daily bread. And forgive us our trespasses, as we forgive those that trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            },
            ES: {
                title: 'El Padre Nuestro',
                text: 'Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.',
                source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
            },
            LA: {
                title: 'Pater Noster',
                text: 'Pater noster, qui es in cœlis, sanctificétur nomen tuum. Advéniat regnum tuum. Fiat volúntas tua, sicut in cœlo et in terra. Panem nostrum quotidiánum da nobis hódie. Et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem: sed líbera nos a malo. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            }
        },
        hailMary: {
            EN: {
                title: 'Hail Mary',
                text: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Hail Mary',
                text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the Fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            },
            ES: {
                title: 'El Ave María',
                text: 'Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
                source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
            },
            LA: {
                title: 'Ave María',
                text: 'Ave María, grátia plena, Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus ventris tui, Jesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            }
        },
        gloryBe: {
            EN: {
                title: 'Glory Be',
                text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
                source: 'Adapted from http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Glory Be',
                text: 'Glory be to the Father, and to the Son, and to the Holy Ghost. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            },
            ES: {
                title: 'El Gloria',
                text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
                source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
            },
            LA: {
                title: 'Gloria Patri',
                text: 'Gloria Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio et nunc et semper et in sæcula sæculórum. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            }
        },
        fatimaPrayer: {
            EN: {
                title: 'Fatima Prayer',
                text: 'O my Jesus, forgive us of our sins, save us from the fires of Hell; lead all souls to Heaven, especially those in most need of Thy mercy. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Fatima Prayer',
                text: 'O my Jesus, forgive us our sins, save us from the fires of Hell. Lead all souls to heaven, especially those most in need of your mercy. Amen.',
                source: 'Baronius Press, Daily Missal 1962'
            },
            ES: {
                title: 'Oración de Fátima',
                text: 'Oh Jesús, perdónanos nuestros pecados, sálvanos del fuego del infierno y guía todas las almas al Cielo, especialmente aquellas que necesitan más de tu misericordia.',
                source: 'http://www.devocionario.com/maria/rosario_1.html'
            },
            LA: {
                title: 'Orátio Fátimæ',
                text: 'O mi Jesu, remítte nobis peccáta nostra, salva nos ab igne inférni, perduc in cælum omnes ánimas, præsértim eas quæ misericórdiæ tuæ máxime índigent. Amen.',
                source: 'http://prayers.gleeson.us/oratio_fatimae.html'
            }
        },
        hailHolyQueen: {
            EN: {
                title: 'Hail Holy Queen',
                text: 'Hail Holy Queen, mother of mercy; our life, our sweetness, and our hope. To thee we cry, poor banished children of Eve. To thee we send up our sighs, mourning and weeping in this vale of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us. And after this, our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Hail Holy Queen',
                text: 'Hail Holy Queen, mother of mercy; our life, our sweetness, and our hope. To thee we cry, poor banished children of Eve. To thee we send up our sighs, mourning and weeping in this vale of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us. And after this, our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            ES: {
                title: 'La Salve',
                text: 'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.',
                source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
            },
            LA: {
                title: 'Salve Regína',
                text: 'Salve, Regína, mater misericórdiæ, vita, dulcédo et spes nostra, salve. Ad te clamámus, exsúles fílii Evæ. Ad te suspirámus, geméntes et ﬂentes in hac lacrimárum valle. Eja ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte, et Jesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María. <br>(V. Ora pro nobis, sancta Dei Génetrix. <br>R. Ut digni efﬁciámur promissiónibus Christi.) <br>Amen.',
                source: 'http://prayers.gleeson.us/salve_regina.html'
            }
        },
        prayerAfterRosary: {
            EN: {
                title: 'Final Prayer',
                text: 'Let us pray. O God, whose only begotten Son by His life, death and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that by meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            EN_TRAD: {
                title: 'Final Prayer',
                text: 'Let us pray. O God, whose only begotten Son by His life, death and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that by meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord. Amen.',
                source: 'http://www.newadvent.org/images/rosary.pdf'
            },
            ES: {
                title: 'Oración Final',
                text: 'Omnipotente y sempiterno Dios, que con la cooperación del Espíritu Santo, preparaste el cuerpo y el alma de la gloriosa Virgen y Madre María para que fuese merecedora de ser digna morada de tu Hijo; concédenos que, pues celebramos con alegría su conmemoración, por su piadosa intercesión seamos liberados de los males presentes y de la muerte eterna. Por el mismo Cristo nuestro Señor. Amén.',
                source: 'http://www.devocionario.com/maria/rosario_1.html'
            },
            LA: {
                title: 'Ad Finem Rosárii Dicéndæ',
                text: 'Orémus: Deus, cujus Unigénitus, per vitam, mortem et resurrectiónem suam, nobis salútis ætérnæ præmia comparávit, concéde, quǽsumus, ut, hæc mystéria sanctíssimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promíttunt, assequámur. Per eúndem Christum Dóminum nostrum. Amen.',
                source: 'http://prayers.gleeson.us/ad_finem_rosarii_dicendae.html'
            }
        },
        mysteries: {
            joyful: {
                EN: [
                    {
                        title: 'The First Joyful Mystery',
                        text: 'The Annunciation of Gabriel to Mary. (<a href="/med_en_joyful_1" data-navigo>'+mysteryVersesMarkup.joyful[1]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/annunciation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Joyful Mystery',
                        text: 'The Visitation  of Mary to Elizabeth. (<a href="/med_en_joyful_2" data-navigo>'+mysteryVersesMarkup.joyful[2]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/visitation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Third Joyful Mystery',
                        text: 'The Birth of Our Lord. (<a href="/med_en_joyful_3" data-navigo>'+mysteryVersesMarkup.joyful[3]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/nativity.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fourth Joyful Mystery',
                        text: 'The Presentation of Our Lord. (<a href="/med_en_joyful_4" data-navigo>'+mysteryVersesMarkup.joyful[4]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/presentation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fifth Joyful Mystery',
                        text: 'The Finding of Our Lord in the Temple. (<a href="/med_en_joyful_5" data-navigo>'+mysteryVersesMarkup.joyful[5]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/finding.jpg',
                        imagePosition: 'right center'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Joyful Mystery',
                        text: 'The Annunciation. (<a href="/med_en_joyful_1" data-navigo>'+mysteryVersesMarkup.joyful[1]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/annunciation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Joyful Mystery',
                        text: 'The Visitation. (<a href="/med_en_joyful_2" data-navigo>'+mysteryVersesMarkup.joyful[2]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/visitation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Third Joyful Mystery',
                        text: 'The Nativity. (<a href="/med_en_joyful_3" data-navigo>'+mysteryVersesMarkup.joyful[3]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/nativity.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fourth Joyful Mystery',
                        text: 'The Presentation. (<a href="/med_en_joyful_4" data-navigo>'+mysteryVersesMarkup.joyful[4]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/presentation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fifth Joyful Mystery',
                        text: 'The Finding in the Temple. (<a href="/med_en_joyful_5" data-navigo>'+mysteryVersesMarkup.joyful[5]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/finding.jpg',
                        imagePosition: 'right center'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Gaudiósum',
                        text: 'Annuntiátio. (<a href="/med_en_joyful_1" data-navigo>'+mysteryVersesMarkup.joyful[1]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/annunciation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Secúndum Mystérium Gaudiósum',
                        text: 'Visitátio. (<a href="/med_en_joyful_2" data-navigo>'+mysteryVersesMarkup.joyful[2]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/visitation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Tértium Mystérium Gaudiósum',
                        text: 'Natívitas Dómini nostri Jesu Christi. (<a href="/med_en_joyful_3" data-navigo>'+mysteryVersesMarkup.joyful[3]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/nativity.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Quartum Mystérium Gaudiósum',
                        text: 'Præsentátio Púeri Jesu in Templo. (<a href="/med_en_joyful_4" data-navigo>'+mysteryVersesMarkup.joyful[4]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/presentation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Quintum Mystérium Gaudiósum',
                        text: 'Invéntio Púeri Jesu in Templo. (<a href="/med_en_joyful_5" data-navigo>'+mysteryVersesMarkup.joyful[5]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/finding.jpg',
                        imagePosition: 'right center'
                    }
                ],
                ES: [
                    {
                        title: 'El Primer Misterio de Gozo',
                        text: 'La Anunciación del Angel a María. (<a href="/med_es_joyful_1" data-navigo>'+mysteryVersesMarkup.joyful[1]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/annunciation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Segundo Misterio de Gozo',
                        text: 'La Visita de Nuestra Señora a Su Prima Santa Isabel. (<a href="/med_es_joyful_2" data-navigo>'+mysteryVersesMarkup.joyful[2]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/visitation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Tercer Misterio de Gozo',
                        text: 'El Nacimiento del Hijo de Dios en Belén. (<a href="/med_es_joyful_3" data-navigo>'+mysteryVersesMarkup.joyful[3]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/nativity.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Cuarto Misterio de Gozo',
                        text: 'La Presentación de Jesús en el Templo. (<a href="/med_es_joyful_4" data-navigo>'+mysteryVersesMarkup.joyful[4]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/presentation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Quinto Misterio de Gozo',
                        text: 'El Niño Perdido y Hallado en el Templo. (<a href="/med_es_joyful_5" data-navigo>'+mysteryVersesMarkup.joyful[5]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/finding.jpg',
                        imagePosition: 'right center'
                    }
                ],
            },
            luminous: {
                EN: [
                    {
                        title: 'The First Luminous Mystery',
                        text: 'The Baptism of Our Lord in the River Jordan. (<a href="/med_en_luminous_1" data-navigo>'+mysteryVersesMarkup.luminous[1]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/baptism.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Luminous Mystery',
                        text: 'The Wedding at Cana, when Christ manifested Himself. (<a href="/med_en_luminous_2" data-navigo>'+mysteryVersesMarkup.luminous[2]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/cana.jpg',
                        imagePosition: 'left center'
                    },
                    {
                        title: 'The Third Luminous Mystery',
                        text: 'The Proclamation of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>'+mysteryVersesMarkup.luminous[3]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/proclamation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fourth Luminous Mystery',
                        text: 'The Transfiguration of Our Lord. (<a href="/med_en_luminous_4" data-navigo>'+mysteryVersesMarkup.luminous[4]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/transfiguration.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Fifth Luminous Mystery',
                        text: 'The Last Supper, when Our Lord gave us the Holy Eucharist. (<a href="/med_en_luminous_5" data-navigo>'+mysteryVersesMarkup.luminous[5]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/eucharist.jpg',
                        imagePosition: 'center'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Luminous Mystery',
                        text: 'The Baptism of Christ in the Jordan. (<a href="/med_en_luminous_1" data-navigo>'+mysteryVersesMarkup.luminous[1]+'</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
                        image: '/images/default/baptism.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Luminous Mystery',
                        text: 'The Wedding Feast at Cana. (<a href="/med_en_luminous_2" data-navigo>'+mysteryVersesMarkup.luminous[2]+'</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
                        image: '/images/default/cana.jpg',
                        imagePosition: 'left center'
                    },
                    {
                        title: 'The Third Luminous Mystery',
                        text: 'Jesus&rsquo; Proclamation of the Coming of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>'+mysteryVersesMarkup.luminous[3]+'</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
                        image: '/images/default/proclamation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fourth Luminous Mystery',
                        text: 'The Transfiguration. (<a href="/med_en_luminous_4" data-navigo>'+mysteryVersesMarkup.luminous[4]+'</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
                        image: '/images/default/transfiguration.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Fifth Luminous Mystery',
                        text: 'The Institution of the Eucharist. (<a href="/med_en_luminous_5" data-navigo>'+mysteryVersesMarkup.luminous[5]+'</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
                        image: '/images/default/eucharist.jpg',
                        imagePosition: 'center'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Luminósum',
                        text: 'Baptísma Dómini nostri Jesu Christi apud Jordánem. (<a href="/med_en_luminous_1" data-navigo>'+mysteryVersesMarkup.luminous[1]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/baptism.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Secúndum Mystérium Luminósum',
                        text: 'Núptiæ Canénses. (<a href="/med_en_luminous_2" data-navigo>'+mysteryVersesMarkup.luminous[2]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/cana.jpg',
                        imagePosition: 'left center'
                    },
                    {
                        title: 'Tértium Mystérium Luminósum',
                        text: 'Proclamátio Regni Dei. (<a href="/med_en_luminous_3" data-navigo>'+mysteryVersesMarkup.luminous[3]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/proclamation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Quartum Mystérium Luminósum',
                        text: 'Transfigurátio. (<a href="/med_en_luminous_4" data-navigo>'+mysteryVersesMarkup.luminous[4]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/transfiguration.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'Quintum Mystérium Luminósum',
                        text: 'Institútio Eucharístiæ. (<a href="/med_en_luminous_5" data-navigo>'+mysteryVersesMarkup.luminous[5]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/eucharist.jpg',
                        imagePosition: 'center'
                    }
                ],
                ES: [
                    {
                        title: 'El Primer Misterio de Luz',
                        text: 'El Bautismo de Jesús en el Jordán. (<a href="/med_es_luminous_1" data-navigo>'+mysteryVersesMarkup.luminous[1]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/baptism.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Segundo Misterio de Luz',
                        text: 'La Autorrevelación de Jesús en las Bodas de Caná. (<a href="/med_es_luminous_2" data-navigo>'+mysteryVersesMarkup.luminous[2]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/cana.jpg',
                        imagePosition: 'left center'
                    },
                    {
                        title: 'El Tercer Misterio de Luz',
                        text: 'El Anuncio del Reino de Dios. (<a href="/med_es_luminous_3" data-navigo>'+mysteryVersesMarkup.luminous[3]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/proclamation.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Cuarto Misterio de Luz',
                        text: 'La Transfiguración de Jesús. (<a href="/med_es_luminous_4" data-navigo>'+mysteryVersesMarkup.luminous[4]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/transfiguration.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'El Quinto Misterio de Luz',
                        text: 'La Institución de la Eucaristía. (<a href="/med_es_luminous_5" data-navigo>'+mysteryVersesMarkup.luminous[5]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/eucharist.jpg',
                        imagePosition: 'center'
                    }
                ],
            },
            sorrowful: {
                EN: [
                    {
                        title: 'The First Sorrowful Mystery',
                        text: 'The Agony of Our Lord in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>'+mysteryVersesMarkup.sorrowful[1]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/agony.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Sorrowful Mystery',
                        text: 'Our Lord is Scourged at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>'+mysteryVersesMarkup.sorrowful[2]+'></a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/scourging.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Third Sorrowful Mystery',
                        text: 'Our Lord is Crowned with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>'+mysteryVersesMarkup.sorrowful[3]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/thorns.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Fourth Sorrowful Mystery',
                        text: 'Our Lord Carries the Cross to Calvary. (<a href="/med_en_sorrowful_4" data-navigo>'+mysteryVersesMarkup.sorrowful[4]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/cross.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fifth Sorrowful Mystery',
                        text: 'The Crucifixion of Our Lord. (<a href="/med_en_sorrowful_5" data-navigo>'+mysteryVersesMarkup.sorrowful[5]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/crucifixion.jpg',
                        imagePosition: 'center top'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Sorrowful Mystery',
                        text: 'The Agony in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>'+mysteryVersesMarkup.sorrowful[1]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/agony.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Sorrowful Mystery',
                        text: 'The Scourging of Our Blessed Lord at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>'+mysteryVersesMarkup.sorrowful[2]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/scourging.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Third Sorrowful Mystery',
                        text: 'The Crowning of our Blessed Lord with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>'+mysteryVersesMarkup.sorrowful[3]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/thorns.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Fourth Sorrowful Mystery',
                        text: 'Our Blessed Lord carrying His Cross. (<a href="/med_en_sorrowful_4" data-navigo>'+mysteryVersesMarkup.sorrowful[4]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/cross.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fifth Sorrowful Mystery',
                        text: 'The Crucifixion. (<a href="/med_en_sorrowful_5" data-navigo>'+mysteryVersesMarkup.sorrowful[5]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/crucifixion.jpg',
                        imagePosition: 'center top'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Dolorósum',
                        text: 'Agónia in Horto. (<a href="/med_en_sorrowful_1" data-navigo>'+mysteryVersesMarkup.sorrowful[1]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/agony.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Secúndum Mystérium Dolorósum',
                        text: 'Flagellátio. (<a href="/med_en_sorrowful_2" data-navigo>'+mysteryVersesMarkup.sorrowful[2]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/scourging.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'Tértium Mystérium Dolorósum',
                        text: 'Coronátio spinis. (<a href="/med_en_sorrowful_3" data-navigo>'+mysteryVersesMarkup.sorrowful[3]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/thorns.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'Quartum Mystérium Dolorósum',
                        text: 'Bajulátio Crucis. (<a href="/med_en_sorrowful_4" data-navigo>'+mysteryVersesMarkup.sorrowful[4]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/cross.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Quintum Mystérium Dolorósum',
                        text: 'Crucifíxio et Mors Dómini nostri Jesu Christi. (<a href="/med_en_sorrowful_5" data-navigo>'+mysteryVersesMarkup.sorrowful[5]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/crucifixion.jpg',
                        imagePosition: 'center top'
                    }
                ],
                ES: [
                    {
                        title: 'El Primer Misterio de Dolor',
                        text: 'La Oración de Jesús en el Huerto de Getsemaní. (<a href="/med_en_sorrowful_1" data-navigo>'+mysteryVersesMarkup.sorrowful[1]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/agony.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Segundo Misterio de Dolor',
                        text: 'La Flagelación. (<a href="/med_en_sorrowful_2" data-navigo>'+mysteryVersesMarkup.sorrowful[2]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/scourging.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'El Tercer Misterio de Dolor',
                        text: 'La Coronación de Espinas. (<a href="/med_en_sorrowful_3" data-navigo>'+mysteryVersesMarkup.sorrowful[3]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/thorns.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'El Cuarto Misterio de Dolor',
                        text: 'La Cruz a Cuestas. (<a href="/med_en_sorrowful_4" data-navigo>'+mysteryVersesMarkup.sorrowful[4]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/cross.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Quinto Misterio de Dolor',
                        text: 'Jesús Muere en la Cruz. (<a href="/med_en_sorrowful_5" data-navigo>'+mysteryVersesMarkup.sorrowful[5]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/crucifixion.jpg',
                        imagePosition: 'center top'
                    }
                ],
            },
            glorious: {
                EN: [
                    {
                        title: 'The First Glorious Mystery',
                        text: 'The Glorious Resurrection of Our Lord. (<a href="/med_en_glorious_1" data-navigo>'+mysteryVersesMarkup.glorious[1]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/resurrection.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Glorious Mystery',
                        text: 'The Ascension of Our Lord. (<a href="/med_en_glorious_2" data-navigo>'+mysteryVersesMarkup.glorious[2]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/ascension.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Third Glorious Mystery',
                        text: 'The Descent of the Holy Spirit at Pentecost. (<a href="/med_en_glorious_3" data-navigo>'+mysteryVersesMarkup.glorious[3]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/descent.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fourth Glorious Mystery',
                        text: 'The Assumption of Mary into Heaven. (<a href="/med_en_glorious_4" data-navigo>'+mysteryVersesMarkup.glorious[4]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/assumption.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Fifth Glorious Mystery',
                        text: 'The Coronation of Mary as Queen of Heaven and Earth. (<a href="/med_en_glorious_5" data-navigo>'+mysteryVersesMarkup.glorious[5]+'</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf',
                        image: '/images/default/coronation.jpg',
                        imagePosition: 'center top'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Glorious Mystery',
                        text: 'The Resurrection. (<a href="/med_en_glorious_1" data-navigo>'+mysteryVersesMarkup.glorious[1]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/resurrection.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Second Glorious Mystery',
                        text: 'The Ascension. (<a href="/med_en_glorious_2" data-navigo>'+mysteryVersesMarkup.glorious[2]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/ascension.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Third Glorious Mystery',
                        text: 'The Descent of the Holy Ghost on the Apostles. (<a href="/med_en_glorious_3" data-navigo>'+mysteryVersesMarkup.glorious[3]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/descent.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'The Fourth Glorious Mystery',
                        text: 'The Assumption of Our Lady into Heaven. (<a href="/med_en_glorious_4" data-navigo>'+mysteryVersesMarkup.glorious[4]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/assumption.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'The Fifth Glorious Mystery',
                        text: 'The Coronation of Our Lady and the Glory of all the Saints. (<a href="/med_en_glorious_5" data-navigo>'+mysteryVersesMarkup.glorious[5]+'</a>)',
                        source: 'Baronius Press, Daily Missal 1962',
                        image: '/images/default/coronation.jpg',
                        imagePosition: 'center top'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Gloriósum',
                        text: 'Resurréctio. (<a href="/med_en_glorious_1" data-navigo>'+mysteryVersesMarkup.glorious[1]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/resurrection.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Secúndum Mystérium Gloriósum',
                        text: 'Ascénsio. (<a href="/med_en_glorious_2" data-navigo>'+mysteryVersesMarkup.glorious[2]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/ascension.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'Tértium Mystérium Gloriósum',
                        text: 'Descénsus Spíritus Sancti. (<a href="/med_en_glorious_3" data-navigo>'+mysteryVersesMarkup.glorious[3]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/descent.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'Quartum Mystérium Gloriósum',
                        text: 'Assúmptio. (<a href="/med_en_glorious_4" data-navigo>'+mysteryVersesMarkup.glorious[4]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/assumption.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'Quintum Mystérium Gloriósum',
                        text: 'Coronátio Beátæ Maríæ Vírginis in Cælis. (<a href="/med_en_glorious_5" data-navigo>'+mysteryVersesMarkup.glorious[5]+'</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
                        image: '/images/default/coronation.jpg',
                        imagePosition: 'center top'
                    }
                ],
                ES: [
                    {
                        title: 'El Primer Misterio de Gloria',
                        text: 'La Resurrección de Nuestro Señor. (<a href="/med_en_glorious_1" data-navigo>'+mysteryVersesMarkup.glorious[1]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/resurrection.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Segundo Misterio de Gloria',
                        text: 'La Ascención del Señor. (<a href="/med_en_glorious_2" data-navigo>'+mysteryVersesMarkup.glorious[2]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/ascension.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'El Tercer Misterio de Gloria',
                        text: 'La Venida del Espíritu Santo. (<a href="/med_en_glorious_3" data-navigo>'+mysteryVersesMarkup.glorious[3]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/descent.jpg',
                        imagePosition: 'center'
                    },
                    {
                        title: 'El Cuarto Misterio de Gloria',
                        text: 'La Asunción de la Virgen María al Cielo. (<a href="/med_en_glorious_4" data-navigo>'+mysteryVersesMarkup.glorious[4]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/assumption.jpg',
                        imagePosition: 'center top'
                    },
                    {
                        title: 'El Quinto Misterio de Gloria',
                        text: 'La Coronación de María como Reina del Universo. (<a href="/med_en_glorious_5" data-navigo>'+mysteryVersesMarkup.glorious[5]+'</a>)',
                        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479',
                        image: '/images/default/coronation.jpg',
                        imagePosition: 'center top'
                    }
                ],
            }
        },
        divineMercy: {
            eternalFather: {
                EN: {
                    title: 'Eternal Father',
                    text: 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.',
                    source: 'Baronius Press, Daily Missal 1962'
                },
                EN_TRAD: {
                    title: 'Eternal Father',
                    text: 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.',
                    source: 'Baronius Press, Daily Missal 1962'
                },
                LA: {
                    title: 'Pater Æterne',
                    text: 'Pater ætérne, óffero tibi Corpus et Sánguinem, ánimam et divinitátem dilectíssimi Fílii Tui, Dómini nostri, Jesu Christi, in propitiatióne pro peccátis nostris et totíus mundi.',
                    source: 'http://www.windsorlatinmass.org/wtnews/170423.pdf'
                },
                ES: {
                    title: 'Padre Eterno',
                    text: 'Padre Eterno, Te ofrezco el Cuerpo y la Sangre, el Alma y la Divinidad de Tu amadísimo Hijo, nuestro Señor Jesucristo, como propiciación de nuestros pecados y los del mundo entero.',
                    source: 'https://divinamisericordia.es/espiritualidad/coronilla/'
                },
            },
            forTheSake: {
                EN: {
                    title: 'For the Sake of His Sorrowful Passion',
                    text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
                    source: 'Baronius Press, Daily Missal 1962'
                },
                EN_TRAD: {
                    title: 'For the Sake of His Sorrowful Passion',
                    text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
                    source: 'Baronius Press, Daily Missal 1962'
                },
                LA: {
                    title: 'Pro Dolorosa Ejus Passione',
                    text: 'Pro dolorosa Ejus passióne, miserére nobis et totíus mundi.',
                    source: 'http://www.windsorlatinmass.org/wtnews/170423.pdf'
                },
                ES: {
                    title: 'Por Su dolorosa Pasión',
                    text: 'Por Su dolorosa Pasión, ten misericordia de nosotros y del mundo entero.',
                    source: 'https://divinamisericordia.es/espiritualidad/coronilla/'
                },
            },
            holyGod: {
                EN: {
                    title: 'Holy God',
                    text: '<em><hro-localize>Conclude with (three times):</hro-localize></em> Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
                    source: 'Baronius Press, Daily Missal 1962'
                },
                EN_TRAD: {
                    title: 'Holy God',
                    text: '<em><hro-localize>Conclude with (three times):</hro-localize></em> Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
                    source: 'Baronius Press, Daily Missal 1962'
                },
                LA: {
                    title: 'Sanctus Deus',
                    text: '<em><hro-localize>Conclude with (three times):</hro-localize></em> Sanctus Deus, Sanctus Fortis, Sanctus Immortális, miserére nobis et totíus mundi.',
                    source: 'http://www.windsorlatinmass.org/wtnews/170423.pdf'
                },
                ES: {
                    title: 'Holy God',
                    text: '<em><hro-localize>Conclude with (three times):</hro-localize></em> Santo Dios, Santo Fuerte, Santo Inmortal, ten piedad de nosotros y del mundo entero.',
                    source: 'https://divinamisericordia.es/espiritualidad/'
                },
            },
            optionalOpening: {
                EN: {
                    title: '<hro-localize>Optional Opening</hro-localize>',
                    text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em><hro-localize>(Repeat 3 times)</hro-localize></em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: '<hro-localize>Optional Opening</hro-localize>',
                    text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em><hro-localize>(Repeat 3 times)</hro-localize></em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                LA: {
                    title: '<hro-localize>Optional Opening</hro-localize>',
                    text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em><hro-localize>(Repeat 3 times)</hro-localize></em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                ES: {
                    title: '<hro-localize>Optional Opening</hro-localize>',
                    text: 'Expiraste, Jesús, pero Tu muerte hizo brotar un manantial de  vida para las almas y el océano de Tu misericordia inundó todo el mundo. Oh, Fuente de Vida, insondable misericordia  divina,  anega el mundo entero derramando sobre nosotros hasta Tu última gota. <br><br> <em><hro-localize>(Repeat 3 times)</hro-localize></em> Oh, Sangre y Agua que brotaste del Corazón de Jesús, manantial de misericordia para nosotros, en Ti confío.',
                    source: 'https://divinamisericordia.es/wp-content/uploads/Oraciones-de-la-Divina-Misericordia.pdf'
                },
            },
            optionalClosing: {
                EN: {
                    title: '<hro-localize>Optional Closing</hro-localize>',
                    text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: '<hro-localize>Optional Closing</hro-localize>',
                    text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                LA: {
                    title: '<hro-localize>Optional Closing</hro-localize>',
                    text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                ES: {
                    title: '<hro-localize>Optional Closing</hro-localize>',
                    text: 'Oh Dios, en quien la misericordia es infinita y el tesoro de compasión inagotable, vuelve a nosotros tu mirada bondadosa y aumenta tu misericordia en nosotros, para que nunca, ni siquiera en los momentos más difíciles nos desesperemos, sino que, con confianza, nos sometamos a tu santa voluntad que es la misericordia misma. Por nuestro Señor Jesucristo, Rey de la misericordia que contigo y con el Espíritu Santo nos manifiesta misericordia ahora y por los siglos. Amén.',
                    source: 'https://divinamisericordia.es/wp-content/uploads/Oraciones-de-la-Divina-Misericordia.pdf'
                },
            },
        },
    }
};