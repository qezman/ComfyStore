export default function handler(req, res) {
  const { username, password } = req.body;

  // if (username === "user@gmail.com" && password === "pass") {
  //   res.status(200).json({ message: "Login successful!" });
  // } else {
  //   res.status(401).json({ message: "Invalid credentials" });
  // }
  res.status(200).json({ message: "Sign-up successful!" });
}
