import { Schema, model, Document, PaginateModel } from "mongoose";
import { USER_TYPE } from "../constants/types/userType";
import  paginate  from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
export interface userDocument extends Document {
    name?: string;
    company?: string;
    email: string;
    phone?: string;
    password: string;
    deparment?: string;
    joiningDate?: Date;
    address?: string;
    type: string;
    role?: string;
    status: number;
}

const userSchema = new Schema<userDocument>({
    name: { type: String},
    email: { type: String, required: true},
    company: { type: Schema.Types.ObjectId  , ref: "company" },
    deparment: { type: Schema.Types.ObjectId  , ref: "deparment" },
    phone: { type: String },
    password: { type: String },
    joiningDate: { type: Date },
    address: { type: String },
    type: { type: String, required: true , enum : USER_TYPE },
    status: { type: Number, enum: [0, 1], default: 1 },
}, {
    timestamps: true
});


userSchema.pre("save", function (next) {
    this.email = this.email.toLowerCase();
    next();
});

userSchema.plugin(paginate);
userSchema.plugin(aggregatePaginate);



export const UserModel = model<userDocument,PaginateModel<userDocument>>("user", userSchema);