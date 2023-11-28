import { Component } from "@selimbat/vdom-deep-dive";
const MyLib = require('@selimbat/vdom-deep-dive');

export default class PurposeOfReactSlide extends Component {
    render() {
        return (
            <section>
                <h2>Pourquoi utilise-t-on React ?</h2>
                <p>Qu'apporte React par rapport à juste vanilla ?</p>
                <br />
                <ul>
                    <li className="fragment">
                        Abstraction du HTML.
                    </li>
                    <li className="fragment">
                        Ne gérer qu'un seul langage au lieu de HTML/CSS/JS.
                    </li>
                    <li className="fragment">
                        La mise en commun et variabilisation de<br />bouts d'UI devient possible.
                    </li>
                </ul>
            </section>
        )
    }
}