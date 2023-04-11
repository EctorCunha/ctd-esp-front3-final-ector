import { FormControl, FormLabel, InputProps, Typography } from "@mui/material";
import React from "react";
import { Control, Controller, FieldError, FieldErrors } from "react-hook-form";
import FieldText from ".";

type FieldTextProps = {
  hookError?: FieldError;
  control?: Control<any>;
  name: string;
  defaultValue?: any;
  inputProps: InputProps;
  label?: string;
};

export const FieldController = (props: FieldTextProps) => {
  const { name, label, control, hookError, defaultValue, inputProps } = props;

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
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <FieldText id={name} {...inputProps} {...field} />
        )}
      />
      <Typography fontFamily={"Ubuntu"} color="#F91C1C" fontSize={"15px"}>
        {hookError && hookError?.message}
      </Typography>
    </FormControl>
  );
};
