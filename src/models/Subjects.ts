import { Column, Entity, Index, OneToMany } from "typeorm";
import { QuestionsSubjects } from "./QuestionsSubjects";

@Index("subjects_pkey", ["id"], { unique: true })
@Entity("subjects", { schema: "public" })
export class Subjects {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 512 })
  name: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(
    () => QuestionsSubjects,
    (questionsSubjects) => questionsSubjects.idSubject2
  )
  questionsSubjects: QuestionsSubjects[];
}
