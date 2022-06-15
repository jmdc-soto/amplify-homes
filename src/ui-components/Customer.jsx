/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { CUSTOMER } from "../models";
import { schema } from "../models/schema";
import { TextField, View } from "@aws-amplify/ui-react";
export default function Customer(props) {
  const { customer, overrides, ...rest } = props;
  const [
    textFieldThreeTwoOneThreeTwoSevenZeroOneValue,
    setTextFieldThreeTwoOneThreeTwoSevenZeroOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoOneThreeTwoSevenOneFiveValue,
    setTextFieldThreeTwoOneThreeTwoSevenOneFiveValue,
  ] = useStateMutationAction("");
  const customerOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldThreeTwoOneThreeTwoSevenZeroOneValue,
      other: textFieldThreeTwoOneThreeTwoSevenOneFiveValue,
    },
    model: CUSTOMER,
    schema: schema,
  });
  return (
    <View
      width="1235px"
      height="564px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        customerOnClick();
      }}
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
        value={textFieldThreeTwoOneThreeTwoSevenZeroOneValue}
        onChange={(event) => {
          setTextFieldThreeTwoOneThreeTwoSevenZeroOneValue(event.target.value);
        }}
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
        value={textFieldThreeTwoOneThreeTwoSevenOneFiveValue}
        onChange={(event) => {
          setTextFieldThreeTwoOneThreeTwoSevenOneFiveValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32132715")}
      ></TextField>
    </View>
  );
}
