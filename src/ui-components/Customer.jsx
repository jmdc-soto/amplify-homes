/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function Customer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="489px"
      height="468px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Customer")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="30px"
        left="38px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="顧客"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField32132701")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="138px"
        left="38px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="納品ID"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField32132708")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="246px"
        left="38px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="そのた"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField32132715")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="375px"
        left="98px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="ぼたん"
        {...getOverrideProps(overrides, "Button32152700")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="22px"
        right="20px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="X"
        {...getOverrideProps(overrides, "Button32162713")}
      ></Button>
    </View>
  );
}
