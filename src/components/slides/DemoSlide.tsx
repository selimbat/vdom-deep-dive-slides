import { Component } from "@selimbat/vdom-deep-dive";
import ToDoListApp from "components/demo/ToDoListApp";
const MyLib = require('@selimbat/vdom-deep-dive');

const memeAltText = "Xzibit from Pimp My Ride meme saying 'Yo dawg I heard you like React so we put React in your React so you can React while you React'"

export default class DemoSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>L'heure de la démo</h2>
                    <ToDoListApp />
                </section>
                <section>
                    <img src="./public/pimp_my_react.jpg" alt={memeAltText} />
                </section>
            </section>
        )
    }
}