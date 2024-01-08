import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Product } from "./Product";
import { Exams } from "./Exams";

@Index("examining_boards_pkey", ["id", "idProduct"], { unique: true })
@Entity("examining_boards", { schema: "public" })
export class ExaminingBoards {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { primary: true, name: "id_product" })
  idProduct: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "acronym", length: 122 })
  acronym: string;

  @Column("integer", { name: "crawler_exams_qty" })
  crawlerExamsQty: number;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Product, (product) => product.examiningBoards)
  @JoinColumn([{ name: "id_product", referencedColumnName: "id" }])
  idProduct2: Product;

  @OneToMany(() => Exams, (exams) => exams.examiningBoards)
  exams: Exams[];
}
