import store from '../store';

export default function HomeJS() {
    $('body').css('background-color', '#242424')
    if(store.settings.hidePrayers) {
        $('.prayers').css({display: 'none'})
    }
    // Add index data to each bead, main loop and intro separated
    $('.rosary-main .bead').each(function(idx, el) {
        // index - 1 because medallion is actually second bead, the one before
        // it being an unclickable filler bead.
        $(this).data('bead-idx', idx-1);
    });
    $('.rosary-intro .bead').each(function(idx, el) {
        $(this).data('bead-idx', idx);
        $('.bead').removeClass('bead--selected');
        $(this).addClass('bead--selected');
    });
    // Set initial rotation variables
    var turnIncrement = 1/65;
    var lastRotation = 0;
    var lastBeadIdx = 0;
    // Rotate on click
    $('.rosary-main button.bead').click(function(event) {
        var currBeadIdx = $(this).data('bead-idx');
        rotateRosary(currBeadIdx);
        var fromBeadId = $('.bead--selected').attr('id');
        setBeadSelectedClass($(this));
        // reset intro drag
        $('.rosary-wrapper-wrapper').css({
            transform: getRosaryWrapperTransformRotation()+' translateY(0)',
            transition: 'transform .5s ease'
        });
        updatePrayers($(this).attr('id'), fromBeadId);
        localStorage.setItem('beadId', $(this).attr('id'))
        centerPrayers();
    });

    // Rotate back to beginning if necessary, then pull up/down to selected bead
    $('.rosary-intro button.bead').click(function(event) {
        rotateRosary(0);
        var currBeadIdx = $(this).data('bead-idx');
        var dragDist = ((currBeadIdx - 10)*42);
        $('.rosary-wrapper-wrapper').css({
            transform: getRosaryWrapperTransformRotation()+' translateY('+dragDist+'px)',
            transition: 'transform .5s ease'
        });
        var fromBeadId = $('.bead--selected').attr('id');
        setBeadSelectedClass($(this));
        updatePrayers($(this).attr('id'), fromBeadId);
        localStorage.setItem('beadId', $(this).attr('id'));
        leftAlignPrayers();
    });

    // Next Prayer button
    $('#next-prayer, #next-prayer-btn-within-beads, [data-rosary-next]').click(nextPrayer);

    // Prev Prayer button
    $('[data-rosary-prev]').click(prevPrayer);

    // Reset button
    $('[data-rosary-reset]').click(resetRosary);

    // Activate first click
    var savedBeadId = localStorage.getItem('beadId');
    if(savedBeadId) {
        $('#'+savedBeadId).click();
    } else {
        $('.bead--crucifix').click();
    }
    $('.prayer').first().addClass('prayer--current');

    function rotateRosary(currBeadIdx) {
        var rotationAmount = (currBeadIdx - lastBeadIdx)*turnIncrement;
        if(rotationAmount < -.5) {
            rotationAmount = 1 + rotationAmount;
        } else if(rotationAmount > .5) {
            rotationAmount = -(1 - rotationAmount);
        }
        var rotation = rotationAmount+lastRotation;
        $('.rosary-wrapper').css({
            transition: 'transform .5s ease',
            transform: 'rotate(' + -(rotation) + 'turn)'
        });
        lastRotation = rotation;
        lastBeadIdx = currBeadIdx;
    }
    function setBeadSelectedClass($bead) {
        $('.bead').removeClass('bead--selected');
        $bead.addClass('bead--selected');
    }
    function updatePrayers(beadId, fromBeadId) {
        var prayers = [];
        var language = store.settings.rosaryLanguage;
        var mysteries = store.settings.mysteries;
        if(beadId === 'crucifix') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.signOfTheCross[language].title,
                        text: store.prayers.signOfTheCross[language].text
                    },
                    {
                        title: store.prayers.apostlesCreed[language].title,
                        text: store.prayers.apostlesCreed[language].text
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.signOfTheCross[language].title,
                        text: store.prayers.signOfTheCross[language].text
                    }
                ];
            }
        } else if(beadId.slice(0, 9) === 'intro-hai' || beadId.slice(0, 9) === 'hail-mary') {
            if(!store.settings.divineMercy) {
                if(beadId.slice(0, 9) === 'intro-hai') {
                    prayers = [
                        {
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                } else if(beadId.slice(0, 11) === 'hail-mary-1') {
                    prayers = [
                        {
                            image: store.prayers.mysteries[mysteries][language][0].image,
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                } else if(beadId.slice(0, 11) === 'hail-mary-2') {
                    prayers = [
                        {
                            image: store.prayers.mysteries[mysteries][language][1].image,
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                } else if(beadId.slice(0, 11) === 'hail-mary-3') {
                    prayers = [
                        {
                            image: store.prayers.mysteries[mysteries][language][2].image,
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                } else if(beadId.slice(0, 11) === 'hail-mary-4') {
                    prayers = [
                        {
                            image: store.prayers.mysteries[mysteries][language][3].image,
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                } else if(beadId.slice(0, 11) === 'hail-mary-5') {
                    prayers = [
                        {
                            image: store.prayers.mysteries[mysteries][language][4].image,
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                } else {
                    prayers = [
                        {
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                }
            } else {
                if(beadId.slice(0, 9) === 'hail-mary') {
                    prayers = [
                        {
                            title: store.prayers.divineMercy.forTheSake[language].title,
                            text: store.prayers.divineMercy.forTheSake[language].text
                        }
                    ];
                }

                if(beadId === 'intro-hail-mary-1') {
                    prayers = [
                        {
                            title: store.prayers.ourFather[language].title,
                            text: store.prayers.ourFather[language].text
                        }
                    ];
                }

                if(beadId === 'intro-hail-mary-2') {
                    prayers = [
                        {
                            title: store.prayers.hailMary[language].title,
                            text: store.prayers.hailMary[language].text
                        }
                    ];
                }

                if(beadId === 'intro-hail-mary-3') {
                    prayers = [
                        {
                            title: store.prayers.apostlesCreed[language].title,
                            text: store.prayers.apostlesCreed[language].text
                        }
                    ];
                }
            }
        } else if(beadId === 'intro-our-father-1') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.ourFather[language].title,
                        text: store.prayers.ourFather[language].text
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.optionalOpening[language].title,
                        text: store.prayers.divineMercy.optionalOpening[language].text
                    }
                ];
            }
        } else if(beadId === 'intro-our-father-2') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.gloryBe[language].title,
                        text: store.prayers.gloryBe[language].text,
                    },
                    {
                        title: store.prayers.fatimaPrayer[language].title,
                        text: store.prayers.fatimaPrayer[language].text
                    },
                    {
                        title: store.prayers.mysteries[mysteries][language][0].title,
                        text: store.prayers.mysteries[mysteries][language][0].text,
                        image: store.prayers.mysteries[mysteries][language][0].image
                    },
                    {
                        title: store.prayers.ourFather[language].title,
                        text: store.prayers.ourFather[language].text,
                        image: store.prayers.mysteries[mysteries][language][0].image
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.eternalFather[language].title,
                        text: store.prayers.divineMercy.eternalFather[language].text
                    }
                ];
            }
        } else if(beadId === 'our-father-2') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.gloryBe[language].title,
                        text: store.prayers.gloryBe[language].text,
                        image: store.prayers.mysteries[mysteries][language][0].image
                    },
                    {
                        title: store.prayers.fatimaPrayer[language].title,
                        text: store.prayers.fatimaPrayer[language].text,
                        image: store.prayers.mysteries[mysteries][language][0].image
                    },
                    {
                        title: store.prayers.mysteries[mysteries][language][1].title,
                        text: store.prayers.mysteries[mysteries][language][1].text,
                        image: store.prayers.mysteries[mysteries][language][1].image
                    },
                    {
                        title: store.prayers.ourFather[language].title,
                        text: store.prayers.ourFather[language].text,
                        image: store.prayers.mysteries[mysteries][language][1].image
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.eternalFather[language].title,
                        text: store.prayers.divineMercy.eternalFather[language].text
                    }
                ];
            }
        } else if(beadId === 'our-father-3') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.gloryBe[language].title,
                        text: store.prayers.gloryBe[language].text,
                        image: store.prayers.mysteries[mysteries][language][1].image
                    },
                    {
                        title: store.prayers.fatimaPrayer[language].title,
                        text: store.prayers.fatimaPrayer[language].text,
                        image: store.prayers.mysteries[mysteries][language][1].image
                    },
                    {
                        title: store.prayers.mysteries[mysteries][language][2].title,
                        text: store.prayers.mysteries[mysteries][language][2].text,
                        image: store.prayers.mysteries[mysteries][language][2].image
                    },
                    {
                        title: store.prayers.ourFather[language].title,
                        text: store.prayers.ourFather[language].text,
                        image: store.prayers.mysteries[mysteries][language][2].image
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.eternalFather[language].title,
                        text: store.prayers.divineMercy.eternalFather[language].text
                    }
                ];
            }
        } else if(beadId === 'our-father-4') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.gloryBe[language].title,
                        text: store.prayers.gloryBe[language].text,
                        image: store.prayers.mysteries[mysteries][language][2].image
                    },
                    {
                        title: store.prayers.fatimaPrayer[language].title,
                        text: store.prayers.fatimaPrayer[language].text,
                        image: store.prayers.mysteries[mysteries][language][2].image
                    },
                    {
                        title: store.prayers.mysteries[mysteries][language][3].title,
                        text: store.prayers.mysteries[mysteries][language][3].text,
                        image: store.prayers.mysteries[mysteries][language][3].image
                    },
                    {
                        title: store.prayers.ourFather[language].title,
                        text: store.prayers.ourFather[language].text,
                        image: store.prayers.mysteries[mysteries][language][3].image
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.eternalFather[language].title,
                        text: store.prayers.divineMercy.eternalFather[language].text
                    }
                ];
            }
        } else if(beadId === 'our-father-5') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.gloryBe[language].title,
                        text: store.prayers.gloryBe[language].text,
                        image: store.prayers.mysteries[mysteries][language][3].image
                    },
                    {
                        title: store.prayers.fatimaPrayer[language].title,
                        text: store.prayers.fatimaPrayer[language].text,
                        image: store.prayers.mysteries[mysteries][language][3].image
                    },
                    {
                        title: store.prayers.mysteries[mysteries][language][4].title,
                        text: store.prayers.mysteries[mysteries][language][4].text,
                        image: store.prayers.mysteries[mysteries][language][4].image
                    },
                    {
                        title: store.prayers.ourFather[language].title,
                        text: store.prayers.ourFather[language].text,
                        image: store.prayers.mysteries[mysteries][language][4].image
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.eternalFather[language].title,
                        text: store.prayers.divineMercy.eternalFather[language].text
                    }
                ];
            }
        } else if(beadId === 'medallion') {
            if(!store.settings.divineMercy) {
                prayers = [
                    {
                        title: store.prayers.gloryBe[language].title,
                        text: store.prayers.gloryBe[language].text,
                        image: store.prayers.mysteries[mysteries][language][4].image
                    },
                    {
                        title: store.prayers.fatimaPrayer[language].title,
                        text: store.prayers.fatimaPrayer[language].text,
                        image: store.prayers.mysteries[mysteries][language][4].image
                    },
                    {
                        title: store.prayers.hailHolyQueen[language].title,
                        text: store.prayers.hailHolyQueen[language].text
                    },
                    {
                        title: store.prayers.prayerAfterRosary[language].title,
                        text: store.prayers.prayerAfterRosary[language].text
                    },
                    {
                        title: store.prayers.signOfTheCross[language].title,
                        text: store.prayers.signOfTheCross[language].text
                    }
                ];
            } else {
                prayers = [
                    {
                        title: store.prayers.divineMercy.holyGod[language].title,
                        text: store.prayers.divineMercy.holyGod[language].text
                    },
                    {
                        title: store.prayers.divineMercy.optionalClosing[language].title,
                        text: store.prayers.divineMercy.optionalClosing[language].text
                    }
                ];
            }
        }
        var prayersHTML = prayers.reduce(function(output, prayer, idx, srcArr) {
            output += '<div class="prayer">'+
                '<div class="prayer__copy">';
            if(prayer.title) {
                output += '<h2 class="label">'+prayer.title+'</h2>';
            }
            if(prayer.text) {
                output += '<p>'+prayer.text+'</p>';
            }
            output += '</div>'
            if(prayer.image) {
                var noGradient = store.settings.hidePrayers ?
                    'prayer__image--hide-prayers' : '';
                output += '<div class="prayer__image '+noGradient+'"><img src="'+prayer.image+
                    '" alt="Image of this mystery"></div>';
            }
            output += '</div>';
            return output;
        }, '');

        

        $('#prayers-content').html(prayersHTML);

        var $previousToFromBead = $('#'+fromBeadId).parent().prev();
        if($previousToFromBead.hasClass('bead-wrapper--filler'))
            $previousToFromBead = $previousToFromBead.prev();
        var previousToFromBeadId = $previousToFromBead.find('.bead').attr('id');
        if(fromBeadId === 'hail-mary-1-01')
            previousToFromBeadId = 'intro-our-father-2';
        if(beadId === previousToFromBeadId || store.settings.hidePrayers) {
            $('.prayer').last().addClass('prayer--current');
        } else {
            $('.prayer').first().addClass('prayer--current');
        }
        prependImageToBody();

        window.nvgo_router.updatePageLinks();
    }

    function centerPrayers() {
        $('.prayers').addClass('prayers--centered');
    }

    function leftAlignPrayers() {
        $('.prayers').removeClass('prayers--centered');
    }

    function getRosaryWrapperTransformRotation() {
        //return window.matchMedia('(min-width: 1000px)').matches ? 'rotate(-45deg)' : ''
        return '';
    }

    function nextPrayer() {
        if(
            $(this).attr('id') === 'next-prayer' &&
            !store.settings.hidePrayers
        ) {
            return;
        }

        if(!store.settings.hidePrayers) {
            var $currPrayer = $('.prayer--current');
            if($currPrayer.length && $currPrayer.next().length) {
                $currPrayer.removeClass('prayer--current');
                $currPrayer.next().addClass('prayer--current');
                prependImageToBody();
                return;
            }
        }


        if($('button.bead--selected').attr('id') === 'intro-our-father-2') {
            $('#hail-mary-1-01').click();
            // $('.prayer').removeClass('prayer--current');
            // $('.prayer').first().addClass('prayer--current');
            return;
        }

        var $next = $('button.bead--selected')
            .parent()
            .next();

        if(!$next.hasClass('bead-wrapper--filler') && $next.length) {
            $next.find('.bead').click();
        } else if($next.next().length) {
            $next.next().find('.bead').click();
        } else {
            $('.bead--medallion').click();
        }

        // $('.prayer').removeClass('prayer--current');
        // $('.prayer').first().addClass('prayer--current');
        // prependImageToBody();
    }

    function prevPrayer() {
        var $currPrayer = $('.prayer--current');
        if($currPrayer.length && $currPrayer.prev().length) {
            $currPrayer.removeClass('prayer--current');
            $currPrayer.prev().addClass('prayer--current');
            prependImageToBody();
            return;
        }

        if($('button.bead--selected').attr('id') === 'hail-mary-1-01') {
            $('#intro-our-father-2').click();
            $('.prayer').removeClass('prayer--current');
            $('.prayer').last().addClass('prayer--current');
            return;
        }

        var $prev = $('button.bead--selected')
            .parent()
            .prev();

        if(!$prev.hasClass('bead-wrapper--filler') && $prev.length) {
            $prev.find('.bead').click();
            $('.prayer').removeClass('prayer--current');
            $('.prayer').last().addClass('prayer--current');
            return;
        }

        if($prev.prev().length) {
            $prev.prev().find('.bead').click();
            $('.prayer').removeClass('prayer--current');
            $('.prayer').last().addClass('prayer--current');
            return;
        }
    }

    function resetRosary() {
        $('#crucifix').click();
        $('.prayer').removeClass('prayer--current');
        $('.prayer').first().addClass('prayer--current');
    }

    function prependImageToBody() {
        // Prevent image from hiding scroll in .prayers div
        $('body > .prayer__image').remove();
        $('.prayer--current .prayer__image').clone().prependTo('body');
    }
};