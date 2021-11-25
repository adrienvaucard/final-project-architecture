export class CreateQuestionDto {
    question: string;
    proposals: {
        text: string
    }[];
    answer: string
}
