import { Component } from "@selimbat/vdom-deep-dive";
const Buzz = require('@selimbat/vdom-deep-dive');

export default class IntroSlide extends Component {
    render() {
        return (
            <section>
                <h2>Building your own React from scratch</h2>
                <p>By Selim Tirellil</p>
                <br /><br /><br />
                <p className="fragment">
                    Inspired by an{" "}
                    <a href="https://itnext.io/creating-our-own-react-from-scratch-82dd6356676d">article by Wim Jongeneel</a>
                    .
                </p>
            </section>
        )
    }
}