import { Request, Response } from "express";
import { InsertDatas, UserDatas, DeleteUser, UpdateUser } from "./service.ts";

export const inserting_UsersData = async (req: Request, res: Response) => {
  try {
    const insertedData = await InsertDatas(req.body);
    res.status(200).json({ message: "Data inserted successfully", data: insertedData });
  } catch (error: any) {
    res.status(500).json({ message: "Error inserting data", error: error.message });
  }
};


export const UserData_Fetching = async (req: Request, res: Response) => {
    try {
      const Userdata = await UserDatas();
      res.status(200).json({ message: "Data Fetched successfully", data: Userdata });
    } catch (error: any) {
      res.status(500).json({ message: "Error Fetching data", error: error.message });
    }
  };

  export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
  
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
  
      const result = await DeleteUser(userId);
      res.status(200).json({ message: "User deleted successfully", data: result });
    } catch (error: any) {
      res.status(500).json({ message: "Error deleting user", error: error.message });
    }
  };


  export const UpdateUserHandler = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
  
      if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
      }
  
      const result = await UpdateUser(userId);
      res.status(200).json({ message: "User Updated successfully", data: result });
    } catch (error: any) {
      res.status(500).json({ message: "Error Updating user", error: error.message });
    }
};
