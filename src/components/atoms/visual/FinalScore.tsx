import React from 'react';
import { useVar } from '@/stores/variableStore';
import { variableDefinitions } from '@/data/variables';

interface FinalScoreProps {
    /** Array of variable names to check for correct answers */
    questionVarNames: string[];
    /** Label to show before the score (default: "Your Score:") */
    label?: string;
}

/**
 * FinalScore Component
 *
 * Displays the final score based on quiz questions answered correctly.
 * Reads from the variable store and compares with correct answers defined in variableDefinitions.
 */
export const FinalScore: React.FC<FinalScoreProps> = ({
    questionVarNames,
    label = "Your Score:",
}) => {
    const totalQuestions = questionVarNames.length;

    // Get all answers from the store and count correct ones
    let correctCount = 0;

    for (const varName of questionVarNames) {
        const studentAnswer = useVar(varName, '') as string;
        const correctAnswer = variableDefinitions[varName]?.correctAnswer || '';

        if (studentAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            correctCount++;
        }
    }

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <span className="text-lg text-muted-foreground mb-2">{label}</span>
            <span className="text-4xl font-bold text-primary">
                {correctCount} out of {totalQuestions}
            </span>
        </div>
    );
};

export default FinalScore;
