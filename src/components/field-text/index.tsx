import { Input, InputProps } from "@mui/material";
import React from "react";

const FieldText: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> =
  (props: InputProps, ref): JSX.Element => {
    const { ...rest } = props;

    return (
      <Input
        ref={ref}
        sx={{
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
        disableUnderline
        margin="none"
        {...rest}
      />
    );
  };

export default React.forwardRef(FieldText);
