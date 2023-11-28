import App from "components/App";
import { initReveal } from "initReveal";

const MyLib = require('@selimbat/vdom-deep-dive');

MyLib.renderDOM('root', <App />);

initReveal();
