import { Favorite } from "../../favorite/entities/favorite.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CountryCode } from "../enum/CountryCode.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")  
    id: string;

    @Column({length: 40}) 
    name: string;
    
    @Column({unique: true})
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true, unique: true })
    googleId: string;

    @Column({ default: false })
    isEmailVerified: boolean;

    @Column({
    type: "enum",
    enum: CountryCode,
    nullable: false,               
    default: CountryCode.DE,      
    })
    country: CountryCode;
    

    @OneToMany(() => Favorite, favorite => favorite.user)
    favorites: Favorite[];
}
