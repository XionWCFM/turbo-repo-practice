import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@xionwcfm/types/polymorphic";
import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, type ReactNode, forwardRef } from "react";
import type { PolimophicWithSpacingSystemProps } from "../box/index.js";
import { cn } from "../cn/index.js";
import type { SemanticHTMLContentSectionType } from "../types/index.js";

const stackVariants = cva(" flex ", {
  variants: {
    direction: {
      default: "",
      row: "flex-row",
      column: "flex-col",
      "revers-row": " flex-row-reverse",
      "reverse-column": " flex-col-reverse",
    },
    w: {
      default: "",
      "0": "w-0",
      "4": "w-4",
      "8": "w-8",
      "12": "w-12",
      "16": "w-16",
      "20": "w-20",
      "24": "w-24",
      "28": "w-28",
      "32": "w-32",
      "36": "w-36",
      "40": "w-40",
      "44": "w-44",
      "48": "w-48",
      "64": "w-64",
      "76": "w-76",
      "88": "w-88",
      "100": "w-100",
      "128": "w-128",
      "256": "w-256",
      "512": "w-512",
      "768": " w-768",
      "1024": " w-1024",
      "1440": " w-1440",
      "50%": " w-1/2",
      "100%": " w-full",
      screen: "w-screen",
    },
    h: {
      default: "",
      "0": "h-0",
      "4": "h-4",
      "8": "h-8",
      "12": "h-12",
      "16": "h-16",
      "20": "h-20",
      "24": "h-24",
      "28": "h-28",
      "32": "h-32",
      "36": "h-36",
      "40": "h-40",
      "44": "h-44",
      "48": "h-48",
      "64": "h-64",
      "76": "h-76",
      "88": "h-88",
      "100": "h-100",
      "128": "h-128",
      "256": "h-256",
      "512": "h-512",
      "768": " h-768",
      "1024": " h-1024",
      "1440": " h-1440",
      "50%": " h-1/2",
      "100%": " h-full",
      screen: "h-screen",
    },
    gap: {
      default: "",
      "0": "gap-0",
      "4": "gap-4",
      "8": "gap-8",
      "12": "gap-12",
      "16": "gap-16",
      "20": "gap-20",
      "24": "gap-24",
      "28": "gap-28",
      "32": "gap-32",
      "36": "gap-36",
      "40": "gap-40",
      "44": "gap-44",
      "48": "gap-48",
    },
  },

  defaultVariants: {
    direction: "column",
    w: "default",
    h: "default",
    gap: "default",
  },
});

type Props<C extends ElementType> = PolimophicWithSpacingSystemProps<C> & VariantProps<typeof stackVariants>;

type StackType = <C extends ElementType = SemanticHTMLContentSectionType>(
  props: PolymorphicComponentPropsWithRef<C, Props<C>>,
) => ReactNode | null;

export const Stack: StackType = forwardRef(function Stack<C extends ElementType = "div">(
  { children, as, className, direction, gap, w, h, ...rest }: Props<C>,
  ref?: PolymorphicRef<C>,
) {
  const Component = as || "div";

  return (
    <Component ref={ref} className={cn(stackVariants({ direction, gap, w, h }), className)} {...rest}>
      {children}
    </Component>
  );
});
