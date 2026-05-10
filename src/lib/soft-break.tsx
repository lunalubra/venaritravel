import {
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
} from "react";

/**
 * Replaces a literal "|" character in heading text with a desktop-only
 * line break. Editors can mark a deliberate wrap point in Prismic copy
 * (e.g. "Sentence one. |Sentence two.") and the rule will only apply at
 * the lg breakpoint. On smaller screens the text falls back to natural
 * wrapping; the trailing space before "|" is preserved so the reading
 * flow stays correct on mobile.
 *
 * Recursively traverses the React tree so the marker is found even when
 * PrismicRichText wraps each line in its own component.
 */
export const withSoftBreaks = (children: ReactNode): ReactNode => {
  let counter = 0;

  const splitString = (text: string): ReactNode => {
    const parts = text.split("|");
    return parts.map((part, i) => (
      <Fragment key={`sb-${counter++}`}>
        {i > 0 ? <br className="hidden lg:inline" /> : null}
        {part}
      </Fragment>
    ));
  };

  const visit = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.includes("|") ? splitString(node) : node;
    }
    if (Array.isArray(node)) {
      return node.map((child) => visit(child));
    }
    if (isValidElement(node)) {
      const props = node.props as { children?: ReactNode } | null | undefined;
      if (props && props.children !== undefined) {
        return cloneElement(
          node,
          undefined,
          visit(props.children) as ReactNode,
        );
      }
      return node;
    }
    return node;
  };

  return visit(children);
};
