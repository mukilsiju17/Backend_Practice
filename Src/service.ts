import jwt from "jsonwebtoken";
import { Employee } from "./schema.ts";

interface UserData {
  Id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export const InsertDatas = async (userData: UserData) => {
  try {
    const { Id, name, email, password, role } = userData;
    const user = new Employee({ Id, name, email, password, role });
    const insertedData = await user.save();
    console.log("Data inserted successfully:", insertedData);
    return insertedData;
  } catch (error: any) {
    throw new Error("Error inserting data: " + error.message);
  }
};

export const UserDatas = async () => {
  try {
    const user = await Employee.find({}).sort({ Id: 1 });
    const userData = user.map((user) => {
      return {
        Id: user.Id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    });
    return userData;
  } catch (error: any) {
    throw new Error("Error fetching data: " + error.message);
  }
};

export const DeleteUser = async (Id: string) => {
  try {
    const result = await Employee.deleteOne({ Id });

    console.log("Delete operation result:", result);

    if (result.deletedCount === 0) {
      throw new Error("User not found");
    }

    return result;
  } catch (error: any) {
    throw new Error("Error deleting user: " + error.message);
  }
};

export const UpdateUser = async (Id: string) => {
  try {
    const result = await Employee.updateOne(
      { Id },
      { $set: { role: "Admin" } }
    );
    console.log("Update operation result:", result);
    return result;
  } catch (error: any) {
    throw new Error("Error Update user: " + error.message);
  }
};
