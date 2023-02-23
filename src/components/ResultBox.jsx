function ResultBox() {
  return (
    <section className="result">
        <h3 className="result-heading">Your Result</h3>
        <div className="result-indicator">
            <span className="result-indicator-title">76</span>
            <span className="result-indicator-total">of 100</span>
        </div>
        <span className="result-feedback-title">Great</span>
        <p className="result-feedback-description">
        You scored higher than 65% of the people who have taken these tests.
        </p>
    </section>
  )
}

export default ResultBox