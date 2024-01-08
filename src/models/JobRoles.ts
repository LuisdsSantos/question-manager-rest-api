import { Column, Entity, Index, OneToMany } from "typeorm";
import { QuestionsJobRoles } from "./QuestionsJobRoles";

@Index("job_roles_pkey", ["id"], { unique: true })
@Entity("job_roles", { schema: "public" })
export class JobRoles {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("text", { name: "name" })
  name: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(
    () => QuestionsJobRoles,
    (questionsJobRoles) => questionsJobRoles.idJobRole2
  )
  questionsJobRoles: QuestionsJobRoles[];
}
