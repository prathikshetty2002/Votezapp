import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[48px] md:text-[48px] text-[64px]",
  h2: "font-normal sm:text-[35px] md:text-[41px] text-[45px]",
  h3: "font-normal sm:text-[36px] md:text-[38px] text-[40px]",
  h4: "font-normal sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-normal sm:text-[21px] md:text-[23px] text-[25px]",
  h6: "font-normal sm:text-[19px] md:text-[21px] text-[23px]",
  body1: "sm:text-[18px] md:text-[20px] text-[22px]",
  body2: "font-normal sm:text-[17px] md:text-[19px] text-[21px]",
  body3: "font-normal text-[20px]",
  body4: "text-[18px]",
  body5: "font-normal text-[115px] sm:text-[48px] md:text-[48px]",
  body6: "font-normal text-[100px] sm:text-[48px] md:text-[48px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
