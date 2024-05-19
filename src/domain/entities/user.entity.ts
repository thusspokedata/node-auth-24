export class UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: string,
    public readonly created_at: Date,
    public readonly updated_at: Date,
    public readonly img: string
  ) {}
}
