import { Column, Entity, Index, OneToMany } from "typeorm";
import { ExaminingBoards } from "./ExaminingBoards";

@Index("product_pkey", ["id"], { unique: true })
@Entity("product", { schema: "public" })
export class Product {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 32 })
  name: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @OneToMany(
    () => ExaminingBoards,
    (examiningBoards) => examiningBoards.idProduct2
  )
  examiningBoards: ExaminingBoards[];
}
