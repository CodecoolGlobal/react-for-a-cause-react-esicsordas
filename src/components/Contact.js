export default function Contact() {
  const clickContact = () => {
    
  };
  console.log("Contact");
  let content = document.querySelector(".content");
  content.innerHTML =
    `<div>
    <p id="welcometext"> Üzenjen nekünk!</p>
    <form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
      <button onClick=${clickContact}>Üzenet küldése</button>
    </div>`
}