import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { StepLayout, Step } from "@/components/layouts/StepLayout";
import { EditableH1, EditableH2, EditableParagraph, InlineClozeInput } from "@/components/atoms";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions, clozePropsFromDefinition, getVariableInfo } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

/**
 * Maths Questionnaire for 7-Year-Olds
 * ===================================
 * 10 questions covering addition and subtraction
 * - Section 1: Addition Practice (4 questions)
 * - Section 2: Subtraction Practice (4 questions)
 * - Section 3: Mixed Challenge (2 questions)
 */

export const blocks: ReactElement[] = [
    // ============================================
    // Title Section
    // ============================================
    <StackLayout key="layout-title" maxWidth="xl">
        <Block id="block-title" padding="lg">
            <EditableH1 id="h1-title" blockId="block-title">
                Maths Quiz Time!
            </EditableH1>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-intro" maxWidth="xl">
        <Block id="block-intro" padding="sm">
            <EditableParagraph id="para-intro" blockId="block-intro">
                Welcome! Let's practice addition and subtraction. Type your answer in the box and watch what happens when you get it right!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // ============================================
    // Section 1: Addition Practice
    // ============================================
    <StackLayout key="layout-section1-header" maxWidth="xl">
        <Block id="block-section1-header" padding="md">
            <EditableH2 id="h2-section1" blockId="block-section1-header">
                Part 1: Addition
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-addition-steps" maxWidth="xl">
        <Block id="block-addition-steps" padding="sm">
            <StepLayout varName="quizProgress" showProgress={true}>
                {/* Question 1 */}
                <Step completionVarName="add1" autoAdvance>
                    <EditableParagraph id="para-add1" blockId="block-addition-steps">
                        <strong>Question 1:</strong> What is 5 + 3 = {" "}
                        <InlineClozeInput
                            varName="add1"
                            correctAnswer="8"
                            {...clozePropsFromDefinition(getVariableInfo('add1'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 2 */}
                <Step completionVarName="add2" autoAdvance>
                    <EditableParagraph id="para-add2" blockId="block-addition-steps">
                        <strong>Question 2:</strong> What is 7 + 6 = {" "}
                        <InlineClozeInput
                            varName="add2"
                            correctAnswer="13"
                            {...clozePropsFromDefinition(getVariableInfo('add2'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 3 */}
                <Step completionVarName="add3" autoAdvance>
                    <EditableParagraph id="para-add3" blockId="block-addition-steps">
                        <strong>Question 3:</strong> What is 9 + 4 = {" "}
                        <InlineClozeInput
                            varName="add3"
                            correctAnswer="13"
                            {...clozePropsFromDefinition(getVariableInfo('add3'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 4 */}
                <Step completionVarName="add4" autoAdvance>
                    <EditableParagraph id="para-add4" blockId="block-addition-steps">
                        <strong>Question 4:</strong> What is 8 + 7 = {" "}
                        <InlineClozeInput
                            varName="add4"
                            correctAnswer="15"
                            {...clozePropsFromDefinition(getVariableInfo('add4'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Addition Complete */}
                <Step>
                    <EditableParagraph id="para-add-complete" blockId="block-addition-steps">
                        Excellent work on addition! You're ready for subtraction.
                    </EditableParagraph>
                </Step>
            </StepLayout>
        </Block>
    </StackLayout>,

    // ============================================
    // Section 2: Subtraction Practice
    // ============================================
    <StackLayout key="layout-section2-header" maxWidth="xl">
        <Block id="block-section2-header" padding="md">
            <EditableH2 id="h2-section2" blockId="block-section2-header">
                Part 2: Subtraction
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-subtraction-steps" maxWidth="xl">
        <Block id="block-subtraction-steps" padding="sm">
            <StepLayout showProgress={true}>
                {/* Question 5 */}
                <Step completionVarName="sub1" autoAdvance>
                    <EditableParagraph id="para-sub1" blockId="block-subtraction-steps">
                        <strong>Question 5:</strong> What is 12 - 5 = {" "}
                        <InlineClozeInput
                            varName="sub1"
                            correctAnswer="7"
                            {...clozePropsFromDefinition(getVariableInfo('sub1'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 6 */}
                <Step completionVarName="sub2" autoAdvance>
                    <EditableParagraph id="para-sub2" blockId="block-subtraction-steps">
                        <strong>Question 6:</strong> What is 15 - 8 = {" "}
                        <InlineClozeInput
                            varName="sub2"
                            correctAnswer="7"
                            {...clozePropsFromDefinition(getVariableInfo('sub2'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 7 */}
                <Step completionVarName="sub3" autoAdvance>
                    <EditableParagraph id="para-sub3" blockId="block-subtraction-steps">
                        <strong>Question 7:</strong> What is 18 - 9 = {" "}
                        <InlineClozeInput
                            varName="sub3"
                            correctAnswer="9"
                            {...clozePropsFromDefinition(getVariableInfo('sub3'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 8 */}
                <Step completionVarName="sub4" autoAdvance>
                    <EditableParagraph id="para-sub4" blockId="block-subtraction-steps">
                        <strong>Question 8:</strong> What is 14 - 6 = {" "}
                        <InlineClozeInput
                            varName="sub4"
                            correctAnswer="8"
                            {...clozePropsFromDefinition(getVariableInfo('sub4'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Subtraction Complete */}
                <Step>
                    <EditableParagraph id="para-sub-complete" blockId="block-subtraction-steps">
                        Great job! Now let's try some mixed questions.
                    </EditableParagraph>
                </Step>
            </StepLayout>
        </Block>
    </StackLayout>,

    // ============================================
    // Section 3: Mixed Challenge
    // ============================================
    <StackLayout key="layout-section3-header" maxWidth="xl">
        <Block id="block-section3-header" padding="md">
            <EditableH2 id="h2-section3" blockId="block-section3-header">
                Part 3: Mixed Challenge
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-mixed-steps" maxWidth="xl">
        <Block id="block-mixed-steps" padding="sm">
            <StepLayout showProgress={true}>
                {/* Question 9 */}
                <Step completionVarName="mix1" autoAdvance>
                    <EditableParagraph id="para-mix1" blockId="block-mixed-steps">
                        <strong>Question 9:</strong> What is 6 + 9 = {" "}
                        <InlineClozeInput
                            varName="mix1"
                            correctAnswer="15"
                            {...clozePropsFromDefinition(getVariableInfo('mix1'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Question 10 */}
                <Step completionVarName="mix2" autoAdvance>
                    <EditableParagraph id="para-mix2" blockId="block-mixed-steps">
                        <strong>Question 10:</strong> What is 17 - 8 = {" "}
                        <InlineClozeInput
                            varName="mix2"
                            correctAnswer="9"
                            {...clozePropsFromDefinition(getVariableInfo('mix2'))}
                        />
                    </EditableParagraph>
                </Step>

                {/* Quiz Complete */}
                <Step>
                    <EditableParagraph id="para-complete" blockId="block-mixed-steps">
                        You did it! You completed all 10 questions. Well done!
                    </EditableParagraph>
                </Step>
            </StepLayout>
        </Block>
    </StackLayout>,
];
