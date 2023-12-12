import { Component } from "@selimbat/vdom-deep-dive";
import DemoSlide from "./slides/DemoSlide";
import DiffExplanationSlide from "./slides/DiffingExplanationSlide";
import DiffTypesSlide from "./slides/DiffTypesSlide";
import IntroSlide from "./slides/IntroSlide";
import JSXSlide from "./slides/JSXSlide";
import PurposeOfReactSlide from "./slides/PurposeOfReactSlide";
import VDOMTypesSlide from "./slides/VDOMTypesSlide";
const Buzz = require('@selimbat/vdom-deep-dive');

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
                    <DemoSlide />
                </div>
            </div>
        )
    }
}