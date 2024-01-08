import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Questions } from "./Questions";
import { Subjects } from "./Subjects";

@Index("questions_subjects_pkey", ["idQuestion", "idSubject"], { unique: true })
@Entity("questions_subjects", { schema: "public" })
export class QuestionsSubjects {
  @Column("integer", { primary: true, name: "id_question" })
  idQuestion: number;

  @Column("integer", { primary: true, name: "id_subject" })
  idSubject: number;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Questions, (questions) => questions.questionsSubjects, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "id_question", referencedColumnName: "id" }])
  idQuestion2: Questions;

  @ManyToOne(() => Subjects, (subjects) => subjects.questionsSubjects)
  @JoinColumn([{ name: "id_subject", referencedColumnName: "id" }])
  idSubject2: Subjects;
}
