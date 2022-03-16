import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Step } from './Step';
import { StepperProps } from './types';

export const Stepper: React.FC<StepperProps> = ({
  activeStep,
  steps,
  disabledSteps,
  activeColor,
  completeColor,
  defaultColor,
  circleFontColor,
  activeTitleColor,
  completeTitleColor,
  defaultTitleColor,
  size,
  circleFontSize,
  titleFontSize,
  circleTop,
  titleTop,
  completeOpacity,
  activeOpacity,
  defaultOpacity,
  completeTitleOpacity,
  activeTitleOpacity,
  defaultTitleOpacity,
  barStyle,
  defaultBorderColor,
  completeBorderColor,
  activeBorderColor,
  defaultBorderStyle,
  completeBorderStyle,
  activeBorderStyle,
  defaultBarColor,
  completeBarColor,
  lineMarginOffset,
  defaultBorderWidth,
  borderStyle,
}) => {
  return (
    <>
      <Flex flexDir="column" p={0} minH={0} w="100%" align="center">
        <Box display="table" w="100%" m="auto 0">
          {steps.map((step, index) => (
            <Step
              borderStyle={borderStyle}
              key={index}
              width={100 / steps.length}
              title={step.title}
              icon={step.icon}
              href={step.href}
              onClick={step.onClick}
              active={
                !(disabledSteps || []).includes(index) && index === activeStep
              }
              completed={
                !(disabledSteps || []).includes(index) &&
                index < (activeStep || 0)
              }
              first={index === 0}
              isLast={index === steps.length - 1}
              index={index}
              activeColor={activeColor}
              completeColor={completeColor}
              defaultColor={defaultColor}
              circleFontColor={circleFontColor}
              activeTitleColor={activeTitleColor}
              completeTitleColor={completeTitleColor}
              defaultTitleColor={defaultTitleColor}
              size={size}
              circleFontSize={circleFontSize}
              titleFontSize={titleFontSize}
              circleTop={circleTop}
              titleTop={titleTop}
              defaultOpacity={defaultOpacity}
              completeOpacity={completeOpacity}
              activeOpacity={activeOpacity}
              defaultTitleOpacity={defaultTitleOpacity}
              completeTitleOpacity={completeTitleOpacity}
              activeTitleOpacity={activeTitleOpacity}
              barStyle={barStyle}
              defaultBorderColor={defaultBorderColor}
              completeBorderColor={completeBorderColor}
              activeBorderColor={activeBorderColor}
              defaultBorderStyle={defaultBorderStyle}
              defaultBorderWidth={defaultBorderWidth}
              completeBorderStyle={completeBorderStyle}
              activeBorderStyle={activeBorderStyle}
              defaultBarColor={defaultBarColor}
              completeBarColor={completeBarColor}
              lineMarginOffset={lineMarginOffset}
            />
          ))}
        </Box>
      </Flex>
      <Flex mt={10} flexDir="column">
        {steps[activeStep || 0].content}
      </Flex>
    </>
  );
};

Stepper.defaultProps = {
  activeStep: 0,
};
