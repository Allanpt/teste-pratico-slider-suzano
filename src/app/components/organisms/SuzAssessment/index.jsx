import { Box } from "@mui/material";
import SuzQuestion from "../../molecules/SuzQuestion";

export default function SuzAssessment({ type }) {
  const typesDictionary = {
    performance: [
      {
        id: 1,
        question: "Como Avalia suas Entregas?",
        description:
          "Avalie a qualidade, consistência e pontualidade das suas entregas em relação às expectativas.",
      },
      {
        id: 2,
        question: "Como Avalia sua Motivação?",
        description:
          "Descreva seu nível de engajamento e entusiasmo ao enfrentar desafios e buscar metas.",
      },
      {
        id: 3,
        question: "Como Avalia sua Resiliência?",
        description:
          "Considere sua capacidade de superar obstáculos e manter o foco em situações adversas.",
      },
    ],
  };

  const questions = typesDictionary[type] || [];

  return (
    <Box bgcolor={"#ECEBE880"}>
      {questions.map((question) => {
        return <SuzQuestion key={question.id} question={question} />;
      })}
    </Box>
  );
}
