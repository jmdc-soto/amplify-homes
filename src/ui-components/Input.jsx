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
import { Customer } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function Input(props) {
  const { customer, overrides, ...rest } = props;
  const [
    textFieldThreeTwoThreeZeroTwoSevenFourTwoValue,
    setTextFieldThreeTwoThreeZeroTwoSevenFourTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoThreeZeroTwoSevenFiveSixValue,
    setTextFieldThreeTwoThreeZeroTwoSevenFiveSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeTwoThreeZeroTwoSevenFourNineValue,
    setTextFieldThreeTwoThreeZeroTwoSevenFourNineValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      num: textFieldThreeTwoThreeZeroTwoSevenFourTwoValue,
      name: textFieldThreeTwoThreeZeroTwoSevenFiveSixValue,
      url: textFieldThreeTwoThreeZeroTwoSevenFourNineValue,
    },
    model: Customer,
    schema: schema,
  });
  useEffect(() => {
    if (
      textFieldThreeTwoThreeZeroTwoSevenFiveSixValue === "" &&
      customer !== undefined &&
      customer?.name !== undefined
    )
      setTextFieldThreeTwoThreeZeroTwoSevenFiveSixValue(customer?.name);
  }, [customer]);
  return (
    <View
      width="475px"
      height="548px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Input")}
    >
      <TextField
        display="flex"
        position="absolute"
        top="69px"
        left="40px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="顧客番号"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoThreeZeroTwoSevenFourTwoValue}
        onChange={(event) => {
          setTextFieldThreeTwoThreeZeroTwoSevenFourTwoValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32302742")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="205px"
        left="40px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="顧客名称"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoThreeZeroTwoSevenFiveSixValue}
        onChange={(event) => {
          setTextFieldThreeTwoThreeZeroTwoSevenFiveSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField32302756")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="341px"
        left="40px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="URL"
        placeholder="Placeholder"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeTwoThreeZeroTwoSevenFourNineValue}
        onChange={(event) => {
          setTextFieldThreeTwoThreeZeroTwoSevenFourNineValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField32302749")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        bottom="34px"
        right="44px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        size="large"
        isDisabled={false}
        variation="primary"
        children="登録"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
