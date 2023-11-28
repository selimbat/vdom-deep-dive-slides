import { Component } from "@selimbat/vdom-deep-dive";
import IntroSlide from "./slides/IntroSlide";
import PurposeOfReactSlide from "./slides/PurposeOfReactSlide";
const MyLib = require('@selimbat/vdom-deep-dive');

export default class App extends Component {
    render() {
        return (
            <div className="reveal">
                <div className="slides">
                    <IntroSlide />
                    <PurposeOfReactSlide />
                </div>
            </div>
        )
    }
}