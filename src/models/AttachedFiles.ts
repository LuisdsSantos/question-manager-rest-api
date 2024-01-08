import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Questions } from "./Questions";

@Index("attached_files_pkey", ["fileUrl", "idQuestion"], { unique: true })
@Entity("attached_files", { schema: "public" })
export class AttachedFiles {
  @Column("integer", { primary: true, name: "id_question" })
  idQuestion: number;

  @Column("text", { primary: true, name: "file_url" })
  fileUrl: string;

  @Column("text", { name: "file_path" })
  filePath: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Questions, (questions) => questions.attachedFiles)
  @JoinColumn([{ name: "id_question", referencedColumnName: "id" }])
  idQuestion2: Questions;
}
