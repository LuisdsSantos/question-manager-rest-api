import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Exams } from "./Exams";
import { Questions } from "./Questions";

@Index("exams_questions_pkey", ["idExam", "idQuestion"], { unique: true })
@Entity("exams_questions", { schema: "public" })
export class ExamsQuestions {
  @Column("integer", { primary: true, name: "id_exam" })
  idExam: number;

  @Column("integer", { primary: true, name: "id_question" })
  idQuestion: number;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Exams, (exams) => exams.examsQuestions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "id_exam", referencedColumnName: "id" }])
  idExam2: Exams;

  @ManyToOne(() => Questions, (questions) => questions.examsQuestions, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "id_question", referencedColumnName: "id" }])
  idQuestion2: Questions;
}
