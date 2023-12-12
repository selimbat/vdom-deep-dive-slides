import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const MyLib = require('@selimbat/vdom-deep-dive');

export default class DiffExplanationSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>The diffing algorithm</h2>
                </section>
                <section>
                    <div className="r-stack">
                        <img className="fragment fade-out" data-fragment-index="0" src="./public/html-tree-example.svg" alt="A tree representing the structure of the HTML as it is in the browser." />
                        <img className="fragment" data-fragment-index="0" src="./public/html-tree-example-after-change.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                    </div>
                </section>
                <section>
                    <div>
                        Let's introduce some operations:
                    </div>
                    <ul>
                        <li className="fragment fade-left">Skip</li>
                        <li className="fragment fade-left">Replace</li>
                        <li className="fragment fade-left">Update <span className="fragment">(attributes & children)</span></li>
                        <li className="fragment fade-left">Remove</li>
                        <li className="fragment fade-left">Insert</li>
                    </ul>
                </section>
                <section>
                    <div className="r-stack">
                        <img
                            className="fragment fade-out"
                            src="./public/html-tree-example-step-0.svg"
                            data-fragment-index="1"
                            alt="A tree representing the structure of the HTML with the changes we want to make."
                        />
                        <img className="fragment fade-in-then-out" data-fragment-index="2" src="./public/html-tree-example-step-1.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                        <img className="fragment fade-in-then-out" data-fragment-index="3" src="./public/html-tree-example-step-2.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                        <img className="fragment fade-in-then-out" data-fragment-index="4" src="./public/html-tree-example-step-3.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                        <img className="fragment fade-in-then-out" data-fragment-index="5" src="./public/html-tree-example-step-4.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                        <img className="fragment fade-in-then-out" data-fragment-index="6" src="./public/html-tree-example-step-5.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                        <img className="fragment fade-in-then-out" data-fragment-index="7" src="./public/html-tree-example-step-6.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                        <img className="fragment fade-in-then-out" data-fragment-index="8" src="./public/html-tree-example-step-7.svg" alt="A tree representing the structure of the HTML with the changes we want to make." />
                    </div>

                    <ul style="font-size: 0.8em; padding-top:0.25em;">
                        <li className="fragment fade-left" data-fragment-index="0">Update children (div#root =&gt; div#root)</li>
                        <li className="fragment fade-left" data-fragment-index="2">Replace (text vs input)</li>
                        <li className="fragment fade-left" data-fragment-index="3">Update attributes (input =&gt; input#my-field)</li>
                        <li className="fragment fade-left" data-fragment-index="4">Update children (button)</li>
                        <li className="fragment fade-left" data-fragment-index="5">Replace (text =&gt; new text)</li>
                        <li className="fragment fade-left" data-fragment-index="6">Update children (svg)</li>
                        <li className="fragment fade-left" data-fragment-index="7">Skip (path)</li>
                    </ul>
                </section>
            </section>
        )
    }
}