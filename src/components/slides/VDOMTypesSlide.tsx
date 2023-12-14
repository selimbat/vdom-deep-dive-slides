import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const EXAMPLE_HTML = `
<div id="root">
    Enter your favorite number
    <input type="number" />
    <button>
        Submit
        <svg class="icon"><path /></svg>
    </button>
</div>
`;

const CODE = `
export type VDOMAttributes = {
    [_: string]: string | number | boolean | ((_: any) => any);
};    

export type VDOMElement = {
    kind: 'element';
    tagname: string;
    props?: VDOMAttributes;
    children: VDOMNode[];
    key: string | number;
};    

export type VDOMText = {
    kind: 'text';
    value: string;
    key: string | number;
};    

export type VDOMNode = VDOMElement | VDOMText; 
`;

export default class VDOMTypesSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>In the beginning there were types</h2>
                </section>
                <section>
                    Lets consider this HTML structure
                    <CodeBlock code={EXAMPLE_HTML} />
                </section>
                <section>
                    <img src="./public/html-tree-example.svg" alt="A tree representing the structure of the HTML of the previous slide" />
                </section>
                <section>
                    <CodeBlock
                        code={CODE}
                        lang="typescript"
                        lineHighlights="1-19|13-17|5-11|1-3"
                    />
                </section>
            </section>
        )
    }
}