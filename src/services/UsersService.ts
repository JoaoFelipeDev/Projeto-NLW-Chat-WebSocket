import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {

    async findByEmail(email: string){
        const usersRepository = getCustomRepository(UsersRepository)

        const userEmail = await usersRepository.findOne({email});

        return userEmail;
        
    }
    

    async create(email: string){
        const usersRepository = getCustomRepository(UsersRepository);

        const usesrExists = await usersRepository.findOne({email});

        

        if(usesrExists){
            throw new Error("Email alredy exists!! Sorry :( ");
        }

        const user = usersRepository.create({email});

        await usersRepository.save(user);

        return user;

    }

    
}

export { UsersService};