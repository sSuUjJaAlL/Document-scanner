import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
  name: 'Users',
})
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id!: number;

  @Column({
    type:'varchar'
  })
  name: string | undefined

  @Column({
    type: 'varchar',
  })
  email: string | undefined;

  @Column({
    type: 'text',
  })
  password: string | undefined;

}
