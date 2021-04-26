import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import { v4 as uuid} from "uuid";


@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

   

  

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        
        !this.id ? this.id = uuid() : null
    }

}

export {User}