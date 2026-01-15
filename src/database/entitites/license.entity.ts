import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'license',
})
export class License extends BaseEntity{
    @PrimaryGeneratedColumn({
        type:'bigint'
    })
    id!:number

    @Column({
        type:'longtext',
    })
    image!:string

}