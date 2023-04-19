jQuery(function($){
    const year = new Date().getFullYear();
    const launch = new Date(year, 11, 06, 00, 00, 00);
    const stop = new Date(year, 11, 07, 00, 00, 00);
    const days = $('#days');
    const dd = $('#dd');
    const hours = $('#hours');
    const hh = $('#hh');
    const minutes = $('#minutes');
    const mm = $('#mm');
    const secondes = $('#secondes');
    const ss = $('#ss');

    
    $('#count').hide();

    setDate();

    function setDate() {

        const now = new Date();
        const s = (launch.getTime() - now.getTime())/1000; 

        if(s > 0) {
            $('#count').show();
            const d = Math.floor(s/86400);
            days.html(d);
            dd.html('Jour' + (d > 1 ? 's' : ''));
            const sd = s - d*86400;

            const h = Math.floor(sd/3600);
            hours.html(h);
            hh.html('Heure' + (h > 1 ? 's' : ''));
            const sh = sd - h*3600;

            const m = Math.floor(sh/60);
            minutes.html(m);
            mm.html('Minute' + (m > 1 ? 's' : ''));
            const sm = sh - m*60;

            const se = Math.floor(sm);
            secondes.html(se);
            ss.html('Seconde' + (se > 1 ? 's' : ''));

            $('#text').html("L'anniversaire de Blade Kalonda est imminent, vous êtes averti pour mieux préparez vos cadeaux, souhaits, et tant d'autres surprises car elle débute dans...");

            setTimeout(setDate, 1000);
        }

        if(s < 0) {
            const content = `
                <div class="container bg-primary text-light">
                    <div class="row">
                        <div class="header justify-content-center">
                            <div class="card bg-primary text-center w-75 mx-auto border-0">
                                <img src="assets/img/anniv5.png" class="card-img-top mx-auto" style="height: 250px;">
                            </div>
                            <h1 class="fw-bold text-center text-uppercase pt-3">Israel Kalonda</h1>
                            <p class="text-center mb-0">Les anniversaires doivent être remplis de messages chaleureux et des souhaits de la part des amis, de la famille et de vous-même.</p>
                            <p class="text-center mb-3">Bien que la plupart des gens trouvent inhabituel de se souhaiter un joyeux anniversaire. Moi, j'ai conçu ce mini site pour me souhaiter personnellemment et permettre aussi aux personnes qui veulent me souhaiter ou célébrer cette journée ensemble avec moi par des moyens ci-dessous.</p>
                        
                        </div>
                            
                    </div>
                </div>

            <section class="container merriweather py-4">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card p-2 bg-light h-100">
                            <img src="assets/img/anniv2.png" class="card-img-top" style="height: 320px;" alt="">
                            <div class="card-body text-center">
                                <h5 class="card-title merriweather text-primary">Souhaiter <b>Israel Kalonda</b></h5>
                                <p class="card-text merriweather">Appuyez sur le bouton <b>Souhaiter maintenent</b> pour vous rédiriger sur notre discussion WhatsApp et envoyer moi votre souhait. J'en serai très ravi.</p>
                                <a href="https://wa.me/message/BSLDXZVV3X2PP1" class="btn btn-primary w-100">Souhaiter le maintenant</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-2 bg-light">
                            <img src="assets/img/anniv3.png" class="card-img-top h-25 w-50 mx-auto" style="height: 320px;" alt="">
                            <div class="card-body text-center">
                                <h5 class="card-title merriweather text-primary">Offrir un cadeau à <b>Israel Kalonda</b></h5>
                                <p class="card-text merriweather">En appuyant sur le bouton <b>Offrir un cadeau</b> vous allez vous rédiriger sur une discussion Instagram avec moi et dite-moi ce que vous allez m'offrir comme cadeau. Let's Go !</p>
                                <a href="https://instagram.com/blade.kalonda?igshid=YmMyMTA2M2Y=" class="btn btn-primary w-100">Offrir un cadeau</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-2 bg-light h-100">
                            <img src="assets/img/anniv9.png" class="card-img-top" style="height: 320px;" alt="">
                            <div class="card-body text-center">
                                <h5 class="card-title merriweather text-primary">Appeler <b>Israel Kalonda</b> sur whatsapp</h5>
                                <p class="card-text merriweather">Pour ce qui veulent passer du bon temps avec moi, j'ai disposé un lien qui mène directement à un appel WhatsApp entre toi et moi en cliquant sur le bouton <b>Appelez maintenant</b>. J'attends ton appel avec plaisir.</p>
                                <a href="https://call.whatsapp.com/voice/Rj2vJifc13J0sSWPxgZLOS" class="btn btn-primary w-100">Appelez maintenant</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            `;

            $('#anniv').html(content);
            $('#count').hide();
            
        }

        if(s < 0) {
            $('#count').show();
            const nows = new Date();
            const t = (stop.getTime() - nows.getTime())/1000;

            $('#text').html("Profitez de rendre si spécial cette journée à l'occasion de l'anniversaire de Blade Kalonda par cadeaux, souhaits, et tant d'autres surprises car elle prend fin dans...")

            const d = Math.floor(t/86400);
            days.html(d);
            dd.html('Jour' + (d > 1 ? 's' : ''));
            const td = t - d*86400;

            const h = Math.floor(td/3600);
            hours.html(h);
            hh.html('Heure' + (h > 1 ? 's' : ''));
            const sh = td - h*3600;

            const m = Math.floor(sh/60);
            minutes.html(m);
            mm.html('Minute' + (m > 1 ? 's' : ''));
            const sm = sh - m*60;

            const se = Math.floor(sm);
            secondes.html(se);
            ss.html('Seconde' + (se > 1 ? 's' : ''));

            setTimeout(setDate, 1000);

            if(t < 0) {
                $('#anniv').html(`
                <div class="container bg-primary text-light">
                    <div class="row">
                        <div class="header justify-content-center">
                            <h1 class="fw-bold text-center text-uppercase pt-3">Désolé !</h1>
                            <p class="text-center mb-2">Vous êtes entrain de visiter mon site d'anniversaire en retard cher ami. Mon anniversaire viens de prendre fin depuis le 06 décembre ${new Date().getFullYear()} à 23:59:59.</p>
                            <p class="text-center mb-3">Conservez ce même lien pour mon anniversaire à l'année prochaine prévu le 06 décembre ${year + 1}.</p>
                        </div>
                            
                    </div>
                </div>
                `);
                $('#count').hide();
            }
        }

    }
});