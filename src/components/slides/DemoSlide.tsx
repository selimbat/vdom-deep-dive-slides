import { Component } from "@selimbat/vdom-deep-dive";
import ToDoListApp from "components/demo/ToDoListApp";
const MyLib = require('@selimbat/vdom-deep-dive');

export default class DemoSlide extends Component {
    render() {
        return (
            <section>
                <h2>L'heure de la démo</h2>
                <ToDoListApp />
            </section>
        )
    }
}