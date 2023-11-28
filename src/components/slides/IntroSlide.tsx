import { Component } from "@selimbat/vdom-deep-dive";
const MyLib = require('@selimbat/vdom-deep-dive');

export default class IntroSlide extends Component {
    render() {
        return (
            <section>
                <h2>Building your own React from scratch</h2>
                <p>By Selim Tirellil</p>
                <br /><br /><br />
                <figure style="font-size:large;">
                    <blockquote>
                        <p>Why bother with tools when you can do it with Javascript?</p>
                    </blockquote>
                    <figcaption>—Karl Marx, <cite><em>Everything JS</em></cite></figcaption>
                </figure>
            </section>
        )
    }
}