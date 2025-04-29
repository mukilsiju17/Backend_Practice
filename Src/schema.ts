import mongoose, { Schema, model } from 'mongoose';

// const AddressSchema = new Schema({
//   line1: String,
//   line2: String,
//   city: String,
//   state: String,
//   postalCode: String,
//   country: String,
// }, { _id: false });

// const ContactSchema = new Schema({
//   type: { type: String },       
//   value: { type: String },      
// }, { _id: false });

// const EmergencyContactSchema = new Schema({
//   name: String,
//   relationship: String,
//   contact: ContactSchema,
// }, { _id: false });

// const DependentSchema = new Schema({
//   name: String,
//   relationship: String,
//   dateOfBirth: Date,
// }, { _id: false });

// const WorkPermitInfoSchema = new Schema({
//   country: String,
//   permitType: String,
//   validFrom: Date,
//   validTo: Date,
// }, { _id: false });

// const EmployeePersonalDetailsSchema = new Schema({
//   employeeId: { type: String, index: true, required: true },

//   personalInfo: {
//     firstName: String,
//     middleName: String,
//     lastName: String,
//     previousNames: [String],

//     pronouns: String,
//     maritalStatus: String,
//     citizenship: String,
//     ethnicity: String,
//     religion: String,
//     disability: String,
//     veteranStatus: String,
//     militaryService: String,

//     nationalIds: {
//       pan: String,
//       aadhaar: String,
//       amka: String,
//       other: [String],
//     },

//     secondaryIds: [String],

//     passport: {
//       number: String,
//       country: String,
//       expiry: Date,
//     },

//     drivingLicense: {
//       number: String,
//       state: String,
//       expiry: Date,
//     },

//     address: AddressSchema,

//     contacts: [ContactSchema],

//     emergencyContacts: [EmergencyContactSchema],

//     dependents: [DependentSchema],

//     locale: String,         
//     timeZone: String,       

//     links: [String],        

//     clothingSize: {
//       shirt: String,
//       pants: String,
//       shoe: String,
//       hat: String,
//     },
//   },

//   workPermitInfo: [WorkPermitInfoSchema],
// }, {
//   collection: 'employee_personal_details',
//   timestamps: true,      
// });


const Users = new Schema({
  Id: {
    type: String, 
    required: true, 
    unique: true,
    index: true
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: {
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['Admin', 'User'], 
    default: 'user' 
  },
})


export const Employee = model('Employee', Users, 'employee_details');