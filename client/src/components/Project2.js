export default function Project2() {
  return (
    <div className="P2">
      <h1>Project 2, BlackJack</h1>
      <h2>This is another one of my favorite projects I built using JavaScript</h2>
      <h2>A section of code I would like to point out here is with my solution to what I called "The Ace problem"</h2>
      <h3>As you know if you play BlackJack, whenever an ace lands on the table it can be counted as an 11 or 1 depending on how high of a hand you have.</h3>
      <h3>Now the main problem with that is when calculating this scenario i kept getting errors where you have 2 aces in your hand and a 10 lets say and you would still bust becasue it counts it as 22 instead of 12.</h3>
      <h3>My solution to the problem was simple, have a seperate tracker for each ace that could pop up and when it did pop up, and you went over 21, you hand would subtract 10.</h3>
      <h3>Simple yet effective</h3>
      <h3>
        <a href='https://black-jackgame.surge.sh/index.html'>Here</a> is the deployed app(not a mobile compatible app)
        <a href="https://github.com/jascolil01/BlackJack-Game"> Here</a> is the repository on GitHub
      </h3>
    </div>
  )
}
