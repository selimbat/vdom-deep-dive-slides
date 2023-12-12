import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const MyLib = require('@selimbat/vdom-deep-dive');

const NODE_CODE = `
export interface SkipOperation {
    kind: 'skip';
}

export interface ReplaceOperation {
    kind: 'replace';
    newNode: VDOMNode;
    callback?: (elem: Element | Text) => void;
}

export type AttributesUpdater = {
    set: VDOMAttributes;
    remove: string[];
}

export interface UpdateOperation {
    kind: 'update';
    attributes: AttributesUpdater;
    children: ChildUpdater[];
}

export type VDOMNodeUpdater =
    | SkipOperation
    | UpdateOperation
    | ReplaceOperation
`;

const CHILDREN_CODE = `
export interface RemoveOperation {
    kind: 'remove';
}

export interface InsertOperation {
    kind: 'insert';
    node: VDOMNode;
}

export type ChildUpdater =
    | UpdateOperation
    | ReplaceOperation
    | SkipOperation
    | RemoveOperation
    | InsertOperation
`;

const FUNCTIONS_CODE = `
export const skip = (): SkipOperation => ({
    kind: 'skip',
});

const replace = (newNode: VDOMNode): ReplaceOperation => ({
    kind: 'replace',
    newNode,
});

const remove = (): RemoveOperation => ({
    kind: 'remove',
});

const insert = (newNode: VDOMNode): InsertOperation => ({
    kind: 'insert',
    node: newNode,
});

const update = (oldNode: VDOMElement, newNode: VDOMElement): UpdateOperation => {

    const attributesToRemove: string[] = ...
    const attributesToSet: VDOMAttributes = ...

    const attUpdater: AttributesUpdater = {
        remove: attributesToRemove,
        set: attributesToSet,
    }

    const childrenUpdater: ChildUpdater[] = newChildrenDiff(
        oldNode.children ?? [],
        newNode.children ?? [],
    ); // out of scope

    return {
        kind: 'update',
        attributes: attUpdater,
        children: childrenUpdater,
    }
}
`;

const CREATE_DIFF_CODE = `
export const createDiff = (oldNode: VDOMNode, newNode: VDOMNode): VDOMNodeUpdater => {
    if (oldNode.kind == 'text' && newNode.kind == 'text' && oldNode.value == newNode.value) {
        return skip();
    }

    if (oldNode.kind == 'text' || newNode.kind == 'text') {
        return replace(newNode);
    }

    if (oldNode.tagname !== newNode.tagname) {
        return replace(newNode);
    }

    // get the updated and replaced attributes
    return update(oldNode, newNode);
}
`;

export default class DiffTypesSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>The diff data structure</h2>
                </section>
                <section>
                    <CodeBlock
                        code={NODE_CODE}
                        lang="typescript"
                    />
                </section>
                <section>
                    <CodeBlock
                        code={CHILDREN_CODE}
                        lang="typescript"
                    />
                </section>
                <section>
                    <CodeBlock
                        code={FUNCTIONS_CODE}
                        lang="typescript"
                        lineHighlights="1-3|5-8|10-12|14-17|19-39"
                    />
                </section>
                <section>
                    <CodeBlock
                        code={CREATE_DIFF_CODE}
                        lang="typescript"
                    />
                </section>
            </section>
        )
    }
}