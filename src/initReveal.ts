
import Reveal from 'reveal.js';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.esm.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import RevealSearch from 'reveal.js/plugin/search/search.esm.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'

export const initReveal = () => {
    const deck = new Reveal({
        plugins: [RevealZoom, RevealNotes, RevealSearch, RevealMarkdown, RevealHighlight]
    });
    deck.initialize();
}
