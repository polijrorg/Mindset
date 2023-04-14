// import { inject, injectable } from 'tsyringe';

// import { sign } from 'jsonwebtoken';

// import AppError from '@shared/errors/AppError';

// import authConfig from '@config/auth';

// import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';

// import IUsersRepository from '../repositories/ICoursesRepository';

// interface IRequest {
//   email: string;
//   password: string;
// }

// @injectable()
// export default class AuthenticateUserService {
//   constructor(
//     @inject('UsersRepository')
//     private usersRepository: IUsersRepository,

//     @inject('HashProvider')
//     private hashProvider: IHashProvider,
//   ) { }

//   public async execute({ email, password }: IRequest): Promise<{ user: User, token: string }> {
//     const user = await this.usersRepository.findByEmailWithRelations(email);

//     if (!user) {
//       throw new AppError('Incorrect email/password combination', 401);
//     }

//     const passwordMatched = await this.hashProvider.compareHash(password, user.password);

//     if (!passwordMatched) {
//       throw new AppError('Incorrect email/password combination', 401);
//     }

//     const { secret, expiresIn } = authConfig.jwt;

//     const token = sign({}, secret, {
//       subject: user.id,
//       expiresIn,
//     });

//     return {
//       user,
//       token,
//     };
//   }
// }
