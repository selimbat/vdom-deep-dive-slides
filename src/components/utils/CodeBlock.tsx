import { Component } from "@selimbat/vdom-deep-dive";
const Buzz = require('@selimbat/vdom-deep-dive');

type Props = {
    code: string;
    lineHighlights?: string;
    lang?: 'typescript' | 'javascript';
}

export default class CodeBlock extends Component<Props> {
    render() {
        let className = 'hljs';
        if (this.props.lang) {
            className += ` language-${this.props.lang}`;
        }
        return (
            <pre data-id="code-animation">
                <code
                    className={className}
                    data-trim
                    data-line-numbers={this.props.lineHighlights ?? true}
                >
                    {this.props.code}
                </code>
            </pre>
        )
    }
}