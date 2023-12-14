import { Component } from "@selimbat/vdom-deep-dive";
import ToDoListApp from "components/demo/ToDoListApp";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const memeAltText = "Xzibit from Pimp My Ride meme saying 'Yo dawg I heard you like React so we put React in your React so you can React while you React'"

const APP_COMPONENT_CODE = `
export default class App extends Component {
    render() {
        return (
            <div className="reveal">
                <div className="slides">
                    <IntroSlide />
                    <PurposeOfReactSlide />
                    <VDOMTypesSlide />
                    <JSXSlide />
                    <DiffExplanationSlide />
                    <DiffTypesSlide />
                    <RealDOMSlide />
                    <ComponentClassSlide />
                    <AdaptingCodeBaseSlide />
                    <ComponentUpdateSlide />
                    <DemoSlide />
                    <DigDeeperSlide />
                    <EndSlide />
                </div>
            </div>
        )
    }
}`;

export default class DemoSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>And that's it</h2>
                    <p className="fragment">We have built a stateful and reactive UI library</p>
                    <p className="fragment">Let's try it out!</p>
                </section>
                <section>
                    <p>Actually, <span className="fragment">we already did</span></p>
                    <p className="fragment">This whole presentation a is Buzz App</p>
                    <p className="fragment">And if this is an app,
                        <span className="fragment"> we can do anything in the slides</span>
                    </p>
                </section>
                <section>
                    <ToDoListApp />
                </section>
                <section>
                    <img src="./public/pimp_my_react.jpg" alt={memeAltText} />
                </section>
                <section data-auto-animate>
                    And it actually looks a lot like React code
                    <CodeBlock code={APP_COMPONENT_CODE} lang="typescript" />
                </section>
            </section>
        )
    }
}