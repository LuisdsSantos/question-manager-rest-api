import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ExaminingBoards } from "./ExaminingBoards";
import { ExamsQuestions } from "./ExamsQuestions";

@Index("exams_pkey", ["id"], { unique: true })
@Entity("exams", { schema: "public" })
export class Exams {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 512 })
  name: string;

  @Column("text", { name: "slug" })
  slug: string;

  @Column("text", { name: "level", nullable: true })
  level: string | null;

  @Column("timestamp with time zone", { name: "date" })
  date: Date;

  @Column("text", { name: "exam_pdf_path", nullable: true })
  examPdfPath: string | null;

  @Column("text", { name: "exam_pdf_url", nullable: true })
  examPdfUrl: string | null;

  @Column("text", { name: "answer_key_pdf_path", nullable: true })
  answerKeyPdfPath: string | null;

  @Column("text", { name: "answer_key_pdf_url", nullable: true })
  answerKeyPdfUrl: string | null;

  @Column("text", { name: "notice_pdf_path", nullable: true })
  noticePdfPath: string | null;

  @Column("text", { name: "notice_pdf_url", nullable: true })
  noticePdfUrl: string | null;

  @Column("boolean", {
    name: "crawler_questions_collected",
    default: () => "false",
  })
  crawlerQuestionsCollected: boolean;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => ExaminingBoards, (examiningBoards) => examiningBoards.exams)
  @JoinColumn([
    { name: "id_examining_board", referencedColumnName: "id" },
    { name: "id_product", referencedColumnName: "idProduct" },
  ])
  examiningBoards: ExaminingBoards;

  @OneToMany(() => ExamsQuestions, (examsQuestions) => examsQuestions.idExam2)
  examsQuestions: ExamsQuestions[];
}
