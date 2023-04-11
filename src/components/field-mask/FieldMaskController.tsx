import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import FieldMaskBase, { FieldMaskProps } from "./index";
import { FormControl, FormLabel, InputProps, Typography } from "@mui/material";

type FieldMaskController = FieldMaskProps & {
  hookError?: FieldError;
  control?: Control<any>;
  name: string;
  defaultValue?: any;
  inputProps: InputProps;
  label?: string;
};

const FieldInputMaskController: React.FC<FieldMaskController> = ({
  name,
  label,
  control,
  hookError,
  defaultValue,
  inputProps,
  ...rest
}) => {
  return (
    <FormControl
      sx={{
        border: "none",
        width: "100%",
        boxSizing: "border-box",
      }}
      error={!!hookError}
      fullWidth
    >
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <FieldMaskBase
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            {...rest}
          />
        )}
      />

      <Typography fontFamily={"Ubuntu"} color="#F91C1C" fontSize={"15px"}>
        {hookError && hookError?.message}
      </Typography>
    </FormControl>
  );
};

export default FieldInputMaskController;
