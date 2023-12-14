import { Component } from "@selimbat/vdom-deep-dive";
import CodeBlock from "components/utils/CodeBlock";
const Buzz = require('@selimbat/vdom-deep-dive');

const PRE_JSX_PROCESS_CODE = `
export default class App extends Component {
    render() {
        return (
            <div id="root">
                Enter your favorite number
                <input type="number" />
                <button>
                    Submit
                    <svg class="icon"><path /></svg>
                </button>
            </div>
        );
    }
}
`;

const POST_JSX_PROCESS_CODE = `
export default class App extends Component {
    render() {
        return React.createElement("div",
            { id: "root" },
            "Enter your favorite number",
            React.createElement("input",
                { type: "number" }
            ),
            React.createElement("button",
                null,
                "Submit",
                React.createElement("svg",
                    { class: "icon" },
                    React.createElement("path",
                        null,
                    )
                )
            )
        );
    }
}
`;
const POST_JSX_PROCESS_CUSTOM_LIB_CODE = `
export default class App extends Component {
    render() {
        return Buzz.createElement("div",
            { id: "root" },
            "Enter your favorite number",
            Buzz.createElement("input",
                { type: "number" }
            ),
            Buzz.createElement("button",
                null,
                "Submit",
                Buzz.createElement("svg",
                    { class: "icon" },
                    Buzz.createElement("path",
                        null,
                    )
                )
            )
        );
    }
}
`;

const FUN_FACT_JSX_BEFORE_CODE = `
export default class App extends Component {
    render() {
        return (
            <div id="root">
                <MyComponent>
                <myComponent> {/* Why is this forbidden? */}
            </div>
        );
    }
}
`;

const FUN_FACT_JSX_AFTER_CODE = `
export default class App extends Component {
    render() {
        return React.createElement("div",
            { id: "root" },
            React.createElement(MyComponent, null),
            React.createElement("myComponent", null),
        );
    }
}
`;


const JSX_FUNCTIONS_CODE_1 = `
const createText = (value: string | number | boolean, key: string = ''): VDOMText => ({
});

export const createElement = (
    tagname: string,
    props: VDOMAttributes & { key: string | number },
    ...children: (VDOMNode | string)[]
): VDOMElement => {
};
`;

const JSX_FUNCTIONS_CODE_2 = `
const createText = (value: string | number | boolean, key: string = ''): VDOMText => ({
    kind: 'text',
    key,
    value: value.toString(),
});

export const createElement = (
    tagname: string,
    props: VDOMAttributes & { key: string | number },
    ...children: (VDOMNode | string)[]
): VDOMElement => {
};
`;
const JSX_FUNCTIONS_CODE_3 = `
const createText = (value: string | number | boolean, key: string = ''): VDOMText => ({
    kind: 'text',
    key,
    value: value.toString(),
});

export const createElement = (
    tagname: string,
    props: VDOMAttributes & { key: string | number },
    ...children: (VDOMNode | string)[]
): VDOMElement => {
    const key = props.key;
    const propsToPass: VDOMAttributes = props;
    delete propsToPass.key;

    const processedChildren = children.map(ch => {
        if (typeof ch !== 'string') return ch;
        return createText(ch)
    })

    return ({
        kind: 'element',
        tagname,
        props: propsToPass,
        children: processedChildren,
        key
    })
};
`;

export default class JSXSlide extends Component {
    render() {
        return (
            <section>
                <section>
                    <h2>What is JSX?</h2>
                </section>
                <section>
                    Let's take the same example
                    <CodeBlock code={PRE_JSX_PROCESS_CODE} />
                </section>
                <section data-auto-animate>
                    Babel parses and transforms it into this:
                    <CodeBlock code={POST_JSX_PROCESS_CODE} />
                </section>
                <section data-auto-animate>
                    But we want this:
                    <CodeBlock code={POST_JSX_PROCESS_CUSTOM_LIB_CODE} />
                </section>
                <section>
                    <h2>Fun fact</h2>
                </section>
                <section data-auto-animate>
                    <h3>Fun fact</h3>
                    <CodeBlock code={FUN_FACT_JSX_BEFORE_CODE} />
                </section>
                <section data-auto-animate>
                    <h3>Fun fact</h3>
                    <CodeBlock code={FUN_FACT_JSX_AFTER_CODE} />
                </section>
                <section>
                    So let's implement createElement
                </section>
                <section data-auto-animate>
                    <CodeBlock
                        code={JSX_FUNCTIONS_CODE_1}
                        lang="typescript"
                        lineHighlights="1-9|4-9|1-2"
                    />
                </section>
                <section data-auto-animate>
                    <CodeBlock
                        code={JSX_FUNCTIONS_CODE_2}
                        lang="typescript"
                        lineHighlights="1-5"
                    />
                </section>
                <section data-auto-animate>
                    <CodeBlock
                        code={JSX_FUNCTIONS_CODE_3}
                        lang="typescript"
                        lineHighlights="7-28"
                    />
                </section>
            </section>
        )
    }
}