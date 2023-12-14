import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const SIGNATURE_APPLY_DIFF_CODE = `
// Applies the given transformations to a DOM element and returns it.
export const applyDiff = (elem: Element | Text, diff: VDOMNodeUpdater): Element | Text => {
}
`;

const SIGNATURE_RENDER_ELEMENT_CODE = `
// Creates a DOM node from a VDOM node.
const renderElement = (rootNode: VDOMNode): Element | Text => {
}

// Applies the given transformations to a DOM element and returns it.
export const applyDiff = (elem: Element | Text, diff: VDOMNodeUpdater): Element | Text => {
}
`;

const IMPLEM_RENDER_ELEMENT_CODE = `
// Creates a DOM node from a VDOM node.
const renderElement = (rootNode: VDOMNode): Element | Text => {
    if (rootNode.kind == 'text') {
        return document.createTextNode(rootNode.value);
    }

    const elem = document.createElement(rootNode.tagname)

    for (const att in (rootNode.props ?? {})) {
        elem[att] = rootNode.props?.[att];
    }

    (rootNode.children ?? []).forEach(child =>
        elem.appendChild(renderElement(child))
    )

    return elem;
}

// Applies the given transformations to a DOM element and returns it.
export const applyDiff = (elem: Element | Text, diff: VDOMNodeUpdater): Element | Text => {
}
`;

const IMPLEM_APPLY_DIFF_CODE = `
// Creates a DOM node from a VDOM node.
const renderElement = (rootNode: VDOMNode): Element | Text => {
    if (rootNode.kind == 'text') {
        return document.createTextNode(rootNode.value);
    }

    const elem = document.createElement(rootNode.tagname)

    for (const att in (rootNode.props ?? {})) {
        elem[att] = rootNode.props?.[att];
    }

    (rootNode.children ?? []).forEach(child =>
        elem.appendChild(renderElement(child))
    )

    return elem;
}

// Applies the given transformations to a DOM element and returns it.
export const applyDiff = (elem: Element | Text, diff: VDOMNodeUpdater): Element | Text => {
    if (diff.kind == 'skip') return elem;

    if (diff.kind == 'replace') {
        const newElem = renderElement(diff.newNode);
        elem.replaceWith(newElem);
        return newElem;
    }

    // here diff.kind === 'update'
    for (const att in diff.attributes.remove) {
        elem.removeAttribute(att);
    }

    for (const att in diff.attributes.set) {
        elem[att] = diff.attributes.set[att];
    }

    applyChildrenDiff(elem, diff.children); // out of scope

    return elem;
}
`;


export default class RealDOMSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>Dealing with the real DOM</h2>
                </section>
                <section data-auto-animate>
                    Now that we have the operations from the diffing algorithm, we need to apply them to the DOM.
                    <CodeBlock code={SIGNATURE_APPLY_DIFF_CODE} />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={SIGNATURE_RENDER_ELEMENT_CODE} />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={IMPLEM_RENDER_ELEMENT_CODE} />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={IMPLEM_APPLY_DIFF_CODE} lineHighlights="20-42" />
                </section>
            </section>
        )
    }
}