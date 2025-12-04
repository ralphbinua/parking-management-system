import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userInformationSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    user_type: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// 🔒 Hash password before saving
userInformationSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
});

// 🔐 Compare passwords (for login)
userInformationSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
};

const userInformation = mongoose.model(
  "userInformation",
  userInformationSchema
);

export default userInformation;
