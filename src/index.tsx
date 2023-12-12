import App from "components/App";
import { initReveal } from "initReveal";

const Buzz = require('@selimbat/vdom-deep-dive');

Buzz.renderDOM('root', <App />);

initReveal();
