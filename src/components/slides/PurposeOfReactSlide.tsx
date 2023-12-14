import { Component } from "@selimbat/vdom-deep-dive";
const Buzz = require('@selimbat/vdom-deep-dive');

export default class PurposeOfReactSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>Why bother coding a UI library?</h2>
                    <ul>
                        <li className="fragment fade-left">
                            Better grasp of the inner workings of our tools
                        </li>
                        <li className="fragment fade-left">
                            Understand the revolution reactive libraries & frameworks
                            brought to web development
                        </li>
                        <li className="fragment fade-left">
                            From their limitations, try to foresee the next industry shift?
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Why do we use React at all?</h2>
                    <p>What does React have to offer that vanilla JS doesn't?</p>
                    <br />
                    <ul>
                        <li className="fragment fade-left">
                            HTML abstraction.
                        </li>
                        <li className="fragment fade-left">
                            Dealing with only one language instead of HTML/CSS/JS.
                        </li>
                        <li className="fragment fade-left">
                            Sharing and customizing bits of UI becomes<br />a lot easier.
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}