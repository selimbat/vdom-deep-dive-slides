import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const SET_STATE_CODE_0 = `
export abstract class Component<P, S> {

    protected setState(updater: ((s: S) => S)) {
    }
}
`;

const SET_STATE_CODE_1 = `
export abstract class Component<P, S> {
    
    protected setState(updater: ((s: S) => S)) {
        if (!this.mountedElement) {
            throw new Error("Updating an unmounted component");
        }
        const newState = updater(this.state);
        if (newState !== this.state) {
            this.state = newState;
            const diff = this.getUpdateDiff();
            applyDiff(this.mountedElement, diff);
        }
    }
}
`;

const SET_STATE_CODE_2 = `
export abstract class Component<P, S> {
    
    private getUpdateDiff(): VDOMNodeUpdater {
        const newRootNode = this.render();
        const diff = createDiff(this.currentRootNode, newRootNode);
        this.currentRootNode = newRootNode;
        requestAnimationFrame(() => this.componentDidUpdate());
        return diff;
    }

    protected setState(updater: ((s: S) => S)) {
        if (!this.mountedElement) {
            throw new Error("Updating an unmounted component");
        }
        const newState = updater(this.state);
        if (newState !== this.state) {
            this.state = newState;
            const diff = this.getUpdateDiff();
            applyDiff(this.mountedElement, diff);
        }
    }
}
`;

const SET_PROPS_CODE_0 = `
export abstract class Component<P, S> {
    
    private getUpdateDiff(): VDOMNodeUpdater { /* */ }

    protected setState(updater: ((s: S) => S)) { /* */ }

    public setProps(props: P): VDOMNodeUpdater {
    }
}
`;

const SET_PROPS_CODE_1 = `
export abstract class Component<P, S> {
    
    private getUpdateDiff(): VDOMNodeUpdater { /* */ }

    protected setState(updater: ((s: S) => S)) { /* */ }

    public setProps(props: P): VDOMNodeUpdater {
        if (!this.mountedElement) {
            throw new Error("Setting the props of an unmounted component");
        }
        if (props !== this.props) {
            this.props = props;
            return this.getUpdateDiff();
        }
        return skip();
    }
}
`;

export default class ComponentUpdateSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>Finally make the Components reactive</h2>
                </section>
                <section>
                    <h2>Component updates with state changes</h2>
                </section>
                <section data-auto-animate>
                    <CodeBlock code={SET_STATE_CODE_0} lang="typescript" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={SET_STATE_CODE_1} lang="typescript" lineHighlights="1-14|8|7-12|10" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={SET_STATE_CODE_2} lang="typescript" lineHighlights="3-9|7" />
                </section>
                <section>
                    <h2>Component updates with props changes</h2>
                </section>
                <section data-auto-animate>
                    <CodeBlock code={SET_PROPS_CODE_0} lang="typescript" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={SET_PROPS_CODE_1} lang="typescript" lineHighlights="7-16|11" />
                </section>
            </section>
        )
    }
}