import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity() 
export class User {
  @PrimaryGeneratedColumn()
  id: number; // รหัสพนักงาน (Primary Key)

  @Column()
  user: string; // ชื่อผู้ใช้

  @Column()
  password: string; // รหัสผ่าน

  @Column()
  firstName: string; // ชื่อ

  @Column()
  lastName: string; // สกุล

  @Column()
  phoneNumber: string; // เบอร์โทร

  @Column()
  roleId: string; // รหัสตำแหน่ง (Foreign Key)

  
}
