import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  private name: string;
  private email: string;
  private password: string;

  constructor(id: string, name: string, email: string, password: string) {
    super(id);
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getPassword() {
    return this.password;
  }

  getPublicProfile() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
  }

  greet() {
    return `Welcome back, ${this.name}!`;
  }
}


