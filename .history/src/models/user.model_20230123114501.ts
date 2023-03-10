import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// mongoose.HookNextFunction seems to have been removed so I created a custom type for the presave fn
export interface HookNextFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error?: Error): any;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// pre save function
userSchema.pre("save", async function (next: HookNextFunction) {
  let user = this as UserDocument;
  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get<number>("saltFactorRound"));
  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next();
});


userSchema.methods.comparePassword = async function(candidatePassword: string)

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
