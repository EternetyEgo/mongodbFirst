const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/node")
  .then((res) => {
    console.log("Mongodb is working");
  })
  .catch((err) => {
    console.log("Mongodb is not working");
  });

// module.exports = router

const userScheme = mongoose.Schema({
  name: String,
  phone: Number,
  skills: [String],
  practice: Number,
  isAdmin: Boolean, 
});
const User = mongoose.model("User", userScheme);

const createUser = async () => {
  const data = new User({
    name: "HydraCoder",
    phone: 11111111,
    skills: ["Java", "Python", "React", "Javascript", "Dart"],
    practice: 4,
    isAdmin: true,
  });

  const result = await data.save();
  console.log(result);
};

createUser()

const getUser = async () => {
    const data = await User.find();
  //   const data = await User.find({isAdmin: false});  shunday malumotga ega bolgan malumotlarni olib keladi
  //   const data = await User.findById({_id: 1}) faqat idga tegisli malumotni olib keladi
  //   const data = await User.findByOne({name: 'palonchi'}) faqat osha maumotga tegishli 1ta malumotni olib keladi

  console.log(data);
};
getUser();