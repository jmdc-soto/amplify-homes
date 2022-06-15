/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Radio, View } from "@aws-amplify/ui-react";
export default function CustomerList(props) {
  const { customer, cUSTOMER, overrides, ...rest } = props;
  return (
    <View
      width="522px"
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
        top="19px"
        left="23px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="end"
        children={cUSTOMER?.name}
        {...getOverrideProps(overrides, "Radio")}
      ></Radio>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="21px"
        right="25px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Go"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}