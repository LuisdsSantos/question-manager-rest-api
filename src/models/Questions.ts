import { Column, Entity, Index, OneToMany } from "typeorm";
import { AttachedFiles } from "./AttachedFiles";
import { ExamsQuestions } from "./ExamsQuestions";
import { QuestionsJobRoles } from "./QuestionsJobRoles";
import { QuestionsSubjects } from "./QuestionsSubjects";

@Index("questions_pkey", ["id"], { unique: true })
@Entity("questions", { schema: "public" })
export class Questions {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("boolean", { name: "active", nullable: true })
  active: boolean | null;

  @Column("text", { name: "classified_in", nullable: true })
  classifiedIn: string | null;

  @Column("integer", { name: "comments_count", nullable: true })
  commentsCount: number | null;

  @Column("boolean", { name: "commented_by_professor", nullable: true })
  commentedByProfessor: boolean | null;

  @Column("boolean", { name: "nullified", nullable: true })
  nullified: boolean | null;

  @Column("integer", { name: "difficulty", nullable: true })
  difficulty: number | null;

  @Column("boolean", { name: "has_commentaries", nullable: true })
  hasCommentaries: boolean | null;

  @Column("boolean", { name: "has_professor_commentaries", nullable: true })
  hasProfessorCommentaries: boolean | null;

  @Column("timestamp with time zone", {
    name: "last_comment_at",
    nullable: true,
  })
  lastCommentAt: Date | null;

  @Column("boolean", { name: "multiple_choice", nullable: true })
  multipleChoice: boolean | null;

  @Column("boolean", { name: "outdated", nullable: true })
  outdated: boolean | null;

  @Column("integer", { name: "publication_year", nullable: true })
  publicationYear: number | null;

  @Column("timestamp with time zone", { name: "applied_at", nullable: true })
  appliedAt: Date | null;

  @Column("text", { name: "right_answer", nullable: true })
  rightAnswer: string | null;

  @Column("text", { name: "statement", nullable: true })
  statement: string | null;

  @Column("timestamp with time zone", {
    name: "original_created_at",
    nullable: true,
  })
  originalCreatedAt: Date | null;

  @Column("timestamp with time zone", {
    name: "original_updated_at",
    nullable: true,
  })
  originalUpdatedAt: Date | null;

  @Column("text", { name: "clean_sanitized_statement", nullable: true })
  cleanSanitizedStatement: string | null;

  @Column("text", { name: "associated_text", nullable: true })
  associatedText: string | null;

  @Column("text", { name: "alternatives", nullable: true })
  alternatives: string | null;

  @Column("integer", { name: "alternatives_qty", nullable: true })
  alternativesQty: number | null;

  @Column("character varying", {
    name: "discipline_name",
    nullable: true,
    length: 255,
  })
  disciplineName: string | null;

  @Column("character varying", {
    name: "institute_name",
    nullable: true,
    length: 255,
  })
  instituteName: string | null;

  @Column("text", { name: "professor_commentary", nullable: true })
  professorCommentary: string | null;

  @Column("jsonb", { name: "full_json_response", nullable: true })
  fullJsonResponse: object | null;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(() => AttachedFiles, (attachedFiles) => attachedFiles.idQuestion2)
  attachedFiles: AttachedFiles[];

  @OneToMany(
    () => ExamsQuestions,
    (examsQuestions) => examsQuestions.idQuestion2
  )
  examsQuestions: ExamsQuestions[];

  @OneToMany(
    () => QuestionsJobRoles,
    (questionsJobRoles) => questionsJobRoles.idQuestion2
  )
  questionsJobRoles: QuestionsJobRoles[];

  @OneToMany(
    () => QuestionsSubjects,
    (questionsSubjects) => questionsSubjects.idQuestion2
  )
  questionsSubjects: QuestionsSubjects[];
}
