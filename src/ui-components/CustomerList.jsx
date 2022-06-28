/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Radio, TextField, View } from "@aws-amplify/ui-react";
export default function CustomerList(props) {
  const { customer, selected, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <View
      width="848px"
      height="73px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CustomerList")}
    >
      <Radio
        display="flex"
        gap="16px"
        position="absolute"
        top="23px"
        left="23px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="end"
        children={customer?.name}
        {...getOverrideProps(overrides, "Radio")}
      ></Radio>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="18px"
        right="25px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Go"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="18px"
        left="250px"
        direction="column"
        width="503px"
        height="39px"
        padding="0px 0px 0px 0px"
        placeholder="Placeholder"
        size="default"
        isDisabled={true}
        labelHidden={true}
        variation="default"
        value={customer?.url}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
