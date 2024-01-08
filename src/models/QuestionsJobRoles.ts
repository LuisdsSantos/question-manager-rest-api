import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JobRoles } from "./JobRoles";
import { Questions } from "./Questions";

@Index("questions_job_roles_pkey", ["idJobRole", "idQuestion"], {
  unique: true,
})
@Entity("questions_job_roles", { schema: "public" })
export class QuestionsJobRoles {
  @Column("integer", { primary: true, name: "id_question" })
  idQuestion: number;

  @Column("integer", { primary: true, name: "id_job_role" })
  idJobRole: number;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => JobRoles, (jobRoles) => jobRoles.questionsJobRoles)
  @JoinColumn([{ name: "id_job_role", referencedColumnName: "id" }])
  idJobRole2: JobRoles;

  @ManyToOne(() => Questions, (questions) => questions.questionsJobRoles, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "id_question", referencedColumnName: "id" }])
  idQuestion2: Questions;
}
