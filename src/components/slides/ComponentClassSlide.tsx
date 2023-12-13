import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const BASIC_CODE = `
export abstract class Component<P, S> {

    protected props: P;
    protected state: S;

    protected setState(updater: ((s: S) => S)) { }

    // the render function each component has to implement
    public abstract render(): VDOMNode
}
`;

const PRIVATE_PROPERTIES_CODE = `
export abstract class Component<P, S> {

    protected props: P;
    protected state: S;

    private currentRootNode: VDOMNode;
    private mountedElement: Element | Text | null;

    protected setState(updater: ((s: S) => S)) { }

    // the render function each component has to implement
    public abstract render(): VDOMNode
}
`;

const LIFE_CYCLE_HOOKS_CODE = `
export abstract class Component<P, S> {

    protected props: P;
    protected state: S;

    private currentRootNode: VDOMNode;
    private mountedElement: Element | Text | null;

    protected setState(updater: ((s: S) => S)) { }

    // life-cycle hooks
    public componentDidMount() { }
    public componentWillReceiveProps(props: P, state: S): S { return state }
    public componentDidUpdate() { }
    public componentWillUnmount() { }

    // the render function each component has to implement
    public abstract render(): VDOMNode
}
`;


const FINAL_CLASS_CODE = `
export abstract class Component<P, S> {

    protected props: P;
    protected state: S;

    private currentRootNode: VDOMNode;
    private mountedElement: Element | Text | null;

    protected setState(updater: ((s: S) => S)) { }

    // called when the mounted element recieves new props
    public setProps(props: P): VDOMNodeUpdater { }

    // called when mounting the element to generate the first VDOM state
    public initProps(props: P): VDOMNode { }

    // called when the component is mounted in the real DOM
    public notifyMounted(elem: Element | Text) { }

    // called when the component will be unmounted in the real DOM
    public unmount() { }

    // life-cycle hooks
    public componentDidMount() { }
    public componentWillReceiveProps(props: P, state: S): S { return state }
    public componentDidUpdate() { }
    public componentWillUnmount() { }

    // the render function each component has to implement
    public abstract render(): VDOMNode
}
`;

export default class RealDOMSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>Wait... ! <span className="fragment">I though there were components in React</span></h2>
                </section>
                <section>
                    <img src="./public/rendering-workflow.svg" alt="" />
                </section>
                <section>
                    <img src="./public/component-architecture.svg" alt="" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={BASIC_CODE} lineHighlights="1-10|3-4|9|6" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={PRIVATE_PROPERTIES_CODE} lineHighlights="6-7" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={LIFE_CYCLE_HOOKS_CODE} lineHighlights="11-15" />
                </section>
                <section data-auto-animate>
                    <CodeBlock code={FINAL_CLASS_CODE} lineHighlights="11-12|14-15|17-18|20-21" />
                </section>
            </section>
        )
    }
}