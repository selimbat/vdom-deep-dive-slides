
import Reveal from 'reveal.js';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.esm.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import RevealSearch from 'reveal.js/plugin/search/search.esm.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import { gamepadButtonPress } from 'components/utils/gamePadController';

export const initReveal = () => {
    const revealApi = new Reveal({
        plugins: [
            RevealZoom,
            RevealNotes,
            RevealSearch,
            RevealHighlight,
        ]
    });
    revealApi.initialize();
    gamepadButtonPress({
        0: () => revealApi.right(),
        1: () => revealApi.up(),
        2: () => revealApi.down(),
        3: () => revealApi.left(),
        14: () => revealApi.toggleOverview(),
        15: () => revealApi.toggleOverview(),
    })
}
