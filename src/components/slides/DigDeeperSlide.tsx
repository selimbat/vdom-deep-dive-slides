import { Component } from "@selimbat/vdom-deep-dive";
const Buzz = require('@selimbat/vdom-deep-dive');


export default class DigDeeperSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>To dig deeper</h2>
                    <p className="fragment">Things this presentation didn't cover.</p>
                </section>
                <section>
                    <ul>
                        <li className="fragment fade-left">Children reconciliation</li>
                        <li className="fragment fade-left">Keeping track of references to DOM element and component instances</li>
                        <li className="fragment fade-left">JSX support</li>
                        <li className="fragment fade-left">Asynchronous (non-blocking) diffing and rendering</li>
                        <li className="fragment fade-left">Functional components and hooks (Fiber tree)</li>
                    </ul>
                    <p className="fragment">
                        Check out{" "}
                        <a href="https://itnext.io/creating-our-own-react-from-scratch-82dd6356676d">the article by Wim Jongeneel</a>
                        {" "}that inspired this presentation.
                    </p>
                </section>
            </section>
        )
    }
}