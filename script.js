function openProject(project, clickedLink) {

    const content = document.getElementById("project-content");


    /* =========================
       ACTIVE PROJECT UNDERLINE
    ========================= */

    document.querySelectorAll(".project-menu a").forEach(link => {
        link.classList.remove("active");
    });

    if (clickedLink) {
        clickedLink.classList.add("active");
    }


    /* =========================
       YOU DO THINGS IN YOUR LIFE
    ========================= */

    if (project === "potential") {

        content.innerHTML = `

<h1>
    You do things in your life that will change so<br>
    Meone more than you will ever change yourself
</h1>

<p class="project-venue">
    Riga Contemporary Art Space
</p>

<p class="project-meta">
    Installation. Concrete, extruded polystyrene foam, concrete, galvanized steel, plywood. 2026
</p>


<div class="project-text">

    <div class="text-column">

        <p>
        The work constructs an unstable relationship between flat templates and the volumes they promise to produce. Existing somewhere between instruction and object, utilitarian forms drift towards ornament. Although they continue to suggest direction and function, they no longer perform either, leaving behind only the trace of their intended purpose.

        By treating the template as a sculptural object rather than a means to an end, the work reveals a latent potential that can never be fully realised within the logic of volume and space. It remains suspended between possibility and fulfilment, refusing to resolve into a finished form.
        </p>

        <p>
        Making becomes an act of negotiating absence. As negative space is gradually filled, familiar gestures lose their certainty under the weight of observation. Hands that know what to do in private become hesitant once exposed to a gaze. The work dwells within this moment of hesitation, where the tension between intention, execution, and perception becomes its primary material.
        </p>

    </div>


    <div class="text-column">

        <p>
        The work was presented in Before It Makes Sense (after Winnie-the-Pooh) at Riga Contemporary Art Space, a group exhibition examining forms of knowledge that emerge before they become fixed, named, or fully understood. Borrowing its title from A. A. Milne's fictional world, the exhibition proposed intuition, play, and uncertainty as legitimate ways of navigating contemporary reality. Rather than seeking definitive meaning, the participating works occupied a space of speculation, allowing thought to remain provisional and open. Within this context, the work approached sculpture not as a resolved object but as an unfinished proposition, where possibility persists longer than certainty.
        </p>

    </div>

</div>


<div class="project-images">

    <img src="Images/Work1.jpg">
    <img src="Images/Work2.jpg">

</div>


<div class="project-image-full">

    <img src="Images/Work3.jpg">

</div>


<div class="project-images">

    <img src="Images/Work4.jpg">
    <img src="Images/Work5.jpg">

</div>


<p class="photo-credit">
    Photos by Roberts Jansons
</p>

        `;
    }


    /* =========================
       THAT TIME I DELETED...
    ========================= */

    if (project === "folder") {

        content.innerHTML = `

<h1>
    That Time I Deleted an Important Folder
</h1>

<p class="project-venue">
    Swedenborg House, London
</p>

<p class="project-meta">
    Video. 1920x1080 px. 3'04''. 2026
</p>


<div class="project-text">

    <div class="text-column">

        <p>
        A friend who works as a police officer once told me about a nightmare in which I appeared. For a moment, it felt as though my presence in the dream made the story partly mine. I imagined borrowing his experience, translating it into the language of contemporary art, and presenting it as something meaningful. It had all the ingredients of a convincing artwork. It was also a very bad idea.
        </p>

        <p>
        The video remains in that moment before the work exists. It holds on to hesitation, resisting the impulse to transform another person's experience into artistic material. Rather than resolving the ethical discomfort, it allows it to remain visible. The work is less about the dream itself than about the temptation to claim authorship over a story that was never mine to tell.
        </p>

    </div>


    <div class="text-column">

        <p>
        Created within the framework of Bad Ideas Collective, the work embraces uncertainty as a form of practice. The collective is dedicated to ideas that never became artworks because they felt ethically questionable, conceptually weak, emotionally dishonest, or simply impossible to justify. Instead of celebrating finished works, it gives space to discarded propositions and the often invisible process of deciding not to make something.
        </p>

        <p>
        That Time I Deleted an Important Folder was screened in 2026 at Swedenborg House, London, as part of a programme organised by DOMOBAAL Gallery together with the curators of Bad Ideas Collective. Presented anonymously alongside other unrealized artistic propositions, the work became part of a shared space where doubt, restraint, and abandoned ideas were treated not as failures, but as works in their own right.
        </p>

    </div>

</div>


<div class="project-video">
    <div class="vimeo-embed">
        <iframe
            src="https://player.vimeo.com/video/1217347693?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            title="Folder"
            allowfullscreen>
        </iframe>
    </div>
</div>


<div class="project-image-full">

    <img src="Images/Folder1.jpg">

</div>

        `;

    }


    /* =========================
       A FEW SAMPLES OF HOLDING ON
    ========================= */

    if (project === "holding") {

        content.innerHTML = `

<h1>
    A Few Samples of Holding On<br>
    (With Līva Priedīte)
</h1>

<p class="project-venue">
    Forest Plinth, Latgale
</p>

<p class="project-meta">
    Installation. Plywood, polyurethane cornice mouldings, miter saw. 2026
</p>


<div class="project-text">

    <div class="text-column">

        <p>
        A Few Samples of Holding On explores a form of tiny monumentalism. It remains somewhere between being worked on and being finished, much like the objects it draws from objects shaped by time more than intention.
        </p>

        <p>
        The workshop and its tools become part of the installation on the Forest Plinth, where restoration and revitalisation are no longer simply practical acts but ways of making. The project challenges what can become monumental. Balanced on a vehicle jack without instructions, the work holds on in two ways: emotionally, by resisting change, and physically, because time leaves it no other choice.
        </p>

    </div>


    <div class="text-column">

        <p>
        The small decorative mouldings scattered throughout the installation are gestures of tiny monumentalism - almost affectionate attempts at monument-making. Suspended between decoration and structure, they celebrate small importance instead of grand significance.
        </p>

        <p>
        Tiny monumentality - when you are about to lift something, you gather enough strength, perhaps all that your body possesses, and as you lift it, you realise that the thing you wanted to move is much lighter than it first appeared.
        </p>

    </div>

</div>


<div class="project-image-full">

    <img src="Images/Sample1.jpg">

</div>


<div class="project-images">

    <img src="Images/Sample2.jpg">
    <img src="Images/Sample3.jpg">

</div>


<div class="project-image-full">

    <img src="Images/Sample4.jpg">

</div>


<div class="project-image-full">

    <img src="Images/Sample5.jpg">

</div>


<div class="project-image-full">

    <img src="Images/Sample6.jpg">

</div>


<div class="project-image-full">

    <img src="Images/Sample8.jpg">

</div>


<p class="photo-credit">
    Photos by Līva Priedīte
</p>

        `;
    }

}


/* =========================
   INITIAL WORKS PAGE TEXT
========================= */

const initialContent = document.getElementById("project-content");

initialContent.innerHTML = `

<p class="works-intro">
    Being a man means pissing all over the toilet seat<br>
    but wiping it clean afterward.
</p>

`;
