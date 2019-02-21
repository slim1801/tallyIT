import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import numeral from "numeral";
import costSelector from "../selectors/costSelector";

import {
  onEntryDateTimeChanged,
  onExitDateTimeChanged
} from "../reducers/form";

import { Flex, FlexBox, VerticalAlignFlex } from "../common-styles";
import DateTimePicker from "./DateTimePicker";

const FormRow = styled(FlexBox)`
  padding: 15px;
`;

const FormContainer = styled(Flex)`
  position: relative;
  color: white;
`;

const LabelColumn = styled(VerticalAlignFlex)`
  width: 150px;
`;

export function Body(props) {
  return (
    <FormContainer>
      <FormRow>
        <LabelColumn>Entry Time</LabelColumn>
        <Flex>
          <DateTimePicker
            value={props.entryDateTime}
            onDateTimeChanged={props.onEntryDateTimeChanged}
          />
        </Flex>
      </FormRow>
      <FormRow>
        <LabelColumn>Exit Time</LabelColumn>
        <Flex>
          <DateTimePicker
            value={props.exitDateTime}
            onDateTimeChanged={props.onExitDateTimeChanged}
          />
        </Flex>
      </FormRow>
      <FormRow>
        <LabelColumn>Total</LabelColumn>
        <Flex className="__total">${numeral(props.cost).format("0,0")}</Flex>
      </FormRow>
    </FormContainer>
  );
}

function mapStateToProps(state) {
  const { entryDateTime, exitDateTime } = state.form;
  return { entryDateTime, exitDateTime, cost: costSelector(state) };
}

const mapDispatchToProps = {
  onEntryDateTimeChanged,
  onExitDateTimeChanged
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
