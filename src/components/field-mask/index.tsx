import React, { forwardRef } from "react";
import InputMask, {
  Props as InputMaskProps,
  ReactInputMask,
} from "react-input-mask";

export type FieldMaskProps = InputMaskProps & {
  name: string;
};

const FieldMaskBase: React.ForwardRefRenderFunction<
  ReactInputMask,
  FieldMaskProps
> = (props: FieldMaskProps, ref): JSX.Element => {
  const { name, ...rest } = props;

  return (
    <InputMask
      style={{
        background: "#D9D9D9",
        borderRadius: "8px",
        color: "#141414",
        fontWeight: "400",
        fontSize: "20px",
        width: "100%",
        height: "45px",
        border: "none",
        padding: "5px 8px",
      }}
      id={name}
      ref={ref}
      name={name}
      {...rest}
    />
  );
};

const FieldMask = forwardRef(FieldMaskBase);

export default FieldMask;
