import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('getAllUsers')
  async getallUsers() {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  async getaUserById(@Param('id')id:string) {
    return this.usersService.getUserById(id);
  }

  @Get()
  async getUserByIdTwo (@Query() queryParams:any) {
    const {id}= queryParams;
    return this.usersService.getUserById(id);
  }

  @Post('/createUser')
  async  createUser (@Body() Body:any) {
    return this.usersService.createUser(Body);
  }

  @Patch('/:id')
  async  updateUser (@Body() Body:any, @Param('id')id) {
    return this.usersService.updateUser(Body,id);
  }

  @Delete('/:id')
  async  deleteUser (@Param('id')id : string) {
    return this.usersService.deleteUser(id);
  }
}
