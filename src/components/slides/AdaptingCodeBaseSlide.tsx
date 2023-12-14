import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const COMPONENT_TYPE_CODE_0 = `
export type VDOMNode =
    | VDOMElement
    | VDOMText;
`;
const COMPONENT_TYPE_CODE_1 = `
export type VDOMNode =
    | VDOMComponent
    | VDOMElement
    | VDOMText;
`;

const COMPONENT_TYPE_CODE_2 = `
export type VDOMComponent<P extends ComponentProps = ComponentProps> = {
    kind: 'component';
    key: string | number;
    instance: Component | null;
    props: P;
    component: { new(): Component };
}

export type VDOMNode =
    | VDOMComponent
    | VDOMElement
    | VDOMText;
`;

const RENDER_ELEMENT_CODE_0 = `
const renderElement = (rootNode: VDOMNode): Element | Text => {

    // create a Text DOM element from a VDOMText

    // create a DOM element from a VDOMElement 
}
`;

const RENDER_ELEMENT_CODE_1 = `
const renderElement = (rootNode: VDOMNode): Element | Text => {

    // create a Text DOM element from a VDOMText

    if (rootNode.kind === 'component') {
        let nodeToRender: VDOMNode;
        if (rootNode.instance) {
            // re-rendering an already existing component
            nodeToRender = rootNode.instance.render();
        } else {
            // first render of a component
            rootNode.instance = new rootNode.component();
            nodeToRender = rootNode.instance.initProps(rootNode.props);
        }

        const elem = renderElement(nodeToRender);
        rootNode.instance.notifyMounted(elem);
        return elem;
    }

    // create a DOM element from a VDOMElement 
}
`;

const CREATE_DIFF_CODE_0 = `
export const createDiff = (oldNode: VDOMNode, newNode: VDOMNode): VDOMNodeUpdater => {

    // Handle diff for text nodes.

    // Handle diff for VDOMElements.
}
`;

const CREATE_DIFF_CODE_1 = `
export const createDiff = (oldNode: VDOMNode, newNode: VDOMNode): VDOMNodeUpdater => {

    // Handle diff for text nodes.

    if (
        oldNode.kind == 'component' &&
        newNode.kind == 'component' &&
        oldNode.component == newNode.component &&
        oldNode.instance
    ) {
        // Old node and new node are the same component.
        newNode.instance = oldNode.instance
        if (newNode.props == oldNode.props) {
            return skip()
        }
        return newNode.instance.setProps(newNode.props);
    }

    // Handle diff for VDOMElements.
}
`;

const CREATE_DIFF_CODE_2 = `
export const createDiff = (oldNode: VDOMNode, newNode: VDOMNode): VDOMNodeUpdater => {

    // Handle diff for text nodes.

    if (
        oldNode.kind == 'component' &&
        newNode.kind == 'component' &&
        oldNode.component == newNode.component &&
        oldNode.instance
    ) {
        // Old node and new node are the same component.
        newNode.instance = oldNode.instance
        if (newNode.props == oldNode.props) {
            return skip()
        }
        return newNode.instance.setProps(newNode.props);
    }

    if (newNode.kind == 'component') {
        // New node is a component and is unrelated with the old node.
        newNode.instance == new newNode.component()
        return replace(newNode.instance!.initProps(newNode.props));
    }

    // Handle diff for VDOMElements.
}
`;

const CREATE_DIFF_CODE_3 = `
export const createDiff = (oldNode: VDOMNode, newNode: VDOMNode): VDOMNodeUpdater => {

    // Handle diff for text nodes.

    if (
        oldNode.kind == 'component' &&
        newNode.kind == 'component' &&
        oldNode.component == newNode.component &&
        oldNode.instance
    ) {
        // Old node and new node are the same component.
        newNode.instance = oldNode.instance
        if (newNode.props == oldNode.props) {
            return skip()
        }
        return newNode.instance.setProps(newNode.props);
    }

    if (newNode.kind == 'component') {
        // New node is a component and is unrelated with the old node.
        newNode.instance == new newNode.component()
        return replace(newNode.instance!.initProps(newNode.props));
    }

    if (oldNode.kind == 'component') {
        // And don't forget to clean up
        oldNode.instance?.unmount()
        oldNode.instance = null
        return replace(newNode);
    }

    // Handle diff for VDOMElements.
}
`;


export default class AdaptingCodeBaseSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>Accounting for components in our code base</h2>
                </section>
                <section data-auto-animate>
                    A VDOM node can now be a component as well
                    <CodeBlock code={COMPONENT_TYPE_CODE_0} lang="typescript" />
                </section>
                <section data-auto-animate>
                    A VDOM node can now be a component as well
                    <CodeBlock code={COMPONENT_TYPE_CODE_1} lang="typescript" />
                </section>
                <section data-auto-animate>
                    A VDOM node can now be a component as well
                    <CodeBlock code={COMPONENT_TYPE_CODE_2} lang="typescript" />
                </section>
                <section data-auto-animate>
                    Adapt our renderElement function
                    <CodeBlock code={RENDER_ELEMENT_CODE_0} lang="typescript" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={RENDER_ELEMENT_CODE_1} lang="typescript" lineHighlights="1-22|7-9|10-14|15-18" />
                </section>
                <section data-auto-animate>
                    Account for components in the diffing function
                    <CodeBlock code={CREATE_DIFF_CODE_0} lang="typescript" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={CREATE_DIFF_CODE_1} lang="typescript" lineHighlights="5-17" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={CREATE_DIFF_CODE_2} lang="typescript" lineHighlights="19-23" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={CREATE_DIFF_CODE_3} lang="typescript" lineHighlights="25-30" />
                </section>
            </section>
        )
    }
}