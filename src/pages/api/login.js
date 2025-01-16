export default function handler(req, res) {
  const { email, password } = req.body;

  if (email === "user@gmail.com" && password === "pass") {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
