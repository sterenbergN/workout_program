export default function Hero () {
    return (
        <>
            <h5>Complete this training program if you want to ...</h5>
            <ol className="benifits-list"> 
                <li>Follow a simple program with guaranteed results</li>
                <li>Get fit, healthy, strong, and shredded</li>
                <li>Learn more about lifting</li>
                <li>Become a gym bro</li>
            </ol>
            <h3>The Rules</h3>
            <p>To complete this program, you <b>must</b> follow these 3 simple rules</p>
            <ul className="rules-list">
                <div className="rule-item">
                    <p><b>Rest</b></p>
                    <p>Ensure that you take rest days when nessasary. Likely every 3-5 days</p>
                </div>
                <div className="rule-item">
                    <p><b>Reps</b></p>
                    <p>Every rep must be controlled, and working towards failure on the last sets. Try to use <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">2-2-2 tempo</abbr></p>
                </div>
                <div className="rule-item">
                    <p><b>Weight*</b></p>
                    <p>Select the maximum weight to complete the sets with good form.</p>
                </div>
            </ul>
            <small>* The first and second set should be 75% and 85% of the weight used for the last two sets</small>
            <h3>The Training Plan</h3>
            <p>This training plan uses the structure known as the <b>Push Pull Legs Split</b>, and follows this rotation below:</p>
            <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
            <p>Complete all of the workouts below and track your progress along the way</p>
        </>
    )
}