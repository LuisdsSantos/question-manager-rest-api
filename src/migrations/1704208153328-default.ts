import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1704208153328 implements MigrationInterface {
    name = 'Default1704208153328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "examining_boards" DROP CONSTRAINT "examining_boards_id_product_fkey"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "exams_id_examining_board_id_product_fkey"`);
        await queryRunner.query(`ALTER TABLE "exams_questions" DROP CONSTRAINT "exams_questions_id_exam_fkey"`);
        await queryRunner.query(`ALTER TABLE "exams_questions" DROP CONSTRAINT "exams_questions_id_question_fkey"`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" DROP CONSTRAINT "questions_job_roles_id_job_role_fkey"`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" DROP CONSTRAINT "questions_job_roles_id_question_fkey"`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" DROP CONSTRAINT "questions_subjects_id_question_fkey"`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" DROP CONSTRAINT "questions_subjects_id_subject_fkey"`);
        await queryRunner.query(`ALTER TABLE "attached_files" DROP CONSTRAINT "attached_files_id_question_fkey"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "examining_boards" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "id_examining_board" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "id_product" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams_questions" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "job_roles" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "attached_files" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`CREATE UNIQUE INDEX "product_pkey" ON "product" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "examining_boards_pkey" ON "examining_boards" ("id", "id_product") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "exams_pkey" ON "exams" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "exams_questions_pkey" ON "exams_questions" ("id_exam", "id_question") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "job_roles_pkey" ON "job_roles" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "questions_job_roles_pkey" ON "questions_job_roles" ("id_job_role", "id_question") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "subjects_pkey" ON "subjects" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "questions_subjects_pkey" ON "questions_subjects" ("id_question", "id_subject") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "questions_pkey" ON "questions" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "attached_files_pkey" ON "attached_files" ("file_url", "id_question") `);
        await queryRunner.query(`ALTER TABLE "examining_boards" ADD CONSTRAINT "FK_9fb7ea060219fa1b051b9887bba" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_2408bb44313ff18bfda8da71361" FOREIGN KEY ("id_examining_board", "id_product") REFERENCES "examining_boards"("id","id_product") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams_questions" ADD CONSTRAINT "FK_0b79932b9e3556845637121f6a8" FOREIGN KEY ("id_exam") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams_questions" ADD CONSTRAINT "FK_9275abab6f12d4c33b392122d88" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" ADD CONSTRAINT "FK_d576866e64ce2c9c4655e38ca86" FOREIGN KEY ("id_job_role") REFERENCES "job_roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" ADD CONSTRAINT "FK_af3d9e6d98b88413b485d1eeda8" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" ADD CONSTRAINT "FK_d77c729b4acb9171ab619338df4" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" ADD CONSTRAINT "FK_6bee284bbb8353cac85ceedd8d8" FOREIGN KEY ("id_subject") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "attached_files" ADD CONSTRAINT "FK_39519427254e93d2b3957d5f5d9" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "attached_files" DROP CONSTRAINT "FK_39519427254e93d2b3957d5f5d9"`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" DROP CONSTRAINT "FK_6bee284bbb8353cac85ceedd8d8"`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" DROP CONSTRAINT "FK_d77c729b4acb9171ab619338df4"`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" DROP CONSTRAINT "FK_af3d9e6d98b88413b485d1eeda8"`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" DROP CONSTRAINT "FK_d576866e64ce2c9c4655e38ca86"`);
        await queryRunner.query(`ALTER TABLE "exams_questions" DROP CONSTRAINT "FK_9275abab6f12d4c33b392122d88"`);
        await queryRunner.query(`ALTER TABLE "exams_questions" DROP CONSTRAINT "FK_0b79932b9e3556845637121f6a8"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_2408bb44313ff18bfda8da71361"`);
        await queryRunner.query(`ALTER TABLE "examining_boards" DROP CONSTRAINT "FK_9fb7ea060219fa1b051b9887bba"`);
        await queryRunner.query(`DROP INDEX "public"."attached_files_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."questions_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."questions_subjects_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."subjects_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."questions_job_roles_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."job_roles_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."exams_questions_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."exams_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."examining_boards_pkey"`);
        await queryRunner.query(`DROP INDEX "public"."product_pkey"`);
        await queryRunner.query(`ALTER TABLE "attached_files" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "subjects" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "job_roles" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "exams_questions" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "id_product" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "id_examining_board" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "examining_boards" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "attached_files" ADD CONSTRAINT "attached_files_id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" ADD CONSTRAINT "questions_subjects_id_subject_fkey" FOREIGN KEY ("id_subject") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_subjects" ADD CONSTRAINT "questions_subjects_id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" ADD CONSTRAINT "questions_job_roles_id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions_job_roles" ADD CONSTRAINT "questions_job_roles_id_job_role_fkey" FOREIGN KEY ("id_job_role") REFERENCES "job_roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams_questions" ADD CONSTRAINT "exams_questions_id_question_fkey" FOREIGN KEY ("id_question") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams_questions" ADD CONSTRAINT "exams_questions_id_exam_fkey" FOREIGN KEY ("id_exam") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "exams_id_examining_board_id_product_fkey" FOREIGN KEY ("id_examining_board", "id_product") REFERENCES "examining_boards"("id","id_product") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "examining_boards" ADD CONSTRAINT "examining_boards_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
