import { getMysteriesForCurrDay } from './utils';

export default {
    settings: {
        mysteries: localStorage.getItem('mysteries') || getMysteriesForCurrDay(),
        rosaryLanguage: localStorage.getItem('rosaryLanguage') || 'EN',
        hidePrayers: localStorage.getItem('hidePrayers') === 'true' ? true : false,
        anotherDevotion: localStorage.getItem('anotherDevotion') || 'none',
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
                        text: 'The Annunciation of Gabriel to Mary. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Second Joyful Mystery',
                        text: 'The Visitation  of Mary to Elizabeth. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Third Joyful Mystery',
                        text: 'The Birth of Our Lord. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fourth Joyful Mystery',
                        text: 'The Presentation of Our Lord. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fifth Joyful Mystery',
                        text: 'The Finding of Our Lord in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Joyful Mystery',
                        text: 'The Annunciation. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Second Joyful Mystery',
                        text: 'The Visitation. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Third Joyful Mystery',
                        text: 'The Nativity. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Fourth Joyful Mystery',
                        text: 'The Presentation. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Fifth Joyful Mystery',
                        text: 'The Finding in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Gaudiósum',
                        text: 'Annuntiátio. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Secúndum Mystérium Gaudiósum',
                        text: 'Visitátio. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Tértium Mystérium Gaudiósum',
                        text: 'Natívitas Dómini nostri Jesu Christi. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quartum Mystérium Gaudiósum',
                        text: 'Præsentátio Púeri Jesu in Templo. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quintum Mystérium Gaudiósum',
                        text: 'Invéntio Púeri Jesu in Templo. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    }
                ]
            },
            luminous: {
               EN: [
                    {
                        title: 'The First Luminous Mystery',
                        text: 'The Baptism of Our Lord in the River Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Second Luminous Mystery',
                        text: 'The Wedding at Cana, when Christ manifested Himself. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Third Luminous Mystery',
                        text: 'The Proclamation of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fourth Luminous Mystery',
                        text: 'The Transfiguration of Our Lord. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fifth Luminous Mystery',
                        text: 'The Last Supper, when Our Lord gave us the Holy Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Luminous Mystery',
                        text: 'The Baptism of Christ in the Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
                    },
                    {
                        title: 'The Second Luminous Mystery',
                        text: 'The Wedding Feast at Cana. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
                    },
                    {
                        title: 'The Third Luminous Mystery',
                        text: 'Jesus&rsquo; Proclamation of the Coming of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
                    },
                    {
                        title: 'The Fourth Luminous Mystery',
                        text: 'The Transfiguration. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
                    },
                    {
                        title: 'The Fifth Luminous Mystery',
                        text: 'The Institution of the Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
                        source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Luminósum',
                        text: 'Baptísma Dómini nostri Jesu Christi apud Jordánem. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Secúndum Mystérium Luminósum',
                        text: 'Núptiæ Canénses. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Tértium Mystérium Luminósum',
                        text: 'Proclamátio Regni Dei. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quartum Mystérium Luminósum',
                        text: 'Transfigurátio. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quintum Mystérium Luminósum',
                        text: 'Institútio Eucharístiæ. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    }
                ]
            },
            sorrowful: {
                EN: [
                    {
                        title: 'The First Sorrowful Mystery',
                        text: 'The Agony of Our Lord in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Second Sorrowful Mystery',
                        text: 'Our Lord is Scourged at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Third Sorrowful Mystery',
                        text: 'Our Lord is Crowned with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fourth Sorrowful Mystery',
                        text: 'Our Lord Carries the Cross to Calvary. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fifth Sorrowful Mystery',
                        text: 'The Crucifixion of Our Lord. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Sorrowful Mystery',
                        text: 'The Agony in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Second Sorrowful Mystery',
                        text: 'The Scourging of Our Blessed Lord at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Third Sorrowful Mystery',
                        text: 'The Crowning of our Blessed Lord with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Fourth Sorrowful Mystery',
                        text: 'Our Blessed Lord carrying His Cross. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Fifth Sorrowful Mystery',
                        text: 'The Crucifixion. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Dolorósum',
                        text: 'Agónia in Horto. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Secúndum Mystérium Dolorósum',
                        text: 'Flagellátio. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Tértium Mystérium Dolorósum',
                        text: 'Coronátio spinis. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quartum Mystérium Dolorósum',
                        text: 'Bajulátio Crucis. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quintum Mystérium Dolorósum',
                        text: 'Crucifíxio et Mors Dómini nostri Jesu Christi. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    }
                ]
            },
            glorious: {
                EN: [
                    {
                        title: 'The First Glorious Mystery',
                        text: 'The Glorious Resurrection of Our Lord. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Second Glorious Mystery',
                        text: 'The Ascension of Our Lord. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Third Glorious Mystery',
                        text: 'The Descent of the Holy Spirit at Pentecost. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fourth Glorious Mystery',
                        text: 'The Assumption of Mary into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    },
                    {
                        title: 'The Fifth Glorious Mystery',
                        text: 'The Coronation of Mary as Queen of Heaven and Earth. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
                        source: 'http://www.newadvent.org/images/rosary.pdf'
                    }
                ],
                EN_TRAD: [
                    {
                        title: 'The First Glorious Mystery',
                        text: 'The Resurrection. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Second Glorious Mystery',
                        text: 'The Ascension. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Third Glorious Mystery',
                        text: 'The Descent of the Holy Ghost on the Apostles. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Fourth Glorious Mystery',
                        text: 'The Assumption of Our Lady into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    },
                    {
                        title: 'The Fifth Glorious Mystery',
                        text: 'The Coronation of Our Lady and the Glory of all the Saints. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
                        source: 'Baronius Press, Daily Missal 1962'
                    }
                ],
                LA: [
                    {
                        title: 'Prímum Mystérium Gloriósum',
                        text: 'Resurréctio. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Secúndum Mystérium Gloriósum',
                        text: 'Ascénsio. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Tértium Mystérium Gloriósum',
                        text: 'Descénsus Spíritus Sancti. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quartum Mystérium Gloriósum',
                        text: 'Assúmptio. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    },
                    {
                        title: 'Quintum Mystérium Gloriósum',
                        text: 'Coronátio Beátæ Maríæ Vírginis in Cælis. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
                        source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
                    }
                ]
            }
        },
        divineMercy: {
            eternalFather: {
                EN: {
                    title: 'Eternal Father',
                    text: 'Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: 'Eternal Father English Traditional',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                },
                LA: {
                    title: 'Eternal Father Latin',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                }
            },
            forTheSake: {
                EN: {
                    title: 'For the sake of His sorrowful Passion',
                    text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: 'For the sake of His sorrowful Passion English Traditional',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                },
                LA: {
                    title: 'For the sake of His sorrowful Passion Latin',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                }
            },
            holyGod: {
                EN: {
                    title: 'Holy God',
                    text: '<em>(Repeat 3 times)</em> Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: 'Holy God English Traditional',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                },
                LA: {
                    title: 'Holy God Latin',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                }
            },
            optionalOpening: {
                EN: {
                    title: 'Optional Opening',
                    text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em>(Repeat 3 times)</em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: 'Optional Opening English Traditional',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                },
                LA: {
                    title: 'Optional Opening',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                }
            },
            optionalClosing: {
                EN: {
                    title: 'Optional Closing',
                    text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
                    source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
                },
                EN_TRAD: {
                    title: 'Optional Closing English Traditional',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                },
                LA: {
                    title: 'Optional Closing',
                    text: 'Coming Soon',
                    source: 'Coming Soon'
                }
            },
        },
    }
};