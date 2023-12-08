import { Controller, Get, Post, Req, Res, Put, Delete, Param, ParseIntPipe, Body, HttpException, HttpStatus, NotFoundException } from '@nestjs/common'
import { Response, Request } from 'express'
import { ApiBody, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";

import { UserService } from './user.service'
import { UpdateUserDto } from './dto/updateUser.dto'
import { User } from './user.entity';

@Crud({
  model: {
    type: User,
  },
})
@ApiTags('Users')
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
 
  // @Get('/')
  // @ApiResponse({ 
  //   status: 200, 
  //   description: 'Get all users.',
  //   isArray: true
  // })
  // async getAllUsers(
  //   @Res() res: Response,
  // ) {
  //    const users = await this.userService.getAllUsers()

  //    return res.send({
  //     status: 'ok',
  //     data: users,
  //   })
  // }

  // @Get('/:id')
  // @ApiResponse({ 
  //   status: 200, 
  //   description: 'Get user by id.',
  //   type: User
  // })
  // @ApiResponse({ 
  //   status: 404, 
  //   description: 'User not Found.'
  // })
  // async getUser(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Res() res: Response,
  // ) {
  //    const userData = await this.userService.getUserData(id)

  //    if(userData === null) {
  //     throw new HttpException('User with id = ' + id + ' not found', HttpStatus.NOT_FOUND)
  //    }

  //   return res.send({
  //     status: 'ok',
  //     data: userData,
  //   })
  // }

  // @Post('/')
  // @ApiResponse({ 
  //   status: 200, 
  //   description: 'Create user.',
  //   type: User
  // })
  // @ApiBody({ type: UpdateUserDto })
  // async createUser(
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   await this.userService.createUser(req.body)
  //   console.log(req.body)
  //   return res.send({ status: 'ok' })
  // }

  // @Put('/:id')
  // @ApiResponse({ 
  //   status: 200, 
  //   description: 'Update user.',
  //   type: User
  // })
  // @ApiResponse({ 
  //   status: 404,  
  //   description: 'User not Found.'
  // })
  // @ApiBody({ type: UpdateUserDto })
  // async updateUser(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() body: UpdateUserDto,
  //   @Res() res: Response,
  // ) {
     
  //   const userData = await this.userService.getUserData(id)
  //    if(userData === null) {
  //     throw new HttpException('User with id = ' + id + ' not found', HttpStatus.NOT_FOUND)
  //    }

  //   await this.userService.updateUserData(id, body)
  //   return res.send({ status: 'ok' })
  // }

  // @Delete('/:id')
  // @ApiResponse({ 
  //   status: 200, 
  //   description: 'Delete user.'
  // })
  // @ApiResponse({ 
  //   status: 404, 
  //   description: 'User not Found.'
  // })
  // async deleteUser(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Res() res: Response,
  // ) {
  //   const userData = await this.userService.getUserData(id)
  //   if(userData === null) {
  //    throw new HttpException('User with id = ' + id + ' not found', HttpStatus.NOT_FOUND)
  //   }
  //   await this.userService.deleteUser(id)
  //   return res.send({ status: 'ok' })
  // }
}