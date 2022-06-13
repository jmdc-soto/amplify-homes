/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Input(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { tekitounatekisuto: {}, Input: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="517px"
      height="66px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      borderRadius="15px"
      padding="10px 9px 9px 9px"
      backgroundColor="rgba(255,223,223,1)"
      {...rest}
      {...getOverrideProps(overrides, "Input")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="tekitounatekisuto"
        {...getOverrideProps(overrides, "tekitounatekisuto")}
      ></Text>
    </Flex>
  );
}
