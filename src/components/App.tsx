import { Component } from "@selimbat/vdom-deep-dive";
import AdaptingCodeBaseSlide from "./slides/AdaptingCodeBaseSlide";
import ComponentClassSlide from "./slides/ComponentClassSlide";
import ComponentUpdateSlide from "./slides/ComponentUpdateSlide";
import DemoSlide from "./slides/DemoSlide";
import DiffExplanationSlide from "./slides/DiffingExplanationSlide";
import DiffTypesSlide from "./slides/DiffTypesSlide";
import DigDeeperSlide from "./slides/DigDeeperSlide";
import EndSlide from "./slides/EndSlide";
import IntroSlide from "./slides/IntroSlide";
import JSXSlide from "./slides/JSXSlide";
import PurposeOfReactSlide from "./slides/PurposeOfReactSlide";
import RealDOMSlide from "./slides/RealDOMSlide";
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
}